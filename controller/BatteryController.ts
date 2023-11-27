import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"
import {
    createBatteryService,
    getBatteryService
} from "../services/batteryservices"
import { CustomError } from "../utils"

// Create a book
export async function createBattery(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { name, postcode, wattCapacity } = req.body

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            const validationError = new CustomError(errors.array()[0].msg, 422)
            throw validationError
        }

        const battery = await createBatteryService(name, postcode, wattCapacity)

        res.status(201).json(battery)
    } catch (error: any) {
        if (error?.statusCode) {
            next(error)
        } else {
            error = new CustomError("Internal Server Error", 500)
            next(error)
        }
    }
}

export async function getBatteries(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const batteries = await getBatteryService()

        const totalWattCapacity = batteries?.reduce((total, battery) => total + battery.wattCapacity, 0)
        const averageWattCapacity = batteries.length > 0 ? totalWattCapacity / batteries.length : 0
        res.status(200).json({
            batteries,
            totalWattCapacity,
            averageWattCapacity
        })
    } catch (error: any) {
        error = new CustomError("Internal Server Error", 500)
        next(error)
    }
}
