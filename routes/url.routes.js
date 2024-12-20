import express from "express";
import { createShortID,redirectOrignal, getUrlAnalytics,getAllUrl } from "../controllers/url.js";

const router=express.Router();
router.post("/",createShortID);
router.get("/:short_id",redirectOrignal);
router.get("/analytics/:short_id",getUrlAnalytics);
router.get("/",getAllUrl)

export {router};