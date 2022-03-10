import express from "express";
import cors from "cors";
import productRoute from "./routes/product";
import morgan from "morgan";
const app = express();

const PORT = 3001;

app.use("/api", productRoute);
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening....", PORT);
});
