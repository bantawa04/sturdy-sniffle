import express from "express"
import { createBattery, getBatteries } from "../controller/BatteryController"
const { body } = require("express-validator")
const router = express.Router()

//create battery
router.post(
    "/battery",
    [
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
    ],
    createBattery
)

//get battery
router.get('/battery',getBatteries );

export default router
