const Customization = require("../models/customization.model");

const CustomizationService = {
  getAll: async (filter = {}) => {
    const customizations = await Customization.find(filter);
    return customizations;
  },

  getById: async (id) => {
    const customization = await Customization.findById(id);
    if (!customization) {
      throw new Error("Customization not found");
    }
    return customization;
  },

  create: async (data) => {
    const customization = new Customization(data);
    await customization.save();
    return customization;
  },

  update: async (id, data) => {
    const customization = await Customization.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!customization) {
      throw new Error("Customization not found");
    }
    return customization;
  },

  delete: async (id) => {
    const customization = await Customization.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    if (!customization) {
      throw new Error("Customization not found");
    }
    return customization;
  },
};

module.exports = CustomizationService;
