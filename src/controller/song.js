import Songs from "../models/songs";

export const getSongs = async (req, res) => {
  try {
    const songs = await Songs.find().exec();
    res.status(200).json(songs);
  } catch (error) {
    res.status(400).json((err) => {
      mes: "Cannot get any songs";
    });
  }
};

export const getSong = async (req, res) => {
  try {
    const song = await Songs.findOne({ id: req.params.id }).exec();
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json((err) => {
      mes: "Cannot get any song";
    });
  }
};
export const createSong = async (req, res) => {
  try {
    const song = await new Songs(req.body).save();
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json((err) => {
      mes: "Cannot create song";
    });
  }
};

export const updateSong = async (req, res) => {
  try {
    const song = await Songs.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json((err) => {
      mes: "Cannot update song";
    });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const song = await Songs.findOneAndDelete(req.params.id);
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json((err) => {
      mes: "Cannot delete song";
    });
  }
};

export const searchSong = async (req, res) => {
  
}