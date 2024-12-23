import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='bg-[#dfe6e9] App'>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default Layout;
