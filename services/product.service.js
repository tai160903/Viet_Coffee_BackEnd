const Drink = require("../models/drink.model");

const ProductService = {
  getAll: async () => {
    const products = await Drink.find({ isDeleted: false })
      .populate("category")
      .populate("customizationOptions.size")
      .populate("customizationOptions.sugar")
      .populate("customizationOptions.ice")
      .populate("customizationOptions.topping");

    return {
      message: "Get all products successfully",
      products,
    };
  },

  getById: async (productId) => {
    const product = await Drink.findById(productId, { isDeleted: false })
      .populate("category")
      .populate("customizationOptions.size")
      .populate("customizationOptions.sugar")
      .populate("customizationOptions.ice")
      .populate("customizationOptions.topping");

    if (!product) {
      throw new Error("Product not found");
    }

    return {
      message: "Get product by id successfully",
      product,
    };
  },

  create: async (productData) => {
    const product = await Drink.create(productData);
    return {
      message: "Create product successfully",
      product,
    };
  },

  update: async (productId, productData) => {
    const product = await Drink.findByIdAndUpdate(productId, productData, {
      new: true,
    });

    return {
      message: "Update product successfully",
      product,
    };
  },

  delete: async (productId) => {
    const product = await Drink.findByIdAndUpdate(
      productId,
      { isDeleted: true },
      { new: true }
    );
    if (!product) {
      throw new Error("Product not found");
    }
    return {
      message: "Soft deleted product successfully",
      product,
    };
  },
};

module.exports = ProductService;
