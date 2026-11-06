import express from "express"

import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"
import morgan from "morgan";
import cors from "cors";
import chatRouter from "./routes/chat.routes.js";


const app = express()
app.use(express.json() )
import dotenv from "dotenv"
dotenv.config()
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: [ "GET", "POST", "PUT", "DELETE" ],
}))

app.use("/api/auth",authRouter)
app.use("/api/chats",chatRouter)


export default app