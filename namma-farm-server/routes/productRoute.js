const express = require("express");
const multer = require("multer");
const {
  createProductController,
  getSingleProductByIdController,
  updateProductController,
  deleteProductByIdController,
  filterAndSortProductsController,
  addRatingController,
  getTotalRatingController,
} = require("../controllers/productController");
const {
  requireAdmin,
  requireSignIn,
} = require("../middlewares/authMiddleware");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/create-product",
  requireSignIn,
  requireAdmin,
  upload.array("images", 12),
  createProductController
);
router.get(
  "/getSingleProductById/:productId",
  requireSignIn,
  requireAdmin,
  getSingleProductByIdController
);
router.put(
  "/updateProduct/:productId",
  requireSignIn,
  requireAdmin,
  updateProductController
);
router.delete(
  "/deleteProduct/:productId",
  requireSignIn,
  requireAdmin,
  deleteProductByIdController
);

router.get("/filterAndSortProducts", filterAndSortProductsController);

router.post("/addRating/:userId", addRatingController);
router.get("/getTotalRating/:productId", getTotalRatingController);

module.exports = router;
