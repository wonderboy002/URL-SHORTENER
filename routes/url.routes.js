import express from "express";
import { createShortID,redirectOrignal, getUrlAnalytics } from "../controllers/url.js";

const router=express.Router();
router.post("/",createShortID);
router.get("/:short_id",redirectOrignal);
router.get("/analytics/:short_id",getUrlAnalytics);

export {router};