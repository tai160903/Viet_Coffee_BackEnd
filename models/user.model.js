const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: () => {
        this.role === "customer";
      },
      unique: true,
    },
    name: { type: String, trim: true },
    phone: { type: String, unique: true, match: /^\d{10}$/, trim: true },
    email: {
      type: String,
      required: () => this.role !== "customer",
      unique: true,
    },
    password: String,
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
