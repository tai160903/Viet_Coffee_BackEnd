const express = require("express");
const ProductController = require("../controllers/product.controller");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

roleMiddleware(["admin"]);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
