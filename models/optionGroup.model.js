const mongoose = require("mongoose");

const optionGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["single-select", "multi-select"],
    required: true,
  },
  required: { type: Boolean, default: false },
  maxSelectable: { type: Number, default: 1 },
  options: [
    {
      label: { type: String, required: true },
      priceModifier: { type: Number, default: 0 },
      isDefault: { type: Boolean, default: false },
    },
  ],
});
module.exports = mongoose.model("OptionGroup", optionGroupSchema);
