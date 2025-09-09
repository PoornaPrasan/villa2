import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ArrowRight, ArrowLeft, Users, MapPin, Calendar, CheckCircle, ChevronDown } from 'lucide-react';


// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

const reviews = [
  {
    name: 'RU',
    location: 'Astana, Kazakhstan',
    rating: 5,
    title: 'Exceptional Villa Experience',
    text: 'We ❤️ have a 😁 house in Sri Lanka we will come back to you every year.',
    date: 'December 2024',
    verified: true,
    role: 'Traveler',
    stayDuration: '3 Months'
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const intervalRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-20 to-green-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-block mb-8">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 shadow-lg">
              <Star className="w-5 h-5 text-amber-400 fill-current" />
              <span className="text-blue-700 font-medium">Guest Testimonials</span>
              <Star className="w-5 h-5 text-amber-400 fill-current" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Loved
            </span>
            <br />
            <span className="text-gray-800">by Travelers</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real experiences from guests who have created unforgettable memories at our villa
          </p>
        </div>

        {/* Main Review Cards Layout */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="max-w-5xl mx-auto relative">
            {/* Navigation Controls */}
            <div className="flex justify-center space-x-4 mb-12">
              <button
                onClick={prevReview}
                className="group bg-white hover:bg-blue-50 rounded-2xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-100 hover:border-blue-200"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
              </button>
              
              <button
                onClick={nextReview}
                className="group bg-white hover:bg-blue-50 rounded-2xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-100 hover:border-blue-200"
              >
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
              </button>
            </div>

            {/* Card Slider */}
            <div className="relative overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {reviews.map((review, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                      
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                      
                      {/* Verified badge */}
                      {review.verified && (
                        <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-2 shadow-lg">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      )}

                      <div className="relative z-10">
                        {/* Header with info */}
                        <div className="mb-8">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800 mb-2">{review.name}</h4>
                              <div className="flex items-center space-x-2 text-gray-600 mb-1">
                                <MapPin className="w-4 h-4 text-blue-500" />
                                <span className="font-medium">{review.location}</span>
                              </div>
                              <div className="flex items-center space-x-3 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{review.date}</span>
                                </div>
                                <span>•</span>
                                <span>{review.stayDuration}</span>
                              </div>
                            </div>
                            
                            {/* Rating */}
                            <div className="text-right">
                              <div className="flex space-x-1 mb-2 mt-10 ">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                                ))}
                              </div>
                              <div className="text-2xl font-bold text-amber-500">{review.rating}.0</div>
                            </div>
                          </div>
                        </div>

                        {/* Review content */}
                        <div className="mb-8">
                          <h3 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">{review.title}</h3>
                          
                          <div className="relative bg-gray-50 rounded-2xl p-6 border-l-4 border-blue-400">
                            <Quote className="absolute top-2 left-2 w-6 h-6 text-blue-300" />
                            <p className="text-gray-700 leading-relaxed text-lg pl-8">
                              {review.text}
                            </p>
                            <Quote className="absolute bottom-2 right-2 w-6 h-6 text-blue-300 rotate-180" />
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <div className="flex items-center space-x-3">
                            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm">
                              {review.role}
                            </span>
                            <div className="flex items-center space-x-2 text-gray-500">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">Verified Guest</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-3 mt-12 mb-16">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current 
                  ? 'w-12 bg-gradient-to-r from-blue-500 to-purple-600' 
                  : 'w-6 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 mx-4 sm:ml-56 transition-all duration-1000 delay-600 ${
  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
}`}>
  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">5.0★</div>
    <div className="text-gray-600 text-xs sm:text-sm font-semibold">Perfect Rating</div>
  </div>
  
  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent mb-2">98%</div>
    <div className="text-gray-600 text-xs sm:text-sm font-semibold">Would Return</div>
  </div>

  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">24/7</div>
    <div className="text-gray-600 text-xs sm:text-sm font-semibold">Guest Support</div>
  </div>
</div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.airbnb.com/rooms/1296343204142311135?adults=1&search_mode=regular_search&check_in=2025-09-05&check_out=2025-09-10&children=0&infants=0&pets=0&source_impression_id=p3_1756962552_P3PmVlJBcCS8YCKt&previous_page_section_name=1001&federated_search_id=c6786eac-2e35-439c-ae6e-35a688a15424" 
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              <span>Read All Reviews</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            {/* Dropdown Button */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="group inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Book Your Stay</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-gray-800 rounded-2xl shadow-xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
                  <a 
                    href="https://www.booking.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-4 hover:bg-blue-700 transition-colors duration-200 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <span className="font-medium">Booking.com</span>
                  </a>
                  
                  <a 
                    href="https://www.vrbo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-4 hover:bg-blue-700 transition-colors duration-200 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-sm">V</span>
                    </div>
                    <span className="font-medium">Vrbo.com</span>
                  </a>
                  
                  <a 
                    href="https://www.airbnb.com/rooms/1296343204142311135?adults=1&search_mode=regular_search&check_in=2025-09-05&check_out=2025-09-10&children=0&infants=0&pets=0&source_impression_id=p3_1756962552_P3PmVlJBcCS8YCKt&previous_page_section_name=1001&federated_search_id=c6786eac-2e35-439c-ae6e-35a688a15424" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-4 hover:bg-red-600 transition-colors duration-200 text-white rounded-b-2xl"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="font-medium">Airbnb.com</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;