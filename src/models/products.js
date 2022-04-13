import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;
const productSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 5,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    status: {
      type: Number,
    },
    image: {
      type: String,
    },
    featured: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
