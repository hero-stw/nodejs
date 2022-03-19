import Category from "../models/category";
import Products from "../models/products";

export const create = async (req, res) => {
  try {
    const category = await Category(req.body).save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      error: "Add category failed",
    });
  }
};
export const list = async (req, res) => {
  try {
    const categories = await Category.find().exec();
    res.status(201).json(categories);
  } catch (error) {
    res.status(400).json({
      error: "Get categories failed",
    });
  }
};
// export const get = async (req, res) => {
//   try {
//     const categories = await Category.findOne({ _id: req.params.id }).exec();
//     res.status(201).json(categories);
//   } catch (error) {
//     res.status(400).json({
//       error: "Get category failed",
//     });
//   }
// };
export const remove = async (req, res) => {
  try {
    const category = await Category.findOneAndRemove({
      _id: req.params.id,
    }).exec();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      error: "Delete category failed",
    });
  }
};
export const update = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      error: "Update category failed",
    });
  }
};
export const read = async (req, res) => {
  try {
    const category = await Category.findOne({ _id: req.params.id }).exec();
    const products = await Products.find({ category: category._id }).exec();
    res.status(201).json({ category, products });
  } catch (error) {
    res.status(400).json({
      error: "Read category failed",
    });
  }
};
