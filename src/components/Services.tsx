import React from 'react';
import { Wifi, Car, ChefHat, Tv, Trees, Bed } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const amenities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet throughout the villa for work or leisure."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Private Parking",
      description: "Secure, dedicated parking spaces for your vehicles with 24/7 access and peace of mind."
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Gourmet Kitchen",
      description: "Fully equipped modern kitchen with premium appliances and everything needed for culinary adventures."
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Garden Terrace",
      description: "Beautiful outdoor terrace surrounded by lush gardens, perfect for dining and relaxation."
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "2 Bedrooms",
      description: "Spacious, elegantly furnished bedrooms with luxury linens and stunning views for restful nights."
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Entertainment",
      description: "Premium entertainment system with smart TV, sound system, and streaming services for your enjoyment."
    }
  ];

  return (
    <section 
    id="amenities"
    ref={ref}
    className={`py-24 bg-gradient-to-b from-sky-50 to-white relative transition-all duration-1000 ${
      isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}>
        <div className="inline-block bg-gradient-to-r from-emerald-100 to-amber-100 rounded-full px-6 py-2 mb-6">
          <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider">Premium Amenities</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
          Luxury <span className="font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Redefined</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Every detail has been carefully curated to provide an unparalleled experience 
          of comfort, elegance, and sophistication.
        </p>
      </div>
      
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 delay-400 ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}>
        {/* Left side - Hero image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-amber-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="./porch2.jpg"
              alt="Villa interior"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            
            {/* Orange/Amber Experience Badge - Similar to reference image */}
            <div className="absolute bottom-6 left-6 bg-amber-500/40 backdrop-blur-sm rounded-2xl px-6 py-4 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold leading-none">24/7</div>
              <div className="text-sm font-medium opacity-90 leading-tight mt-1">
                Support
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-4xl font-light text-gray-900 mb-4">
              Experience <span className="font-bold">Unmatched</span> Luxury
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our villa represents the pinnacle of Mediterranean hospitality, where every amenity 
              has been thoughtfully selected to exceed the expectations of the most discerning guests.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">1500m²</div>
              <div className="text-gray-600 font-medium">Living Space</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">2</div>
              <div className="text-gray-600 font-medium">Bedrooms</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.5 KM</div>
              <div className="text-gray-600 font-medium">To Beach</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">5★</div>
              <div className="text-gray-600 font-medium">Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Amenities Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-1000 delay-600 hover:border-blue-500 ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}>
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="relative group p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200 shadow-md hover:shadow-lg hover:shadow-blue-400 hover:border-blue-500"
          >
            <div className="mb-4 text-emerald-600">
              {amenity.icon}
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              {amenity.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Services;