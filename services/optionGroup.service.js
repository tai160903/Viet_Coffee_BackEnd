const OptionGroup = require("../models/optionGroup.model");
const OptionGroupService = {
  create: async (name, type, maxSelectable, required, options) => {
    const optionGroup = await OptionGroup.create({
      name,
      type,
      maxSelectable,
      required,
      options,
    });

    return {
      message: "Create option group successfully",
      optionGroup,
    };
  },
};

module.exports = OptionGroupService;
