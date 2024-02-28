import React from "react";
import Card from "../ui/Card";


const HeroSlider = () => {
  return (
    <section className="bg-red-600 text-white py-16 relative overflow-hidden">

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}


        <div className="text-center md:text-left max-w-xl z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pizza from parallel universe<br />
            <span className="text-yellow-300"> <strong>Star Pizza</strong></span>
          </h2>
          <p className="text-lg mb-6">welcome to the best pizza in the world</p>
          <a
            href="#menu"
            className="bg-yellow-300 text-red-700 px-6 py-3 font-bold rounded hover:bg-yellow-400 transition"
          >
           Order now
          </a>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0 z-10">
          <img
            src="/images/pizza-hero.png"
            alt="Pizza"
            className=" shadow-xl rounded-xl
  w-[300px] md:w-[450px] drop-shadow-lg  transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-center">
              <div className="text-4xl text-red-600 mb-4">🍕</div>
              <h3 className="text-xl font-bold mb-2">Świeże Składniki</h3>
              <p className="text-gray-600">Używamy tylko najświeższych składników do przygotowania naszej pizzy.</p>
            </div>
          </Card>

          <Card className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-center">
              <div className="text-4xl text-red-600 mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Szybka Dostawa</h3>
              <p className="text-gray-600">Dostarczamy Twoją pizzę gorącą i świeżą w ciągu 30 minut.</p>
            </div>
          </Card>

          <Card className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-center">
              <div className="text-4xl text-red-600 mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Najlepsza Jakość</h3>
              <p className="text-gray-600">Gwarantujemy najwyższą jakość naszych produktów.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Decorative leaves (اختياري - عبر CSS لاحقاً أو صورة خلفية) */}
    </section>
  );
};

export default HeroSlider;
