const express = require("express");
const {
  createOrderController,
  validOrderController,
  saveOrderController,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/create-order", createOrderController);
router.post("/validate-", validOrderController);
router.post("/save-order", saveOrderController);

module.exports = router;
