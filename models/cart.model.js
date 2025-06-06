const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },

    drinkId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Drink",
      required: true,
    },
    drinkName: { type: String },
    quantity: { type: Number, required: true, default: 1 },
    basePrice: { type: Number, required: true },
    selectedOptions: [
      {
        groupId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "OptionGroup",
          required: true,
        },
        groupName: String,
        selected: [
          {
            label: String,
            priceModifier: Number,
          },
        ],
      },
    ],
    note: { type: String },
    isSavedForLater: { type: Boolean, default: false },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CartItem", cartItemSchema);
