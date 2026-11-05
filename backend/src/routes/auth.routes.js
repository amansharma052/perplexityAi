import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

import { loginValidator, registerValidator } from "../validators/auth.validator.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, register);
authRouter.post("/login",loginValidator,login)

export default authRouter