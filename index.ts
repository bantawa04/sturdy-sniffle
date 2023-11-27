import express, { Request, Response, Application } from "express"
import http from "http"
import { connectToDatabase } from "./database"
import dotenv from 'dotenv';
import morgan from "morgan"
dotenv.config()
import cors from "cors"

import batteryRoute from "./routes/battery"
import * as fs from "fs";
import path from "path";

const app: Application = express()
const server: http.Server = http.createServer(app)
const port = process.env.APP_PORT || 8000

const logFolderPath = path.join(__dirname, 'logs');

if (!fs.existsSync(logFolderPath)) {
    fs.mkdirSync(logFolderPath);
}

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "logs/access.log"),
    {
        flags: "a",
    }
);

app.use(cors());
app.use(
    morgan('combined', {
        skip: function (req, res) {
            return res.statusCode < 400;
        },
        stream: accessLogStream,
    })
);

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

app.use((error: any, req: Request, res: Response, next: Function) => {
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
