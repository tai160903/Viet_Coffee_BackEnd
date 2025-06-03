const mongoose = require("mongoose");

const orderHistorySchema = new mongoose.Schema(
  {
    _id: ObjectId,
    userId: ObjectId,
    drinkId: ObjectId,
    createdAt: Date,
  },

  { timestamps: true }
);

const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);

module.exports = OrderHistory;
