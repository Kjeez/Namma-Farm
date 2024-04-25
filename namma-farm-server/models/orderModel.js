const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Cash on Delivery",
        "Processing",
        "Dispatched",
        "Cancelled",
        "Delivered",
      ],
    },
    totalPrice: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
