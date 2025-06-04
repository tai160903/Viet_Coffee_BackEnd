const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    userId: ObjectId,
    deviceToken: String,
    platform: { type: String, enum: ["android", "ios", "web"] },
    subscribedAt: Date,
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
