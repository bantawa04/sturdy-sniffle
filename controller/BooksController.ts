import { prisma } from "../database"
import { Book } from "@prisma/client"

// Create a book
async function createBook(name: string, price: number): Promise<Book> {
    const book = await prisma.book.create({
        data: {
            name,
            price
        }
    })
    return book
}

// Get all books
async function getAllBooks(): Promise<Book[]> {
    const books = await prisma.book.findMany()
    return books
}

// Get a book by ID
async function getBookById(id: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({
        where: { id }
    })

    return book
}

// Update a book
async function updateBook(
    id: string,
    name: string,
    price: number
): Promise<Book | null> {
    const book = await prisma.book.findUnique({ where: { id } })

    if (!book) {
        return null // Book not found
    }

    try {
        const updatedBook = await prisma.book.update({
            where: { id },
            data: {
                name,
                price
            }
        })

        return updatedBook
    } catch (error) {
        console.error("Failed to update the book:", error)
        return null
    }
}

// Delete a book
async function deleteBook(id: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({ where: { id } })

    if (!book) {
        return null // Book not found
    }

    try {
        const deletedBook = await prisma.book.delete({ where: { id } })
        return deletedBook
    } catch (error) {
        console.error("Failed to delete the book:", error)
        return null
    }
}

export { createBook, getAllBooks, getBookById, updateBook, deleteBook }
