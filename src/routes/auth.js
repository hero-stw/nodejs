import { Router } from "express";
import { login, register } from "../controller/auth";
const router = Router();

router.post("/signup", register);
router.post("/signin", login);

export default router;
