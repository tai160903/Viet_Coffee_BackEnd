const mongoose = require("mongoose");

const PosSessionSchema = new mongoose.Schema(
  {
    sessionCode: { type: String, required: true, unique: true }, // VD: POS-20250601-AM
    staffId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      required: true,
    },
    openedAt: { type: Date, required: true },
    closedAt: { type: Date },
    status: { type: String, enum: ["active", "closed"], default: "active" },
    openingNote: { type: String },
    closingNote: { type: String },
    totalSales: { type: Number, default: 0 },
    totalOrders: { type: Number, default: 0 },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  },
  {
    timestamps: true,
  }
);

const PosSession = mongoose.model("PosSession", PosSessionSchema);

module.exports = PosSession;
