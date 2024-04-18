const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    address: [
      {
        fullName: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
          required: true,
        },
        addressType: {
          type: String,
          required: true,
        },
        landmark: {
          type: String,
        },
        houseNoBuildingName: {
          type: String,
          required: true,
        },
        roadNameAreaColony: {
          type: String,
          required: true,
        },
        pincode: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
