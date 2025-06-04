const AuthService = require("../services/auth.service");

const AuthController = {
  login: async (req, res) => {
    try {
      const { emailOrUsername, password } = req.body;
      const result = await AuthService.login(emailOrUsername, password);
      return res.status(200).json({ message: result.message });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  register: async (req, res) => {
    try {
      const userData = req.body;
      const newUser = await AuthService.register(userData);
      return res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      if (error.message === "User already exists") {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  },

  logout: async (req, res) => {
    try {
      await AuthService.logout();
      return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const userId = req.user._id;
      const user = await AuthService.getUserProfile(userId);
      return res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = AuthController;
