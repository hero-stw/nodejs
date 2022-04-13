import { Router } from "express";
import { userById } from "../controller/auth";
import {
  create,
  get,
  list,
  remove,
  update,
  updateStatus,
} from "../controller/product";
import {
  checkAuth,
  isAdmin,
  isAuth,
  requiredSignin,
} from "../middlewares/checkAuth";

const router = Router();

router.get("/products", checkAuth, list);
// router.post("/products/:userId", requiredSignin, isAuth, isAdmin, create);
router.post("/products", create);
router.get("/products/:id", checkAuth, get);
router.delete("/products/:id", checkAuth, remove);
router.put("/products/:id", checkAuth, update);
router.put("products/:id", updateStatus);

router.param("userId", userById);
export default router;
