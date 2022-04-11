import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: Object,
    properties: {
      url: String,
    },
  },
  description: {
    type: String,
  },
  owner: {
    type: Object,
    properties: {
      display_name: {
        type: String,
      },
      avatar: {
        type: String,
      },
    },
  },
  followers: {
    type: Number,
  },
  tracks: {
    type: Object,
    properties: {
      total: {
        type: Number,
      },
      item: {
        type: Array,
      },
    },
  },
});
export default mongoose.model("Playlist", playlistSchema);
