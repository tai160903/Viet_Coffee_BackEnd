const express = require("express");
const CustomizationController = require("../controllers/customization.controller");
const roleMiddleware = require("../middleware/role.middleware");

const router = express.Router();

router.get("/", CustomizationController.getAllCustomizations);
router.get("/:id", CustomizationController.getCustomizationById);

roleMiddleware(["admin"]);
router.post("/", CustomizationController.createCustomization);
router.put("/:id", CustomizationController.updateCustomization);
router.delete("/:id", CustomizationController.deleteCustomization);
