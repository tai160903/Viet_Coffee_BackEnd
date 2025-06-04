const mongoose = require("mongoose");

const customizationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  extraPrice: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Customization", customizationSchema);
