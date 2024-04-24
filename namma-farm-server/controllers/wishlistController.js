const wishlistModel = require("../models/wishlistModel");
const productModel = require("../models/productModel");

const addToWishlistController = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;
    if (!userId) {
      return res.status(400).send({
        success: false,
        message: "User Id is required!",
      });
    }
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(400).send({
        success: false,
        message: "No product found!",
      });
    }

    const wishlist = await wishlistModel.findOne({ userId });
    if (!wishlist) {
      const newWishlist = await wishlistModel({
        userId: userId,
        items: [{ productId }],
      }).save();
      return res.status(200).send({
        success: true,
        message: "Item added to wishlist successfully!",
        wishlist,
      });
    } else {
      const existingItemIndex = wishlist.items.findIndex((item) =>
        item.productId.equals(productId)
      );
      if (existingItemIndex === -1) {
        wishlist.items.push({ productId });
        await wishlist.save();
        return res.status(200).send({
          success: true,
          message: "Item added to wishlist successfully!",
          wishlist,
        });
      } else {
        return res.status(400).send({
          success: false,
          message: "Item already exists!",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

const getWishlistController = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).send({
        success: false,
        message: "User Id is required!",
      });
    }

    const wishlist = await wishlistModel.findOne({ userId });

    if (!wishlist) {
      return res.status(400).send({
        success: false,
        message: "Wishlist not found!",
      });
    }
    res.status(200).send({
      success: true,
      message: "Wishlist fetched successfully!",
      wishlist,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong!",
      success: false,
    });
  }
};

module.exports = { addToWishlistController,getWishlistController };
