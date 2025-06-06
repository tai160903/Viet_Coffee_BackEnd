const mongoose = require("mongoose");

const pickupSlotSchema = new mongoose.Schema(
  {
    timeRange: { start: Date, end: Date },
    maxOrders: Number,
    currentOrders: Number,
  },
  { timestamps: true }
);

const PickupSlot = mongoose.model("PickupSlot", pickupSlotSchema);

module.exports = PickupSlot;
