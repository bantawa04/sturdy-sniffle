import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const seedDatas = [
    { name: "Red Battery", postcode: "12345", wattCapacity: 10000 },
    { name: "Blue Battery", postcode: "67890", wattCapacity: 15000 },
    { name: "Green Battery", postcode: "54321", wattCapacity: 12000 },
    { name: "Yellow Battery", postcode: "98765", wattCapacity: 8000 },
    { name: "Purple Battery", postcode: "13579", wattCapacity: 11000 },
    { name: "Orange Battery", postcode: "24680", wattCapacity: 13000 },
    { name: "Pink Battery", postcode: "11223", wattCapacity: 9000 },
    { name: "Brown Battery", postcode: "44556", wattCapacity: 16000 },
    { name: "Gray Battery", postcode: "77889", wattCapacity: 7500 },
    { name: "Black Battery", postcode: "99887", wattCapacity: 14000 }
]
async function main() {
    try {
        // await prisma.$transaction(async (tx) => {
        //   const books = [
        //     { name: 'The Great Gatsby', price: 20.99 },
        //     { name: 'To Kill a Mockingbird', price: 15.50 },
        //     { name: '1984', price: 30.25 },
        //     { name: 'The Catcher in the Rye', price: 18.75 },
        //     { name: 'The Hobbit', price: 25.00 },
        //   ];

        //   for (const book of books) {
        //     await tx.book.create({
        //       data: book,
        //     });
        //   }
        // });

        await prisma.$transaction(async (tx) => {
            for (const data of seedDatas) {
                await tx.battery.create({
                    data: data
                })
            }
        })

        console.log("Data seeding successful.")
    } catch (e) {
        console.error("Error seeding data:", e)
    } finally {
        await prisma.$disconnect()
    }
}

main()
