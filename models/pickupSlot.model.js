const mongoose = require("mongoose");

const pickupSlotSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    timeRange: { start: Date, end: Date }, // 30min block
    maxOrders: Number,
    currentOrders: Number,
  },
  { timestamps: true }
);

const PickupSlot = mongoose.model("PickupSlot", pickupSlotSchema);

module.exports = PickupSlot;
