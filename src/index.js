import express from "express";
const PORT=8000;
const app=express();

app.listen(PORT,()=>console.log("Server functional at PORT: ",PORT));
app.get("/",(req,res)=>{
    res.send("Hello from Server!!!")
})