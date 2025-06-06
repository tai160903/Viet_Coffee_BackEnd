const posSession = require("../models/posSession.model");

const PosSessionService = {
  startSession: async (req, res) => {
    try {
      const newPosSession = await posSession.create(req.body);
      return res.status(201).json({
        message: "Start pos session successfully",
        data: newPosSession,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error starting pos session",
        error: error.message,
      });
    }
  },

  endSession: async (req, res) => {
    try {
      const updatedPosSession = await posSession.findByIdAndUpdate(
        req.params.id,
        { isActive: false },
        { new: true }
      );

      if (!updatedPosSession) {
        return res.status(404).json({
          message: "Session not found",
        });
      }

      return res.status(200).json({
        message: "End pos session successfully",
        data: updatedPosSession,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error ending pos session",
        error: error.message,
      });
    }
  },

  getSessionCurrent: async (req, res) => {
    try {
      const filter = {};
      if (req.query.isActive !== undefined) {
        filter.isActive = req.query.isActive === "true";
      }

      const currentPosSession = await posSession.findOne(filter);

      if (!currentPosSession) {
        return res.status(404).json({
          message: "No active session found",
        });
      }

      return res.status(200).json({
        message: "Get current pos session successfully",
        data: currentPosSession,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error getting current pos session",
        error: error.message,
      });
    }
  },
};
