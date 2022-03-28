import User from "../models/users";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const existUser = await User.findOne({ email }).exec();
    if (existUser) {
      res.status(400).json({
        message: "Tài khoản đã tồn tại",
      });
    }
    const user = await new User({ email, name, password }).save();
    res.json({
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(400).json((error) => {
      message: "Register Failed!";
    });
  }
};
export const login = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    const token = jwt.sign({ id: user._id }, "process.env.JWT_SECRET", {
      expiresIn: "1h",
    });

    if (!user) {
      res.status(400).json({
        message: "Email not exist!",
      });
    }
    if (!user.authenticate(password)) {
      res.status(400).json({
        message: "Incorrect Password!",
      });
    }
    res.status(200).json({
      user: {
        token,
        _id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(400).json((error) => {
      message: "Sign in failed!";
    });
  }
};

export const userById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).exec();
    if (!user) {
      res.status(400).json({
        message: "Không tìm thấy user",
      });
    }
    req.profile = user;
    req.profile.password = undefined;
    next();
  } catch (error) {
    console.log(error);
  }
};
