import Card from "../ui/Card";
    

const CardSection = () => {
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
    
};

export default CardSection;
