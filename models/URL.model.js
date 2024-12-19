import mongoose from "mongoose";
const urlSchema=new mongoose.Schema({
     short_id : {
        type: String,
        required: true,
        unique: true
     },
     redirect_url: {
        type: String,
        required:true
     },
     visits: {
        type: [{timeStamps: Number}]
     }
},{timestamps:true})
export const URL=mongoose.model("url",urlSchema);