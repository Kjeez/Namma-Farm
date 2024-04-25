const express = require("express");
const {
  createCouponController,
  getCouponController,
  getAllCouponsController,
  updateCouponController,
  deleteCouponController,
} = require("../controllers/couponController");
const router = express.Router();

router.post("/get-coupon", getCouponController);
router.post("/create-coupon", createCouponController);
router.get("/getAllCoupons", getAllCouponsController);
router.put("/update-coupon/:couponId", updateCouponController);
router.delete("/delete-coupon/:couponId", deleteCouponController);


module.exports = router;
