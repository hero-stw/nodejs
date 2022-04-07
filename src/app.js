import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import productRoute from "./routes/product";
import categoryRoute from "./routes/category";
import authRoute from "./routes/auth";
// import userRoute from "./routes/user";
import songRoute from "./routes/song";
import playlistRoute from "./routes/playlists";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
const app = express();
const swaggerJSDocs = YAML.load("./api.yaml");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// app.use("/api", categoryRoute);
app.use("/api", authRoute);
app.use("/api", songRoute);
app.use("/api", playlistRoute);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));
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
