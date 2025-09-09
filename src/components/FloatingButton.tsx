import { useState, useRef, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';
import { FaAirbnb } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

const FloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const bookingOptions = [
    {
      name: 'Booking.com',
      icon: <TbBrandBooking className="w-6 h-6 text-white" />,
      action: () => window.open('https://www.booking.com/hotel/lk/la-by-deepi-green-haven-villa.en-gb.html', '_blank'),
      bgColor: 'bg-blue-600',
      textColor: 'text-white'
    },
    {
      name: 'Vrbo.com',
      icon: <div className="w-6 h-6 bg-white rounded flex items-center justify-center"><span className="text-blue-800 font-bold text-xs">VR</span></div>,
      action: () => window.open('https://www.vrbo.com/4677780?dateless=true', '_blank'),
      bgColor: 'bg-blue-700',
      textColor: 'text-white'
    },
    {
      name: 'Airbnb.com',
      icon: <FaAirbnb className="w-6 h-6 text-white" />,
      action: () => window.open('https://www.airbnb.com/rooms/1296343204142311135?adults=1&search_mode=regular_search&check_in=2025-09-05&check_out=2025-09-10&children=0&infants=0&pets=0', '_blank'),
      bgColor: 'bg-red-500',
      textColor: 'text-white'
    }
  ];

  const contactOptions = [
    {
      name: 'Call Now',
      icon: <Phone className="w-5 h-5" />,
      action: () => window.open('tel:+94777336924'),
      bgColor: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      action: () => window.open('https://wa.me/94777336924', '_blank'),
      bgColor: 'bg-green-500',
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

  return (
    <div
      ref={buttonRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Contact Options - Always visible as small buttons */}
      <div className="flex flex-col gap-2 mb-3">
        {contactOptions.map((option) => (
          <button
            key={option.name}
            onClick={option.action}
            className={`w-12 h-12 ${option.bgColor} hover:scale-110 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group`}
            title={option.name}
          >
            {option.icon}
            {/* Tooltip */}
            <div className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {option.name}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </button>
        ))}
      </div>

      {/* Expanded Booking Menu */}
      <div
        className={`transition-all duration-300 ease-out mb-3 ${
          isExpanded
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 min-w-[240px]">
          {bookingOptions.map((option, index) => (
            <button
              key={option.name}
              onClick={() => {
                option.action();
                setIsExpanded(false);
              }}
              className={`w-full flex items-center px-6 py-4 transition-all duration-200 ${option.bgColor} ${option.textColor} hover:brightness-110 ${
                index < bookingOptions.length - 1 ? 'border-b border-white/20' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mr-4">
                {option.icon}
              </div>
              <span className="font-semibold text-lg">{option.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main "Book Your Stay" Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 min-w-[200px] justify-center"
      >
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
        
        {/* Button content */}
        <div className="relative z-10 flex items-center gap-3">
          <span className="text-lg font-bold">Book Your Stay</span>
          <ChevronUp 
            className={`w-5 h-5 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`} 
          />
        </div>
      </button>
    </div>
  );
};

export default FloatingButton;