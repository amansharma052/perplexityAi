import { Router } from "express";
import { login,verifyEmail, register, getMe } from "../controllers/auth.controller.js";

import { loginValidator, registerValidator } from "../validators/auth.validator.js";

const authRouter = Router();


authRouter.post("/register", registerValidator, register);
authRouter.post("/login",loginValidator,login)
authRouter.get("/get-me",getMe)

authRouter.get('/verify-email', verifyEmail)

export default authRouter