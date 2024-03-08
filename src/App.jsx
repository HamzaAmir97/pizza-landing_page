
import './App.css'
import HeroSlider from './components/hero/HeroSlider'
import React, { StrictMode } from 'react';

import CardSection from './components/cardsecsion ';
const App = () => {
  return (
   
   <>
   
   <h1 className='text-white text-center text-4xl font-bold  bounce '>Hello</h1>
   
     <div className="flex flex-col p-10  gap-10 items-start justify-start bg-red-600 text-white relative  h-auto  w-screen ">
     
       <HeroSlider />
       </div>
      <CardSection />

     
    </>
  )
}

export default App
