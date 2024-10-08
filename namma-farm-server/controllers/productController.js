const { S3Client } = require("@aws-sdk/client-s3");
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { default: mongoose } = require("mongoose");
const categoryModel = require("../models/categoryModel");
const productModel = require("../models/productModel");
const slugify = require("slugify");
const userModel = require("../models/userModel");
const multer = require("multer");

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
  region: process.env.BUCKET_REGION,
});

const createProductController = async (req, res) => {
  try {
    // Access JSON data from form-data
    const productData = JSON.parse(req.body.productData);

    const { name, description, price, category, quantity } = productData;

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
    if (!quantity) {
      return res.status(400).send({
        success: false,
        message: "Product quantity is required!",
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

    const images = req.files;

    let savedImages = [];

    const uploadedImages = await Promise.all(
      images.map(async (image) => {
        const params = {
          Bucket: process.env.BUCKET_NAME,
          Key: image.originalname,
          Body: image.buffer,
          ContentType: image.mimetype,
        };

        const command = new PutObjectCommand(params);
        await s3.send(command);
        const img = {
          imageUrl: `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${image.originalname}`,
        };
        savedImages.push(img);
      })
    );

    const product = await new productModel({
      name,
      description,
      price,
      category,
      quantity,
      images: savedImages,
      slug: slugify(name),
    }).save();

    res.status(200).send({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const getSingleProductByIdController = async (req, res) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(400).send({
        message: "Product Id is required",
        success: false,
      });
    }

    const product = await productModel.findById({ _id: productId });

    if (!product) {
      return res.status(400).send({
        message: "Product not found",
        success: false,
      });
    }

    res.status(200).send({
      message: "Product fetched successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price, category, quantity } = req.body;

    if (!productId) {
      return res.status(400).send({
        message: "Product Id is required!",
        success: false,
      });
    }

    const product = await productModel.findById({ _id: productId });
    if (!product) {
      return res.status(400).send({
        message: "Product doesnot exist!",
        success: false,
      });
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      { _id: productId },
      {
        name: name,
        description: description,
        price: price,
        category: category,
        quantity: quantity,
        slug: slugify(name),
      },
      { new: true }
    );

    res.status(200).send({
      message: "Product updated successfully!",
      success: true,
      updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const deleteProductByIdController = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res.status(400).send({
        message: "Product Id is required",
        success: false,
      });
    }

    const deletedProduct = await productModel.findByIdAndDelete({
      _id: productId,
    });

    if (!deletedProduct) {
      return res.status(400).send({
        message: "Product not found",
        success: false,
      });
    }

    res.status(200).send({
      message: "Product deleted successfully",
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

const filterAndSortProductsController = async (req, res) => {
  try {
    let query = {};
    if (req.query.category) {
      query.category = new mongoose.Types.ObjectId(req.query.category);
    }
    let sortOptions = {};
    if (req.query.sort === "asc") {
      sortOptions.price = 1;
    } else if (req.query.sort === "desc") {
      sortOptions.price = -1;
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const pipeline = [
      {
        $match: query,
      },
      {
        $sort: sortOptions,
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ];
    const products = await productModel.aggregate(pipeline);

    res.status(200).send({
      success: true,
      message: "Products filtered and sorted!",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const addRatingController = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId, star } = req.body;

    if (!userId) {
      return res.status(400).send({
        message: "User Id is required!",
        success: false,
      });
    }
    if (!productId) {
      return res.status(400).send({
        message: "Product Id is required!",
        success: false,
      });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).send({
        message: "User not found!",
        success: false,
      });
    }

    const product = await productModel.findOneAndUpdate(
      {
        _id: productId,
        "ratings.postedby": userId,
      },
      { $set: { "ratings.$.star": star } }, // Update the existing rating
      { new: true }
    );

    if (!product) {
      const updatedProduct = await productModel.findByIdAndUpdate(
        { _id: productId },
        { $push: { ratings: { star, postedby: userId } } },
        { new: true }
      );
      return res.status(200).send({
        message: "Rating added successfully",
        success: true,
        updatedProduct,
      });
    }
    res.status(200).send({
      message: "Rating added successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const getTotalRatingController = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(400).send({
        success: false,
        message: "Product not found!",
      });
    }
    const totalRatings = product.ratings.length;
    let totalStars = 0;
    product.ratings.forEach((rating) => {
      totalStars += rating.star;
    });

    const rating = totalStars / totalRatings;
    res.status(200).send({
      message: "Rating fetched successfully",
      success: true,
      rating,
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
  createProductController,
  getSingleProductByIdController,
  updateProductController,
  deleteProductByIdController,
  filterAndSortProductsController,
  addRatingController,
  getTotalRatingController,
};
