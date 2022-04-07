import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
    },
  ],
  description: {
    type: String,
  },
  owner: {
    display_name: {
      type: String,
    },
  },
  followers: {
    total: {
      type: Number,
    },
  },
  tracks: {
    total: {
      type: Number,
    },
    items: [],
  },
});
export default mongoose.model("Playlist", playlistSchema);
