const OptionGroupService = require("../services/optionGroup.service");
const OptionController = {
  create: async (req, res) => {
    try {
      const { name, type, maxSelectable, required, options } = req.body;
      const optionGroup = await OptionGroupService.create(
        name,
        type,
        maxSelectable,
        required,
        options
      );
      return res.status(201).json({
        message: "Create option group successfully",
        optionGroup,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
};

module.exports = OptionController;
