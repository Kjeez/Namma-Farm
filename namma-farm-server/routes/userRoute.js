const express = require("express");
const {
  getAllUserController,
  updateUserController,
  deleteUserByIdController,
  getSingleUserByIdController,
  updateBlockStatusController,
} = require("../controllers/userController");
const router = express.Router();

router.get("/getAllUser", getAllUserController);
router.get("/getSingleUserById/:userId", getSingleUserByIdController);
router.put("/updateUser", updateUserController);
router.delete("/deleteUserById/:userId", deleteUserByIdController);
router.put("/updateBlockStatus", updateBlockStatusController);

module.exports = router;
