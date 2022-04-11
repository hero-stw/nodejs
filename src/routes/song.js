import { Router } from "express";
import {
  getSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
  searchSong,
  getAllPerPage,
} from "../controller/song";

const router = Router();

router.get("/songs", getSongs);
router.post("/songs/search", searchSong);
router.get("/songs/:id", getSong);
router.post("/songs", createSong);
router.put("/songs/:id", updateSong);
router.delete("/songs/:id", deleteSong);
router.get("/songs/paginate/:page/:limit", getAllPerPage);

export default router;
