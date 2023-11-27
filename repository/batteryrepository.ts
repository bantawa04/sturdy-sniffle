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

export async function getBatteries(): Promise<Battery[]> {
    return prisma.battery.findMany();
}
