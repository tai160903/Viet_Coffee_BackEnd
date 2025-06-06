const express = require("express");
const AuthController = require("../controllers/auth.controller");
const Authenticate = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

Authenticate;
router.post("/logout", AuthController.logout);
router.get("/me", AuthController.getUserProfile);

module.exports = router;
