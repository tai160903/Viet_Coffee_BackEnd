const mongoose = require("mongoose");

const orderHistorySchema = new mongoose.Schema(
  {
    userId: ObjectId,
    drinkId: ObjectId,
  },

  { timestamps: true }
);

const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);

module.exports = OrderHistory;
