"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var BatteryController_1 = require("../controller/BatteryController");
var body = require("express-validator").body;
var router = express_1.default.Router();
//create battery
router.post("/battery", [
    body("name").notEmpty().withMessage("Name is required"),
    body("postcode")
        .notEmpty()
        .withMessage("Postcode is required")
        .isString()
        .withMessage("Postcode must be a string"),
    body("wattCapacity")
        .notEmpty()
        .withMessage("Watt capacity is required")
        .isInt()
        .withMessage("Watt capacity must be an integer")
], BatteryController_1.createBattery);
//get battery
router.get('/battery', BatteryController_1.getBatteries);
exports.default = router;
