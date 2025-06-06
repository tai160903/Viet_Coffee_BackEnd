const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: function () {
        this.role === "customer";
      },
      unique: true,
    },
    name: { type: String, trim: true },
    phone: { type: String, unique: true, match: /^\d{10}$/, trim: true },
    email: {
      type: String,
      required: function () {
        this.role !== "customer";
      },
      unique: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["customer", "staff", "admin"],
      default: "customer",
    },
    loyaltyPoints: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
