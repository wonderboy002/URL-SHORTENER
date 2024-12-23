import express from "express";
import connectDB from "../DB/Connection.js";
import {router as urlRouter} from "../routes/url.routes.js";
import path from "path";
import {router as userRouter} from "../routes/user.routes.js";
import cors from "cors";
const PORT = 8000;
const app = express();
app.use(cors());

const MONGO_URL = "mongodb://127.0.0.1:27017/url-shortener";

app.set("view engine","ejs");//set view engine as ejs for server side rendering
app.set("views",path.resolve("./views"));//set path for view files (relative to main directory i.e. URL-SHORTENER)
app.use(express.json());
app.use("/url",urlRouter);
app.use("/users",userRouter);


app.listen(PORT, () => {
  console.log("Server functional at PORT: ", PORT);
  connectDB(MONGO_URL);
});

app.get("/test",(req,res)=>{
  res.send("Hello World!!");
})