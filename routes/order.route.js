const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order.controller");
const Authenticate = require("../middleware/authMiddleware");
const RoleMiddleware = require("../middleware/roleMiddleware");

Authenticate;
router.post("/", OrderController.createOrder);
router.get("/:id", OrderController.getOrderById);
router.patch("/:id/cancel", OrderController.cancelOrder);

RoleMiddleware(["admin", "staff"]);
router.get("/", OrderController.getAllOrders);
router.patch("/:id/status", OrderController.updateOrderStatus);

module.exports = router;
