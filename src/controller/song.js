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
    const song = await Songs.findOne({ _id: req.params.id }).exec();
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
    const song = await Songs.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    ).exec();
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json((err) => {
      mes: "Cannot update song";
    });
  }
};

export const deleteSong = async (req, res) => {
  const condition = { _id: req.params.id };
  try {
    const song = await Songs.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json((err) => {
      mes: "Cannot delete song";
    });
  }
};

export const searchSong = async (req, res) => {
  try {
    let perPage = req.params.limit || 5;
    let page = req.params.page || 1;
    const filters = req.query.q;
    const songs = await Songs.find().exec();
    const filteredSongs = songs.filter((song) => {
      return song.name.toLowerCase().includes(filters.toLowerCase());
    });
    const filteredSongsWithPagination = filteredSongs.slice(
      perPage * page - perPage,
      perPage * page
    );
    res.status(200).json(filteredSongsWithPagination);
  } catch (error) {
    res.status(400).json((err) => {
      mes: "Cannot search song";
    });
  }
};

export const getAllPerPage = (req, res, next) => {
  let perPage = req.params.limit || 5;
  let page = req.params.page || 1;
  Songs.find()
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec((err, songs) => {
      Songs.countDocuments((err, count) => {
        if (err) return next(err);
        res.status(200).json(songs);
      });
    });
};
