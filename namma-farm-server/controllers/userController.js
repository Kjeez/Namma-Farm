const userModel = require("../models/userModel");

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

module.exports = {
  getAllUserController,
  updateUserController,
  deleteUserByIdController,
  getSingleUserByIdController,
  updateBlockStatusController,
};
