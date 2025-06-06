const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        drinkId: { type: mongoose.Schema.Types.ObjectId, ref: "Drink" },
        name: String,
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        size: String,
        sugar: String,
        ice: String,
        toppings: [String],
        note: String,
        price: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    totalPrice: Number,
    pickupTime: Date,
    status: {
      type: String,
      enum: ["pending", "in_progress", "ready", "completed", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "vnpay", "momo", "zalopay"],
      default: "cash",
    },
    isPOSOrder: Boolean,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
