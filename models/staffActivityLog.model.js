const mongoose = require("mongoose");

const staffActivityLogSchema = new mongoose.Schema(
  {
    _id: ObjectId,
    staffId: ObjectId,
    action: String,
    orderId: ObjectId,
    timestamp: Date,
  },
  { timestamps: true }
);

const StaffActivityLog = mongoose.model(
  "StaffActivityLog",
  staffActivityLogSchema
);

module.exports = StaffActivityLog;
