import { useState } from 'react'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
function App() {
  return (
    <div className='App flex bg-[#dfe6e9] font-mono flex-col min-h-[100vh]'>
       <Navbar/>
       <Hero/>
    </div>
  )
}

export default App
