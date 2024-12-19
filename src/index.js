import express from "express";
import connectDB from "../DB/Connection.js";
import {router as urlRouter} from "../routes/url.routes.js";

const PORT = 8000;
const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/url-shortener";

app.use(express.json());
app.use("/url",urlRouter);

app.listen(PORT, () => {
  console.log("Server functional at PORT: ", PORT);
  connectDB(MONGO_URL);
});

app.get("/", (req, res) => {
  res.send("Hello from Server!!!");
});
