const userModel = require("../models/userModel");
const nodemailer = require("nodemailer");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAllUserController = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send({
      message: "Users fetched successfully",
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const getSingleUserByIdController = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({
        message: "User Id is required",
        success: false,
      });
    }

    const user = await userModel.findById({ _id: userId });

    if (!user) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).send({
      message: "Users fetched successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address } = req.body;

    if (!email) {
      return res.status(400).send({
        message: "Email is required!",
        success: false,
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "user doesnot exist!",
        success: false,
      });
    }

    const updatedUser = await userModel.findOneAndUpdate(
      { email: email },
      {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address,
      },
      { new: true }
    );

    res.status(200).send({
      message: "User updated successfully!",
      success: true,
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const deleteUserByIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).send({
        message: "User Id is required",
        success: false,
      });
    }

    const deletedUser = await userModel.findByIdAndDelete({ _id: userId });

    if (!deletedUser) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).send({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const updateBlockStatusController = async (req, res) => {
  try {
    const { isBlocked, email } = req.body;

    if (!email) {
      return res.status(400).send({
        message: "Email is required!",
        success: false,
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "user doesnot exist!",
        success: false,
      });
    }

    const updatedUser = await userModel.findOneAndUpdate(
      { email: email },
      {
        isBlocked: isBlocked,
      },
      { new: true }
    );

    res.status(200).send({
      message: "User updated successfully!",
      success: true,
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const sendOtpController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).send({
        success: false,
        message: "Email is required!",
      });
      return;
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).send({
        success: false,
        message: "User doesnot exist!",
      });
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    var otpToken = JWT.sign(
      {
        otp: otp,
      },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    res.cookie("oid", otpToken, {
      maxAge: 10 * 60 * 1000,
      withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

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
      subject: "Password reset OTP",
      text: `Your OTP for password reset is: ${otp}. Please use this OTP to reset your password.`,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).send({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const verifyOtpController = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const oid = req.cookies?.oid;

    const decodedoid = JWT.verify(oid, process.env.JWT_SECRET);

    if (!email) {
      res.status(400).send({
        success: false,
        message: "Email is required!",
      });
      return;
    }
    if (!otp) {
      res.status(400).send({
        success: false,
        message: "otp is required!",
      });
      return;
    }

    if (decodedoid.otp === otp) {
      return res.status(200).send({
        success: true,
        message: "OTP verified",
      });
    }
    res.status(400).send({
      success: false,
      message: "Incorrect otp!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in verify controller",
      error,
    });
  }
};

const updatePasswordController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).send({
        success: false,
        message: "Email is required!",
      });
      return;
    }
    if (!password) {
      res.status(400).send({
        success: false,
        message: "Password is required!",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updatedUser = await userModel.findOneAndUpdate(
      { email: email },
      { password: hashedPassword },
      { new: true }
    );

    res.clearCookie("oid");

    if (!updatedUser) {
      return res.status(500).send({
        success: false,
        message: "Something went wrong!",
      });
    }

    res.status(200).send({
      success: true,
      message: "Password updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

module.exports = {
  getAllUserController,
  updateUserController,
  deleteUserByIdController,
  getSingleUserByIdController,
  updateBlockStatusController,
  updatePasswordController,
  verifyOtpController,
  sendOtpController,
};
