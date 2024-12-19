import mongoose from "mongoose";
function connectDB(url){
    mongoose.connect(url)
    .then(()=>console.log("Successfully Connected to mongodb"))
    .catch((e)=>{
        console.log("Something went wrong while connecting to mongodb!!",e); 
    });
}
export default connectDB;