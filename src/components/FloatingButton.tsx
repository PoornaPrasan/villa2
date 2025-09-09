import { useState, useRef, useEffect } from 'react';
import { Phone, MessageCircle, ChevronDown, X } from 'lucide-react';
import { FaAirbnb } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

const FloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const buttonRef = useRef<HTMLDivElement>(null);

  const bookingOptions = [
    {
      name: 'Call Now',
      icon: <Phone className="w-5 h-5" />,
      action: () => window.open('tel:+94777336924'),
      bgColor: 'bg-green-600 hover:bg-green-700',
      textColor: 'text-white'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      action: () => window.open('https://wa.me/94777336924', '_blank'),
      bgColor: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-white'
    },
    {
      name: 'Booking.com',
      icon: <TbBrandBooking className="w-5 h-5" />,
      action: () => window.open('https://www.booking.com/hotel/lk/la-by-deepi-green-haven-villa.en-gb.html', '_blank'),
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      name: 'Vrbo.com',
      icon: <span className="text-sm font-bold">VR</span>,
      action: () => window.open('https://www.vrbo.com/4677780?dateless=true', '_blank'),
      bgColor: 'bg-blue-800 hover:bg-blue-900',
      textColor: 'text-white'
    },
    {
      name: 'Airbnb',
      icon: <FaAirbnb className="w-5 h-5" />,
      action: () => window.open('https://www.airbnb.com/rooms/1296343204142311135?adults=1&search_mode=regular_search&check_in=2025-09-05&check_out=2025-09-10&children=0&infants=0&pets=0', '_blank'),
      bgColor: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-white'
    }
  ];

  // Close expanded menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hide/show button on scroll (optional)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button when scrolling up or at top, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
        setIsExpanded(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={buttonRef}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      {/* Expanded Menu */}
      <div
        className={`absolute bottom-16 right-0 transition-all duration-300 ease-out ${
          isExpanded
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden min-w-[200px]">
          {bookingOptions.map((option, index) => (
            <button
              key={option.name}
              onClick={() => {
                option.action();
                setIsExpanded(false);
              }}
              className={`w-full flex items-center px-4 py-4 transition-all duration-200 ${option.bgColor} ${option.textColor} ${
                index < bookingOptions.length - 1 ? 'border-b border-white/10' : ''
              } hover:scale-105 transform`}
            >
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mr-3 backdrop-blur-sm">
                {option.icon}
              </div>
              <span className="font-medium text-sm">{option.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        } group`}
      >
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 animate-ping opacity-20"></div>
        
        {/* Button content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {isExpanded ? (
            <X className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <div className="flex flex-col items-center">
              <Phone className="w-5 h-5 mb-0.5 animate-pulse" />
              <span className="text-xs font-bold leading-none">BOOK</span>
            </div>
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {isExpanded ? 'Close menu' : 'Book your stay'}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Floating notification badge */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
        !
      </div>
    </div>
  );
};

export default FloatingButton;