
import './App.css'
import HeroSlider from './components/hero/HeroSlider'
import React, { StrictMode } from 'react';
import Navbar from './components/ui/Navbar';
import CardSection from './components/cardsecsion/cardsection';
const App = () => {
  return (
   
   <>
 
   
     <div className="flex flex-col  items-start justify-start bg-red-600 text-white relative  h-screen  w-screen overflow-hidden">
       <HeroSlider />
      <CardSection />

      </div>
    </>
  )
}

export default App
