const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    userId: ObjectId,
    orderId: ObjectId,
    content: String,
    rating: { type: Number, min: 1, max: 5 },
    createdAt: Date,
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
