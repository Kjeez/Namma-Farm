const couponModel = require("../models/couponModel");

const getCouponController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required!",
      });
    }

    const coupon = await couponModel.findOne({ name });
    if (!coupon) {
      return res.status(400).send({
        success: false,
        message: "Coupon not found!",
      });
    }
    res.status(200).send({
      message: "Coupon fetched successfully",
      success: true,
      coupon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const createCouponController = async (req, res) => {
  try {
    const { name, expiry, discount } = req.body;
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required!",
      });
    }

    if (!expiry) {
      return res.status(400).send({
        success: false,
        message: "Expiry is required!",
      });
    }

    if (!discount) {
      return res.status(400).send({
        success: false,
        message: "Discount is required!",
      });
    }

    const coupon = await couponModel.findOne({ name });
    if (coupon) {
      return res.status(400).send({
        success: false,
        message: "Coupon already exists!",
      });
    }

    const newCoupon = await new couponModel({
      name,
      expiry,
      discount,
    }).save();

    res.status(200).send({
      message: "Coupon fetched successfully",
      success: true,
      newCoupon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const getAllCouponsController = async (req, res) => {
  try {
    const coupons = await couponModel.find();
    res.status(200).send({
      message: "Coupon fetched successfully",
      success: true,
      coupons,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const updateCouponController = async (req, res) => {
  try {
    const { couponId } = req.params;
    const { name, expiry, discount } = req.body;
    if (!couponId) {
      return res.status(400).send({
        success: false,
        message: "Coupon Id is required!",
      });
    }
    const updatedCoupon = await couponModel.findByIdAndUpdate(
      couponId,
      { name, expiry, discount },
      { new: true }
    );

    if (!updatedCoupon) {
      return res.status(400).send({
        success: false,
        message: "Coupon doesnot exists!",
      });
    }

    res.status(200).send({
      message: "Coupon updated successfully",
      success: true,
      updatedCoupon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const deleteCouponController = async (req, res) => {
  try {
    const { couponId } = req.params;
    if (!couponId) {
      return res.status(400).send({
        success: false,
        message: "Coupon Id is required!",
      });
    }
    const deletedCoupon = await couponModel.findByIdAndDelete(couponId);

    if (!deletedCoupon) {
      return res.status(400).send({
        success: false,
        message: "Coupon doesnot exists!",
      });
    }

    res.status(200).send({
      message: "Coupon deleted successfully",
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

module.exports = {
  getCouponController,
  createCouponController,
  getAllCouponsController,
  updateCouponController,
  deleteCouponController
};
