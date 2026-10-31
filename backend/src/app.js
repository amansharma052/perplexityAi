import express from "express"
import authRouter from "./routes/auth.routes.js"
const app = express()
app.use(express.json() )
import dotenv from "dotenv"
dotenv.config()

app.use("/api/auth",authRouter)


export default app