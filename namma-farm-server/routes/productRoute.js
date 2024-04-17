const express = require("express");
const { createProductController } = require("../controllers/productController");

const router = express.Router();

router.post("/create-product", createProductController);

module.exports = router;
