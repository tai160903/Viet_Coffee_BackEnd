const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    name: String,
    description: String,
    basePrice: Number,
    category: String,
    image: String,
    isAvailable: Boolean,
    customOptions: {
      size: [{ label: String, extraPrice: Number }],
      sugarLevel: [String],
      iceLevel: [String],
      toppings: [{ name: String, extraPrice: Number }],
    },
    createdAt: Date,
    updatedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
