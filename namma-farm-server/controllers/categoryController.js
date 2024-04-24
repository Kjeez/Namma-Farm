const categoryModel = require("../models/categoryModel");
const slugify = require("slugify");

const createCategoryController = async (req, res) => {
  try {
    const { categoryName, categoryDescription } = req.body;

    if (!categoryName) {
      return res.status(400).send({
        success: false,
        message: "Category Name is required!",
      });
    }

    if (!categoryDescription) {
      return res.status(400).send({
        success: false,
        message: "Category Description is required!",
      });
    }

    const existingCategory = await categoryModel.findOne({ categoryName });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category already exists!",
      });
    }

    const category = await new categoryModel({
      categoryName,
      categoryDescription,
      slug: slugify(categoryName),
    }).save();

    res.status(200).send({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const getSingleCategoryByIdController = async (req, res) => {
  try {
    const { categoryId } = req.params;

    if (!categoryId) {
      return res.status(400).send({
        message: "Category Id is required",
        success: false,
      });
    }

    const category = await categoryModel.findById({ _id: categoryId });

    if (!category) {
      return res.status(400).send({
        message: "Category not found",
        success: false,
      });
    }

    res.status(200).send({
      message: "Category fetched successfully",
      success: true,
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await categoryModel.find();

    res.status(200).send({
      message: "Categories fetched successfully",
      success: true,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const updateCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description, image } = req.body;

    if (!categoryId) {
      return res.status(400).send({
        message: "Category Id is required!",
        success: false,
      });
    }

    const category = await categoryModel.findById({ _id: categoryId });
    if (!category) {
      return res.status(400).send({
        message: "Category doesnot exist!",
        success: false,
      });
    }

    const updatedCategory = await categoryModel.findByIdAndUpdate(
      { _id: categoryId },
      {
        categoryName: name,
        categoryDescription: description,
        categoryImage: image,
        slug: slugify(name),
      },
      { new: true }
    );

    res.status(200).send({
      message: "Product updated successfully!",
      success: true,
      updatedCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const deleteCategoryByIdController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId) {
      return res.status(400).send({
        message: "Category Id is required",
        success: false,
      });
    }

    const deletedCategory = await categoryModel.findByIdAndDelete({
      _id: categoryId,
    });

    if (!deletedCategory) {
      return res.status(400).send({
        message: "Category not found",
        success: false,
      });
    }

    res.status(200).send({
      message: "Category deleted successfully",
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
  createCategoryController,
  getSingleCategoryByIdController,
  getAllCategoriesController,
  updateCategoryController,
  deleteCategoryByIdController,
};
