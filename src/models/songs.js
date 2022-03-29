import mongoose, { Schema } from "mongoose";

const songSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    singer: {
      type: String,
      required: true,
    },
    playlist: {
      type: String,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Song", songSchema);
