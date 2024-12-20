import mongoose from "mongoose";
import { URL } from "../models/URL.model.js";
import { nanoid } from "nanoid";

//create short id for a url
async function createShortID(req, res) {
  const { url } = req.body;
  if (!url || url === "") {
    return res.status(400).send("Enter valid URL");
  }
  //create a shortID for shortened url
  const short_id = nanoid(7);
  const short_url = await URL.create({
    short_id,
    redirect_url: url,
    visits: [],
  });
  return res
    .status(200)
    .json({ msg: "URL Shortened Successfully!!", id: short_id });
}

//use short id to go to orignal
async function redirectOrignal(req, res) {
  const short_id = req.params.short_id;
  const entry = await URL.findOneAndUpdate(
    { short_id },
    {
        //$push is used to add a new value to a array in mongodb
      $push: {
        visits: {
          timeStamps: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirect_url);
}

async function getUrlAnalytics(req,res){
    const short_id = req.params.short_id;
    const entry=await URL.findOne({short_id});
    
    if (!entry){
        return res.status(400).json({"msg":"Invalid URL!!!"});
    }
    return res.json({"clicks":entry.visits.length,"analytics":entry.visits})
}

async function getAllUrl(req,res){
     const allUrls=await URL.find({});
     const html=`<ol>${allUrls.map((url)=>{
      return `<li>${url.short_id} - ${url.redirect_url} - ${url.visits.length}</li>`
     }).join("")}</ol>`;
     res.render("Home.ejs",{
      urls: allUrls
     });
}
export { createShortID, redirectOrignal, getUrlAnalytics,getAllUrl};
