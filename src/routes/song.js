import { Router } from "express";
import {
  getSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
  searchSong,
  getAllPerPage,
  searchWithPagination,
} from "../controller/song";

const router = Router();

router.get("/songs", getSongs);
router.post("/songs/search/:page/:limit", searchSong);
router.get("/songs/:id", getSong);
router.post("/songs", createSong);
router.put("/songs/:id", updateSong);
router.delete("/songs/:id", deleteSong);
router.get("/songs/paginate/:page/:limit", getAllPerPage);
// router.post("/songs/searchme/:page/:limit", searchWithPagination);

export default router;
