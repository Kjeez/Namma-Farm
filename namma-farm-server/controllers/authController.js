const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required.",
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
      name,
      email,
      password: hashedPassword,
    }).save();
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
