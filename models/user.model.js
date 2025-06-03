const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    name: String,
    phone: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["customer", "staff", "admin"],
      default: "customer",
    },
    loyaltyPoints: { type: Number, default: 0 },
    createdAt: Date,
    updatedAt: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
