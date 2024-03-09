
import './App.css'
import HeroSlider from './components/hero/HeroSlider'
import React from 'react';
import CardSection from './components/cardsecsion ';

const App = () => {
  return (

    <>


      <body className="flex flex-col  gap-10 items-center justify-center bg-red-600 text-white relative   w-screen ">

        <main>

          <div className='flex  items-center justify-center bg-red-600 text-white relative   w-screen '>

                 <h1 className='text-white text-center text-4xl font-bold  float-right '>Hello</h1>
          </div>

          <HeroSlider />
          <CardSection />










        </main>


      </body>
    </>
  )
}

export default App
