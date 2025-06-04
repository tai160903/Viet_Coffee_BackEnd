const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    userId: ObjectId,
    orderId: ObjectId,
    content: String,
    rating: { type: Number, min: 1, max: 5 },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
