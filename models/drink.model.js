const mongoose = require("mongoose");
require("./category.model");
require("./customizationTemplate.model");

const drinkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    basePrice: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    image: String,
    isAvailable: { type: Boolean, default: true },
    customizationTemplateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomizationTemplate",
      required: false,
    },

    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Drink", drinkSchema);
