import  { useState } from 'react';
import { MapPin, Clock, Star, ArrowRight,X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Attractions = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const attractions = [
    {
      name: "Hikkaduwa Beach",
      image: "./hikkaduwabeach.jpg",
      distance: "2.5 km",
      time: "5 min drive",
      rating: 4.2,
      reviews: 2437,
      description: "Hikkaduwa Beach is a tropical paradise known for its golden sands, crystal-clear waters, vibrant coral reefs, and lively beach vibes—perfect for sun, surf, and unforgettable sunsets. 🌴✨",
      category: "Beach",
      link: "https://www.tripadvisor.com/Attraction_Review-g304134-d7034305-Reviews-Hikkaduwa_Beach-Hikkaduwa_Galle_District_Southern_Province.html"
    },
    {
      name: "Galle Fort",
      image: "./gallefort.jpg",
      distance: "15 km",
      time: "15 min drive",
      rating: 4.4,
      reviews: 30607,
      description: "Galle Fort is a UNESCO World Heritage site with well-preserved colonial architecture, charming streets, and stunning ocean views.",
      category: "Cultural",
      link: "https://whc.unesco.org/en/list/451/"
    },
    {
      name: "Yoga Retreat",
      image: "./yoga1.jpg",
      distance: "3.2 km",
      time: "8 min drive",
      rating: 4.7,
      reviews: 1452,
      description: "Experience tranquility and rejuvenation at our Yoga Retreat, surrounded by nature and offering expert-led sessions.",
      category: "Wellness",
      link: "https://www.yogahikkaduwa.com/"
    },
    {
      name: "Sea Turtle Hatchery",
      image: "./Sea_Turtle_Hatchery.jpg",
      distance: "2.5 km",
      time: "5 min drive",
      rating: 4.1,
      reviews: 1538,
      description: "Visit the Sea Turtle Hatchery to learn about conservation efforts and see baby turtles before they head to the ocean.",
      category: "Wildlife / Conservation",
      link:"https://www.lovesrilanka.org/sea-turtle-hatchery-and-rescue-centre/"
    },
    {
      name: "Ratgama Lake",
      image: "./Lake.jpg",
      distance: "8 km",
      time: "10 min drive",
      rating: 4.6,
      reviews: 634,
      description: "Visit Ratgama Lake for a serene experience surrounded by lush greenery and local wildlife.",
      category: "Nature / Adventure",
      link: "https://www.lovesrilanka.org/ratgama-lake/"
    },
    {
      name: "Surfing & Surf Schools",
      image: "./surf.jpg",
      distance: "2.5 km",
      time: "5 min drive",
      rating: 4.6,
      reviews: 1634,
      description: "Experience the thrill of surfing at our local surf schools, offering lessons for all skill levels.",
      category: "Adventure / Water Sports",
      link: "https://surfschoolsrilanka.com/"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section 
      id="attractions"
      ref={ref}
      className={`py-24 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Local Experiences</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Discover <span className="font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Paradise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore world-class attractions and hidden gems, all within minutes of your villa. 
            From ancient history to natural wonders, adventure awaits at every turn.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  onClick={() => setSelectedImage(attraction.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-gray-800">{attraction.category}</span>
                </div>
                
                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-sm font-bold text-gray-800">{attraction.rating}</span>
                  <span className="text-xs text-gray-600">({attraction.reviews})</span>
                </div>
                
                {/* Distance info */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{attraction.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{attraction.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {attraction.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {attraction.description}
                </p>
                
                <button className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-all duration-300 group-hover:translate-x-2">
                  <a href={attraction.link} className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-all duration-300 group-hover:translate-x-2">
                    <span>Explore Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in-up backdrop-blur-sm">
          <div className="relative max-w-5xl max-h-full animate-zoom-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-300 z-10 bg-black/50 rounded-full p-3 backdrop-blur-sm shadow-lg"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Attraction view"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Attractions;