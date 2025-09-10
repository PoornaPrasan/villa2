import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { FaAirbnb } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";



interface Slide {
  image: string;
  title: string;
  subtitle: string;
  highlight: string;
  location: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      image: './front.jpg',
      title: 'WELCOME TO LA BY DEEP VILLA',
      subtitle: 'Discover the art of',
      highlight: 'Vacationing',
      location: 'Hikkaduwa, Sri Lanka'
    },
    {
      image: './Nightview5.jpg',
      title: 'WELCOME TO LA BY DEEPI VILLA',
      subtitle: 'Discover the art of',
      highlight: 'Vacationing',
      location: 'Hikkaduwa, Sri Lanka'
    },
    {
      image: './SPX_4844.jpg',
      title: 'WELCOME TO LA BY DEEPI VILLA',
      subtitle: 'Experience the essence of',
      highlight: 'Luxury Living',
      location: 'Hikkaduwa, Sri Lanka'
    },
    {
      image: './Nightview2.jpg',
      title: 'WELCOME TO LA BY DEEPI VILLA',
      subtitle: 'Embrace the beauty of',
      highlight: 'Endless Views',
      location: 'Hikkaduwa, Sri Lanka'
    }
  ];

  const bookingOptions = [
    {
      name: 'Booking.com',
      icon: <TbBrandBooking className='text-white font-bold' />,
      url: 'https://www.booking.com/hotel/lk/la-by-deepi-green-haven-villa.en-gb.html',
      bgColor: 'bg-blue-600',
      textColor: 'text-white'
    },
    {
      name: 'Vrbo.com',
      icon: 'vr',
      url: 'https://www.vrbo.com/4677780?dateless=true',
      bgColor: 'bg-blue-800',
      textColor: 'text-white'
    },
    {
      name: 'Airbnb.com',
      icon: <FaAirbnb  className='text-red-600 font-bold'/>,
      url: 'https://www.airbnb.com/rooms/1296343204142311135?adults=1&search_mode=regular_search&check_in=2025-09-05&check_out=2025-09-10&children=0&infants=0&pets=0',
      bgColor: 'bg-red-500',
      textColor: 'text-white'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleBookingClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-4 sm:top-6 lg:top-8 left-2 right-2 sm:left-4 sm:right-4 lg:left-16 lg:right-16 z-50">
        <div className="bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-[20px] backdrop-saturate-[180%] rounded-2xl sm:rounded-3xl lg:rounded-full border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.05)] relative">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-4">
            <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-light text-white tracking-wide">
                  <span className="hidden sm:inline">LA BY DEEP VILLA</span>
                  <span className="sm:hidden ml-2">LA BY DEEP VILLA</span>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1">
                {['Home', 'Amenities', 'Gallery', 'Attractions', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="px-4 xl:px-5 py-2 text-white/75 hover:text-white hover:bg-blue-500 rounded-full transition-all duration-300 text-sm font-medium tracking-wide"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Right side buttons */}
              <div className="flex items-center space-x-2">
                {/* Desktop Book Now Button with Dropdown */}
                <div className="hidden sm:block relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm tracking-wide border border-white/20 backdrop-blur-sm flex items-center gap-2"
                  >
                    Book Now
                    <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  <div className={`absolute top-full right-0 mt-2 w-48 transition-all duration-300 ease-in-out ${
                    dropdownOpen 
                      ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
                      : 'opacity-0 transform -translate-y-4 pointer-events-none'
                  }`}>
                    <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl  shadow-2xl overflow-hidden">
                      {bookingOptions.map((option, index) => (
                        <button
                          key={option.name}
                          onClick={() => handleBookingClick(option.url)}
                          className={`w-full flex items-center px-4 py-4 ${option.bgColor} ${option.textColor} hover:brightness-110 transition-all duration-200 ${
                            index < bookingOptions.length - 1 ? 'border-b border-white/10' : ''
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/40 flex items-center justify-center mr-3 text-sm font-bold">
                            {option.icon}
                          </div>
                          <span className="font-medium">{option.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Book Now Button */}
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="sm:hidden bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-xs tracking-wide border border-white/20 backdrop-blur-sm flex items-center gap-1"
                >
                  Book Now
                  <ChevronDown size={14} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile Menu Toggle */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-white p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 border border-white/20"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`sm:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-in-out ${
          mobileDropdownOpen 
            ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
            : 'opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/20 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/30 shadow-2xl mx-1 overflow-hidden">
            {bookingOptions.map((option, index) => (
              <button
                key={option.name}
                onClick={() => handleBookingClick(option.url)}
                className={`w-full flex items-center px-4 py-4 relative backdrop-blur-sm hover:bg-white/20 transition-all duration-200 group ${
                  index < bookingOptions.length - 1 ? 'border-b border-white/30' : ''
                }`}
              >
                {/* Content */}
                <div className="relative z-10 flex items-center">
                  <div className={`w-8 h-8 rounded-lg ${option.bgColor} flex items-center justify-center mr-3 text-sm font-bold shadow-lg`}>
                    {typeof option.icon === 'string' ? (
                      <span className={option.textColor}>{option.icon}</span>
                    ) : (
                      <div className="flex items-center justify-center">
                        {option.icon}
                      </div>
                    )}
                  </div>
                  <span className="font-semibold text-gray-800">{option.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
            : 'opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl mx-1 sm:mx-0 overflow-hidden">
            <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-1 sm:space-y-2">
              {['Home', 'Amenities', 'Gallery', 'Attractions', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block px-3 sm:px-4 py-2.5 sm:py-3 text-white/90 hover:text-white hover:bg-white/20 rounded-xl sm:rounded-2xl transition-colors duration-300 text-sm sm:text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-8000 ease-out ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-black/20 to-pink-100/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Floating cloud effects */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 z-30 p-3 sm:p-4 rounded-full backdrop-blur-xl border border-white/20 shadow-xl hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 z-30 p-3 sm:p-4 rounded-full backdrop-blur-xl border border-white/20 shadow-xl hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="sm:w-7 sm:h-7" />
      </button>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-6">
        <div className="max-w-6xl mx-auto pt-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-light mb-8 tracking-wide leading-none">
              {slides[currentSlide].title}
            </h1>

            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <p className="text-2xl md:text-3xl font-light text-white/90 tracking-wider mx-6">
                {slides[currentSlide].subtitle}
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent tracking-wider">
              {slides[currentSlide].highlight}
            </h2>
          </div>

          <div className="mb-8 inline-flex items-center bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-xl">
            <MapPin className="w-4 h-4 mr-2 text-blue-300" />
            <span className="text-white/80 text-sm tracking-wide">{slides[currentSlide].location}</span>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative group transition-all duration-500 ${
              index === currentSlide ? 'w-16' : 'w-4'
            } h-1 rounded-full overflow-hidden backdrop-blur-sm border border-white/20 hover:bg-white/30`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`absolute inset-0 transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                : 'bg-white/30 group-hover:bg-white/50'
            }`} />
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse shadow-lg" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;