import expressJWT from "express-jwt";

export const checkAuth = (req, res, next) => {
  const isAnAdmin = true;
  if (isAnAdmin) {
    next();
  } else {
    res.send("You are not authorized");
  }
};

export const requiredSignin = expressJWT({
  algorithms: ["HS256"],
  secret: "process.env.JWT_SECRET",
  requestProperty: "auth",
});

export const isAuth = (req, res, next) => {
  const status = req.profile._id === req.auth._id;
  if (!status) {
    res.status(401).json({
      mes: "You are not authorized to perform this action",
    });
  }
  next();
};

export const isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    res.status(403).json({
      mes: "You are not authorized to perform this action",
    });
  }
  next();
};
