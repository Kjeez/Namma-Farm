const express = require("express");
const {
  createProductController,
  getSingleProductByIdController,
  updateProductController,
  deleteProductByIdController,
  filterAndSortProductsController,
} = require("../controllers/productController");
const {
  requireAdmin,
  requireSignIn,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  requireAdmin,
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


module.exports = router;
