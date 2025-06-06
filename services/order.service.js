const Order = require("../models/order.model");

const OrderService = {
  getAll: async () => {
    const orders = await Order.find()
      .populate("user", "name")
      .populate("userId", "username email")
      .sort({ createdAt: -1 });
    return {
      message: "Get orders successfully",
      orders,
    };
  },

  getById: async (orderId) => {
    const order = await Order.findById(orderId).populate(
      "userId",
      "username email"
    );
    return {
      message: "Get order successfully",
      order,
    };
  },

  create: async (orderData) => {
    const order = new Order(orderData);
    await order.save();
    return order;
  },
  updateStatus: async (orderId, status) => {
    const response = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    return {
      message: "Update status successfully",
      response,
    };
  },

  cancel: async (orderId) => {
    const response = await Order.findByIdAndUpdate(
      orderId,
      { status: "cancelled" },
      { new: true }
    );
    return {
      message: "Cancel order successfully",
      response,
    };
  },
};

module.exports = OrderService;
