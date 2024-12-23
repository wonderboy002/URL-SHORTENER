import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const [user,setUser]=useState({"email":"","password":""});
  return (
    <div className='mt-10 flex flex-col gap-4 items-center p-10 h-[100vh]'>
      <h1 className='text-xl text-center font-bold'>Sign in to your Account</h1>
      <form className='flex flex-col items-center w-full gap-4'>
        <input className='w-full px-4 md:w-2/5 py-2' type="email" name="email" id="email" placeholder='Enter Your email' value={user.email} required/>
        <input className='w-full px-4 md:w-2/5 py-2' type="password" name="password" id="password" placeholder='Enter Password' required value={user.password}/>
        <button className='w-full md:w-2/5 px-4 py-2 font-semibold hover:bg-[#68cab7] rounded-lg text-white bg-[#00b894]'>Create Account</button>
      </form>
    </div>
  );
}

export default Login;
