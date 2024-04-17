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

module.exports = { createCategoryController };
