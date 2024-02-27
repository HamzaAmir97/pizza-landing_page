
import './App.css'

import React, { StrictMode } from 'react';


const App = () => {
  return (
   
   <>
     <div className="flex  flex-col  items-start  h-screen w-screen bg-red-500">

      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 place-items-center bg-blue-500 w-screen">
        <h2 className="text-3xl">مرحبا بك في CheesTer!</h2>
        <p>CheesTer is a delicious and creamy cheese-based dessert that is popular in many countries. It is made with a combination of cheese, sugar, and other ingredients, and is typically served chilled.</p>
      </div>
       
      <div className=" grid grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 place-items-center bg-green-500  ">
        <h2 className="text-3xl">CheesTer!</h2>
        <p>CheesTer is a delicious and creamy cheese-based dessert that is popular in many countries. It is made with a combination of cheese, sugar, and other ingredients, and is typically served chilled.</p>
      </div>
       
   
    </div>
    </>
  )
}

export default App
