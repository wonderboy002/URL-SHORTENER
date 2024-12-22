import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";
function Navbar() {
  const [flag,setFlag]=useState(false);
  return (
    <>

    <div className="navbar p-8 flex gap-2 items-center">
        {/* navbar here */}
          <div className="Logo">
            <h1 className='text-3xl text-[#00b894] font-extrabold'>Shawt URL</h1>
          </div>
          {/* Links goes here */}
          <div className="links hidden md:flex gap-8 ml-auto font-bold">
            <span className='text-xl font'>Home</span>
            <span className='text-xl font'>My Links</span>
            <span className='text-xl font'>Sign In</span>
          </div>
         {/* Hamburger menu for small Screens */}
          <div className="hamburger md:hidden ml-auto">
            <button onClick={()=>setFlag(!flag)}><RxHamburgerMenu/></button>
          </div>

          {/* Responsive Menu */}
       </div>
          {flag && (<div className='bg-white min-h-[100vh] w-[250px] p-8 flex flex-col gap-6  absolute right-0 z-10'>
            <button className="font-bold" onClick={()=>setFlag(!flag)}><IoIosArrowRoundBack/></button>
            <span className='text-xl font'>Home</span>
            <span className='text-xl font'>My Links</span>
            <span className='text-xl font'>Sign In</span>
          </div>)}
          </>
  );
}

export default Navbar;
