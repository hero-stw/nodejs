import express from "express";
import cors from "cors";
import morgan from "morgan";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import productRoute from "./routes/product";
import categoryRoute from "./routes/category";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import songRoute from "./routes/song";
const app = express();

// readdirSync(__dirname + "/routes").forEach((file) => {
//   import("./routes/" + file)
//     .then(({ default: router }) => router.default)
//     .then((router) => {
//       app.use("/api", router);
//     });
// });

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", productRoute);
app.use("/api", categoryRoute);
app.use("/api", authRoute);
app.use("/api", songRoute);
// app.use("/api", userRoute);

// Connect Database
mongoose
  .connect("mongodb://127.0.0.1:27017/nodejs")
  .then(() => console.log("Connect Successfully"))
  .catch((err) => console.log(err));

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Listening....", PORT);
});
