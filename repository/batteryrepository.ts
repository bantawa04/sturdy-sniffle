import { prisma } from "../database"
import { Battery } from "@prisma/client"

// Create a book
export async function createBattery(
    name: string,
    postcode: string,
    wattCapacity: number
): Promise<Battery> {
    const [battery] = await prisma.$transaction([
        prisma.battery.create({
            data: {
                name,
                postcode,
                wattCapacity
            }
        })
    ])
    return battery
}

export async function getBatteries(): Promise<Battery[] | { message: string }> {
    const batteries = await prisma.battery.findMany()
    if (batteries.length === 0) {
        return { message: "No batteries found" }
    }
    return batteries
}
