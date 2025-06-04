const { User } = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateToken.js");
const AuthService = {
  login: async (emailOrUsername, password) => {
    const query = emailOrUsername.includes("@")
      ? { email: emailOrUsername }
      : { username: emailOrUsername };
    const user = await User.findOne(query);
    if (!user) {
      return {
        message: "User not found",
      };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        message: "Invalid password",
      };
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
      accessToken,
      refreshToken,
      message: "Login successful",
    };
  },

  register: async (userData) => {
    const existingUser = await User.findOne({
      $or: [{ email: userData.email }, { username: userData.username }],
    });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new User({
      ...userData,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  },

  logout: async () => {
    return { message: "User logged out successfully" };
  },

  getUserProfile: async (userId) => {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },
};

module.exports = AuthService;
