const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    userId: ObjectId,
    items: [
      {
        drinkId: ObjectId,
        name: String,
        quantity: Number,
        size: String,
        sugar: String,
        ice: String,
        toppings: [String],
        note: String,
        price: Number,
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
    createdAt: Date,
    updatedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
