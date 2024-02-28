
import './App.css'
import HeroSlider from './components/hero/HeroSlider'
import React, { StrictMode } from 'react';


const App = () => {
  return (
   
   <>
     <div className="flex flex-col items-center justify-center h-screen w-screen">
       <HeroSlider />
     </div>
    
    </>
  )
}

export default App
