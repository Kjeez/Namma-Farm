const express = require("express");
const {
  addToWishlistController,
  getWishlistController,
} = require("../controllers/wishlistController");

const router = express.Router();

router.post("/add-to-wishlist/:userId", addToWishlistController);
router.get("/get-wishlist/:userId", getWishlistController);

module.exports = router;
