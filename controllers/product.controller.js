const ProductService = require("../services/product.service");

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await ProductService.getAll();
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  getProductById: async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await ProductService.getById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json({ product });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  createProduct: async (req, res) => {
    try {
      const productData = req.body;
      const newProduct = await ProductService.create(productData);
      return res
        .status(201)
        .json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const updatedProductData = req.body;
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      await ProductService.delete(productId);
      return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = ProductController;
