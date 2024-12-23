import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
export default function SignIn() {
  const [user,setUser]=useState({"name":"","email":"","password":""});
  async function registerUser(e){
    e.preventDefault();
    const response=await axios.get("http://localhost:8000/test");
    console.log(response); 
  }
  return (
    <div className='mt-10 flex flex-col gap-4 items-center p-10 h-[100vh]'>
      <h1 className='text-xl text-center font-bold'>Don't have an Account, <Link to="/Login" className='text-[#00b894]'>Sign Up here</Link></h1>
      <form className='flex flex-col items-center w-full gap-4'>
        <input className='w-full px-4 md:w-2/5 py-2' type="text" name="name" id="name" placeholder='Enter Your Name' value={user.name} required/>
        <input className='w-full px-4 md:w-2/5 py-2' type="email" name="email" id="email" placeholder='Enter Your email' value={user.email} required/>
        <input className='w-full px-4 md:w-2/5 py-2' type="password" name="password" id="password" placeholder='Enter Password' value={user.password} required/>
        <button onClick={registerUser} className='w-full md:w-2/5 px-4 py-2 font-semibold hover:bg-[#68cab7] rounded-lg text-white bg-[#00b894]'>Create Account</button>
      </form>
    </div>
  );
}
