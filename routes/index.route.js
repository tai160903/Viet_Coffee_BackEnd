var express = require("express");
var router = express.Router();

router.use("/auth", require("./auth.route"));
router.use("/products", require("./product.route"));

router.use("/option_group", require("./optionGroup.route"));

module.exports = router;
