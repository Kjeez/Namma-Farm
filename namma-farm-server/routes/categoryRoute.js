const express = require("express");
const {
  createCategoryController,
  getSingleCategoryByIdController,
  updateCategoryController,
  deleteCategoryByIdController,
  getAllCategoriesController,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/create-category", createCategoryController);
router.get("/get-category/:categoryId", getSingleCategoryByIdController);
router.get("/get-all-categories", getAllCategoriesController);
router.put("/update-category/:categoryId", updateCategoryController);
router.delete("/delete-category/:categoryId", deleteCategoryByIdController);

module.exports = router;
