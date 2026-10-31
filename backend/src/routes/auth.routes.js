import { Router } from "express";

import { registerValidator } from "../validators/auth.validator.js";

const authRouter = Router();

authRouter.post("/register", registerValidator, register);

export default authRoute