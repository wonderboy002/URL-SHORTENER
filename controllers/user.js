import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "../models/User.Model.js";
import bcyrpt from "bcrypt";
async function registerUser(req,res){
      const {name,email,password}=req.body;
      if (!name || !email || !password || name==="" || password==="" || email===""){
        return res.status(400).json({"msg":"Enter valid Credentials"});
      }

      const flag=await User.findOne({name});
      if (flag){
        return res.status(400).json({"msg":"User already Exisits!!!"});
      }

      const hashedPassword=await bcyrpt.hash(password,10);
      const newUser=await User.create({name,email,"password":hashedPassword});
      return res.status(200).json({"msg":"User created Sucessfully!!",newUser});
}

async function loginUser(req,res){
      const {email,password}=req.body;
      if (!email || !password || email==="" || password===""){
        return res.status(400).send("Enter valid Credentials!!");
      } 
      //find whether already exists or not
      const flag1=await User.findOne({email});
      if (!flag1){
        return res.status(400).send("User does not exist!!");
      }

      const flag2=await bcyrpt.compare(password,flag1.password);
      if (!flag2){
        return res.status(400).send("Incorrect Password!!!");
      }

      //generate a token if all info is valid
      const token=jwt.sign({email,password},'perpetrator$201@');
      return res.json({token});
}

export {registerUser,loginUser};