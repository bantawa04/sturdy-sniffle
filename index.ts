import express, { Request, Response, Application, NextFunction } from "express"
import http from "http"
import { connectToDatabase } from "./database"
import dotenv from 'dotenv';
dotenv.config()
import cors from "cors"

// import bookRoute from "./routes/book"
import batteryRoute from "./routes/battery"

const app: Application = express()
const server: http.Server = http.createServer(app)
const port = process.env.APP_PORT || 8000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connectToDatabase()
    .then(() => {
        console.log("🚀 Connected to MongoDB")
    })
    .catch((error) => {
        console.error("❌ Error connecting to MongoDB:", error)
    });

app.get("/healthcheck", (_: Request, res: Response) => {
    res.json({ message: "OK", status: 200 })
})

// app.use("/api", bookRoute)
app.use("/api", batteryRoute)

app.use((error: any, req: Request, res: Response) => {
    const status = error.statusCode || 500
    const message = error.message || "Internal Server Error"

    if (req.accepts("json")) {
        res.status(status).json({ message })
    } else {
        res.status(status).send(`<pre>${message}</pre>`)
    }
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export { app, server }
