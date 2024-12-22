import React from 'react';
import logo from "../assets/Logo.png";
function Hero() {
  return (
    <div className="hero p-4 z-8 w-full items-center flex md:flex-row flex-col  gap-4">
          <div className="image md:w-1/2 w-full">
            <img src={logo} className='h-[500px] w-full md:w-[500px]'/>
          </div>
          <div className="md:w-1/2 w-full p-4 pr-20 flex flex-col gap-4 ">
              <h1 className='md:text-6xl text-4xl font-bold'>Make your URL's Easy to Share</h1>
              <p className='text-xl font-semibold'>Shortened URL's are easy to share and access with Friends on Social Media, Text messages and More.</p>
              <button className='bg-[#00b894] p-2 px-4 sm:w-full md:w-2/3 rounded-md text-white hover:bg-[#3ecbaf]'>Get Started</button>
          </div>
       </div>
  );
}

export default Hero;
