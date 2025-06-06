const express = require("express");
const OptionController = require("../controllers/optionGroup.controller");
const Authenticate = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", OptionController.create);

module.exports = router;
