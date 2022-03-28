import { Router } from "express";
import { userById } from "../controller/auth";
import { create, get, list, remove, update } from "../controller/product";
import {
  checkAuth,
  isAdmin,
  isAuth,
  requiredSignin,
} from "../middlewares/checkAuth";

const router = Router();

router.get("/products", checkAuth, list);
router.post("/products/:userId", requiredSignin, isAuth, isAdmin, create);
router.get("/product/:id", checkAuth, get);
router.delete("/product/:id", checkAuth, remove);
router.put("/product/:id", checkAuth, update);

router.param("userId", userById);
export default router;
