import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
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
            <Link to="/" className='text-xl font'>Home</Link>
            <Link to="/MyLinks" className='text-xl font'>My Links</Link>
            <Link to="/SignIn" className='text-xl font'>Sign In</Link>
          </div>
         {/* Hamburger menu for small Screens */}
          <div className="hamburger md:hidden ml-auto">
            <button onClick={()=>setFlag(!flag)}><RxHamburgerMenu/></button>
          </div>

          {/* Responsive Menu */}
       </div>
          {flag && (<div className='bg-white h-[100vh] w-[250px] p-8 flex flex-col gap-6 absolute top-0 right-0 z-10'>
            <button className="font-bold" onClick={()=>setFlag(!flag)}><IoIosArrowRoundBack/></button>
            <Link className='text-xl font'>Home</Link>
            <Link className='text-xl font'>My Links</Link>
            <Link className='text-xl font'>Sign In</Link>
          </div>)}
          </>
  );
}

export default Navbar;
