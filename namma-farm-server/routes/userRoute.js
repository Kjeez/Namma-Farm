const express = require("express");
const {
  getAllUserController,
  updateUserController,
  deleteUserByIdController,
  getSingleUserByIdController,
  updateBlockStatusController,
  sendOtpController,
  verifyOtpController,
  updatePasswordController,
} = require("../controllers/userController");
const router = express.Router();

router.get("/getAllUser", getAllUserController);
router.get("/getSingleUserById/:userId", getSingleUserByIdController);
router.put("/updateUser", updateUserController);
router.delete("/deleteUserById/:userId", deleteUserByIdController);
router.put("/updateBlockStatus", updateBlockStatusController);
router.post("/sent-otp", sendOtpController);
router.post("/verify-otp", verifyOtpController);
router.put("/update-password", updatePasswordController);

module.exports = router;
