const mongoose = require("mongoose");

const posStaffSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["staff", "admin"], default: "staff" },
    shift: String,
  },
  {
    timestamps: true,
  }
);

const PosStaff = mongoose.model("PosStaff", posStaffSchema);

module.exports = PosStaff;
