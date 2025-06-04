const CustomizationService = require("../services/customization.service");

const CustomizationController = {
  getAllCustomization: async (req, res) => {
    try {
      const filter = {};
      if (req.query.type) filter.type = req.query.type;
      if (req.query.isActive) filter.isActive = req.query.isActive === "true";

      const customizations = await CustomizationService.getAll(filter);
      res.json({
        message: "Get customizations successfully",
        data: customizations,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCustomizationById: async (req, res) => {
    try {
      const customization = await CustomizationService.getById(req.params.id);
      res.json({
        message: "Get customization successfully",
        data: customization,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createCustomization: async (req, res) => {
    try {
      const newCustomization = await CustomizationService.create(req.body);
      res.status(201).json({
        message: "Create customization successfully",
        data: newCustomization,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateCustomization: async (req, res) => {
    try {
      const updatedCustomization = await CustomizationService.update(
        req.params.id,
        req.body
      );
      res.json({
        message: "Update customization successfully",
        data: updatedCustomization,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deleteCustomization: async (req, res) => {
    try {
      const deletedCustomization = await CustomizationService.delete(
        req.params.id
      );
      res.json({
        message: "Delete customization successfully",
        data: deletedCustomization,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = CustomizationController;
