const categoryModel = require("../models/categoryModel");
const productModel = require("../models/productModel");
const slugify = require("slugify");

const createProductController = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Product name is required!",
      });
    }
    if (!description) {
      return res.status(400).send({
        success: false,
        message: "Product description is required!",
      });
    }
    if (!price) {
      return res.status(400).send({
        success: false,
        message: "Product price is required!",
      });
    }
    if (!category) {
      return res.status(400).send({
        success: false,
        message: "Product category is required!",
      });
    }

    const existingProduct = await productModel.findOne({ name });
    if (existingProduct) {
      return res.status(200).send({
        success: false,
        message: "Product already exists!",
      });
    }

    const existingCategory = await categoryModel.findById(category);

    if (!existingCategory) {
      res.status(401).send({
        success: false,
        message: "Category doesnot exists",
      });
      return;
    }

    const product = await new productModel({
      name,
      description,
      price,
      category,
      slug: slugify(name),
    }).save();

    res.status(200).send({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = {createProductController}