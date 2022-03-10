import { Router } from "express";
import { list, post } from "../controller/product";
import {
  getUser,
  listUser,
  postUser,
  updateUser,
  deleteUser,
} from "../controller/user";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.get("/products", checkAuth, list);
router.post("/products", checkAuth, post);
router.get("/users", listUser);
router.post("/users", postUser);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;
