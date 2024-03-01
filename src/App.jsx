
import './App.css'
import HeroSlider from './components/hero/HeroSlider'
import React, { StrictMode } from 'react';
import Navbar from './components/ui/Navbar';

const App = () => {
  return (
   
   <>
 
   <section className="bg-red-600 text-white py-16 relative  h-screen  w-screen overflow-hidden">
     
       <HeroSlider />
     

    </section>
    </>
  )
}

export default App
