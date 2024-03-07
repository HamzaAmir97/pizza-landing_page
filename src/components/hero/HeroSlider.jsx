import React from "react";
import Card from "../ui/Card";


const HeroSlider = () => {
  return (
    

      <div className="container gap-10 mx-auto px-4 flex flex-col md:flex-row lg:flex-row items-center justify-between">
        {/* Text */}


        <div className="text-center md:text-center max-w-xl z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pizza from parallel universe<br />
            <span className="text-yellow-300"> <strong>Star Pizza</strong></span>
          </h2>
          <p className="text-lg mb-6">welcome to the best pizza in the world</p>
          <a
            href="#menu"
            className="bg-yellow-300 text-red-700 px-6 py-3 font-bold rounded hover:bg-yellow-400 transition hover:text-white"
          >
           Order now
          </a>
        </div>

        {/* Image */}
        <div className="mt-a  md:mt-0 z-10">
          <img
            src="/images/pizza-hero.png"
            alt="Pizza"
            className=" shadow-xl rounded-xl
  w-[300px] md:w-[450px] drop-shadow-lg  transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
          />
        </div>
      </div>

    
  );
};

export default HeroSlider;
