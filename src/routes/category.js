import { Router } from "express";
import {
  create,
  //   get,
  list,
  read,
  remove,
  update,
} from "../controller/category";

const router = new Router();

router.post("/category", create);
router.get("/category", list);
// router.get("/category/:id", get);
router.get("/category/:id", read);
router.put("/category/:id", update);
router.delete("/category/:id", remove);

export default router;
