const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [
      {
        imageUrl: {
          type: String,
        },
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    soldItems: {
      type: Number,
      default: 0,
      select: false,
    },
    quantity: {
      type: Number,
      required: true,
      select: false,
    },
    ratings: [
      {
        star: {
          type: Number,
        },
        postedby: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
