import e from "express";
import Playlist from "../models/playlist";

export const getAllPlaylist = async (req, res) => {
  try {
    const playlists = await Playlist.find({}).exec();
    res.json(playlists);
  } catch (error) {
    res.status(400).json({
      error: "Can not get playlists",
    });
  }
};

export const getPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findOne({ _id: req.params.id }).exec();
    res.json(playlist);
  } catch (error) {
    res.status(400).json({
      error: "Can not get any playlist",
    });
  }
};

export const createPlaylist = async (req, res) => {
  try {
    const playlist = await new Playlist(req.body).save();
    res.json(playlist);
  } catch (error) {
    res.status(400).json({
      error: "Can not create playlist",
    });
  }
};

export const updatePlaylist = async (req, res) => {
  const condition = { id: req.params.id };
  const update = req.body;
  try {
    const playlist = await Playlist.findOneAndUpdate(
      condition,
      { $set: update },
      { new: true }
    ).exec();
    res.json(playlist);
  } catch (error) {
    res.status(400).json({
      error: "Can not update playlist",
    });
  }
};

export const deletePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(playlist);
  } catch (error) {
    res.status(400).json({
      error: "Can not delete playlist",
    });
  }
};
