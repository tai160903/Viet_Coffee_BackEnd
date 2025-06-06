const mongoose = require("mongoose");
require("./optionGroup.model");

const customizationTemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  optionGroups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OptionGroup",
    },
  ],
});
const CustomizationTemplate = mongoose.model(
  "CustomizationTemplate",
  customizationTemplateSchema
);
module.exports = CustomizationTemplate;
