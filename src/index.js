import express from "express";
import connectDB from "../DB/Connection.js";
import {router as urlRouter} from "../routes/url.routes.js";
import path from "path";

const PORT = 8000;
const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/url-shortener";

app.set("view engine","ejs");//set view engine as ejs for server side rendering
app.set("views",path.resolve("./views"));//set path for view files (relative to main directory i.e. URL-SHORTENER)
app.use(express.json());
app.use("/url",urlRouter);


app.listen(PORT, () => {
  console.log("Server functional at PORT: ", PORT);
  connectDB(MONGO_URL);
});

// app.get("/", (req, res) => {
//    return res.render("Home.ejs");
// });
