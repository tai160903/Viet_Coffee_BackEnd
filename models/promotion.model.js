const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    code: String,
    description: String,
    discountType: { type: String, enum: ["percent", "fixed"] },
    value: Number,
    minOrder: Number,
    startDate: Date,
    endDate: Date,
    usageLimit: Number,
    usedCount: Number,
  },
  {
    timestamps: true,
  }
);

const Promotion = mongoose.model("Promotion", promotionSchema);

module.exports = Promotion;
