import { Router } from "express";
import {
  getSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} from "../controller/song";

const router = Router();

router.get("/songs", getSongs);
router.get("/song/:id", getSong);
router.post("/songs", createSong);
router.put("/songs/:id", updateSong);
router.delete("/songs/:id", deleteSong);
export default router;
