const OrderService = require("../services/order.service");

const OrderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await OrderService.getAll();
      res.json({ orders });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await OrderService.getById(req.params.id);
      if (!order) return res.status(404).json({ message: "Order not found" });
      res.json({ order });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createOrder: async (req, res) => {
    try {
      const orderData = {
        userId: req.user._id,
        ...req.body,
      };
      const newOrder = await OrderService.create(orderData);
      res
        .status(201)
        .json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateOrderStatus: async (req, res) => {
    try {
      const updatedOrder = await OrderService.updateStatus(
        req.params.id,
        req.body.status
      );
      if (!updatedOrder)
        return res.status(404).json({ message: "Order not found" });
      res.json({ message: "Order status updated", order: updatedOrder });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  cancelOrder: async (req, res) => {
    try {
      const cancelledOrder = await OrderService.cancel(req.params.id);
      if (!cancelledOrder)
        return res.status(404).json({ message: "Order not found" });
      res.json({ message: "Order cancelled", order: cancelledOrder });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = OrderController;
