import express, { Request, Response } from "express"
import {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
} from "../controller/BooksController"

const router = express.Router()

router.post("/books", async (req: Request, res: Response) => {
    try {
        const { title, price } = req.body
        const parsedPrice = parseFloat(price)
        const book = await createBook(title, parsedPrice)
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({
            error: "Failed to create a book",
            message: error
        })
    }
})

// Get all books
router.get("/books", async (_: Request, res: Response) => {
    try {
        const books = await getAllBooks()
        res.json(books)
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve books" })
    }
})

// Get a book by ID
router.get("/books/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const book = await getBookById(id)
        if (book) {
            res.json(book)
        } else {
            res.status(404).json({ error: "Book not found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve the book" })
    }
})

// Update a book
router.put("/books/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { title, price } = req.body

        const parsedPrice = parseFloat(price)
        const updatedBook = await updateBook(id, title, parsedPrice)
        if (updatedBook !== null) {
            res.json(updatedBook)
        } else {
            res.status(404).json({ error: "Book not found" })
        }
    } catch (error) {
        console.error("Failed to update the book:", error)
        res.status(500).json({ error: "Failed to update the book" })
    }
})

// Delete a book
router.delete("/books/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deletedBook = await deleteBook(id)
        if (deletedBook !== null) {
            res.json(deletedBook)
        } else {
            // Book not found
            res.status(404).json({ error: "Book not found" })
        }
    } catch (error) {
        console.error("Failed to delete the book:", error)
        res.status(500).json({ error: "Failed to delete the book" })
    }
})

export default router
