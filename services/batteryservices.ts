import { createBattery, getBatteries } from "../repository/batteryrepository"
import { Battery } from "@prisma/client"

export async function createBatteryService(
  name: string,
  postcode: string,
  wattCapacity: number
): Promise<Battery> {
  return createBattery(name, postcode, wattCapacity)
}


export async function getBatteryService(): Promise<Battery[]| { message: string }> {
  return getBatteries()
}
