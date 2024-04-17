const express = require("express");
const {
  createCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/create-category", createCategoryController);

module.exports = router;
