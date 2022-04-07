import { Router } from "express";
import {
  createPlaylist,
  deletePlaylist,
  getAllPlaylist,
  getPlaylist,
  updatePlaylist,
} from "../controller/playlists";

const router = Router();
router.get("/playlists", getAllPlaylist);
router.get("/playlists/:id", getPlaylist);

router.post("/playlists", createPlaylist);

router.put("/playlists/:id", updatePlaylist);

router.delete("/playlists/:id", deletePlaylist);
export default router;
