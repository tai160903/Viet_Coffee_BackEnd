const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    orderId: ObjectId,
    method: String,
    amount: Number,
    status: { type: String, enum: ["pending", "paid", "failed"] },
    paidAt: Date,
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
