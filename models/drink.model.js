const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    basePrice: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    image: String,
    isAvailable: { type: Boolean, default: true },
    customizationOptions: {
      size: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customization" }],
      sugar: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customization" }],
      ice: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customization" }],
      topping: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customization" }],
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Drink", drinkSchema);
