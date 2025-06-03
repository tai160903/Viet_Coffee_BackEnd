const mongoose = require("mongoose");

const posStaffSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["staff", "admin"], default: "staff" },
    shift: String,
    createdAt: Date,
    updatedAt: Date,
  },
  {
    timestamps: true,
  }
);

const PosStaff = mongoose.model("PosStaff", posStaffSchema);

module.exports = PosStaff;
