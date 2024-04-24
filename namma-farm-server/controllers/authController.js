const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const registerController = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;

    if (!firstName) {
      return res.status(400).send({
        success: false,
        message: "First Name is required.",
      });
    }
    if (!lastName) {
      return res.status(400).send({
        success: false,
        message: "Last Name is required.",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required.",
      });
    }
    if (!password) {
      return res.status(400).send({
        success: false,
        message: "Password is required.",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registered! Please Login",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await new userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone: phone,
    }).save();

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      secureConnection: false,
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "User Registered Successfully",
      text: `${firstName} ${lastName} has registered successfully`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
      success: true,
      message: "User registered successfully.",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Username and password are required!",
      });
    }

    //if existing user
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).send({
        success: false,
        message: "Invalid username or password!",
      });
    }
    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid username or password",
      });
    }

    //all conditions are satisfied so token is generated
    const token = JWT.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).send({
      success: true,
      message: "Successfully logged in",
      existingUser,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

module.exports = { registerController, loginController };
