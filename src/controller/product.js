import Product from "../models/products";

export const create = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Không thêm được sản phẩm",
    });
  }
};
export const list = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      error: "Không có sản phẩm",
    });
  }
};

export const get = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Không có sản phẩm",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Xóa sản phẩm không thành công",
    });
  }
};
export const update = async (req, res) => {
  const condition = { _id: req.params.id };
  const update = req.body;
  try {
    const product = await Product.findOneAndUpdate(
      condition,
      { $set: update },
      { new: true }
    ).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Sửa sản phẩm không thành công",
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { status: req.body.status },
      { new: true }
    ).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error: "Update trạng thái không thành công",
    });
  }
};
