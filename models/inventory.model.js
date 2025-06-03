const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    _id: ObjectId,
    name: String,
    type: { type: String, enum: ["topping", "ingredient", "size"] },
    quantity: Number, // gram hoặc đơn vị
    unit: String,
    updatedAt: Date,
  },
  { timestamps: true }
);

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
