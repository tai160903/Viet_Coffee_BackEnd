const express = require("express");
const AuthController = require("../controllers/auth.controller");
const Authenticate = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.post("/logout", Authenticate, AuthController.logout);
router.get("/me", Authenticate, AuthController.getUserProfile);

module.exports = router;
