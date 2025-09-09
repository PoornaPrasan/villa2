import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Navigation, 
  Palmtree, 
  Star, 
  Globe,
  Car,
  Plane,
  Shield,
  Award,
  Camera,
  Music,
  Facebook
} from 'lucide-react';

const VillaContactSection = () => {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-300 rounded-full animate-ping" style={{ animationDelay: '0ms', animationDuration: '2s' }}></div>
        <div className="absolute top-32 right-24 w-3 h-3 bg-teal-300 rounded-full animate-ping opacity-70" style={{ animationDelay: '800ms', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '1500ms', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2200ms', animationDuration: '3.5s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-emerald-200 rounded-full animate-ping" style={{ animationDelay: '3000ms', animationDuration: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-teal-200 rounded-full animate-ping opacity-60" style={{ animationDelay: '4000ms', animationDuration: '2.8s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden relative py-24 overflow-hidden bg-gradient-to-br from-emerald-900/5 via-transparent to-teal-900/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-teal-900/5"></div>
        <div className="absolute top-20 right-20 opacity-20 animate-bounce" style={{ animationDuration: '6s' }}>
          <Palmtree className="w-48 h-48 text-emerald-200 rotate-12" />
        </div>
        <div className="absolute bottom-32 left-16 opacity-10 animate-pulse" style={{ animationDuration: '4s' }}>
          <div className="text-8xl">🌊</div>
        </div>
        <div className="absolute top-1/2 left-8 opacity-15 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <div className="text-6xl">🌴</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Brand Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600  text-white px-6 py-2 rounded-full shadow-lg mb-8 text-sm font-medium tracking-wide hover:scale-105 transition-transform duration-300 animate-pulse" style={{ animationDuration: '3s' }}>
            <Palmtree className="w-4 h-4 mr-2 animate-pulse" style={{ animationDuration: '2s' }} />
            LA BY DEEPI VILLA
            <Palmtree className="w-4 h-4 ml-2 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
            Your Tropical
            <span className="block font-semibold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent animate-pulse bg-[length:200%_100%] animate-[gradient_4s_ease-in-out_infinite]" style={{ animationDuration: '3s' }}>
              Paradise Awaits
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-300 hover:text-slate-700">
             Experience luxury hospitality at our premium villa in Hikkaduwa, just minutes from the beach  where comfort and relaxation create unforgettable memories.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 fill-current text-yellow-500 animate-pulse hover:scale-110 transition-transform duration-200" 
                  style={{ animationDelay: `${i * 200}ms`, animationDuration: '2s' }}
                />
              ))}
              <span className="ml-2 text-slate-700 font-medium">5.0 Rating</span>
            </div>
            
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
              <Shield className="w-4 h-4 text-emerald-600 animate-pulse" style={{ animationDuration: '2.5s' }} />
              <span className="text-slate-600 font-medium">Licensed Property</span>
            </div>
            
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
              <Award className="w-4 h-4 text-teal-600 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
              <span className="text-slate-600 font-medium">Premium Service</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl px-6 py-3 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-emerald-100 hover:to-teal-100">
            <p className="text-emerald-700 font-medium">
              🥰 Come and embrace the timeless charm of Sri Lanka's golden coastline
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-16 bg-gradient-to-br from-teal-900/5 via-transparent to-emerald-900/5 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '4s' }}>
                  Get In Touch
                </h2>
                <p className="text-slate-600 text-lg transition-all duration-300 hover:text-slate-700">
                  Ready to book your tropical getaway? Contact us directly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="space-y-6">
                  {[
                    { 
                      icon: Phone, 
                      label: 'Call Us', 
                      value: '+94 777336924',
                      detail: 'Available 24/7',
                      color: 'emerald',
                      href: 'tel:+94777336924'
                    },
                    { 
                      icon: Mail, 
                      label: 'Email Us', 
                      value: 'lasanthija@gmail.com',
                      detail: 'Quick response guaranteed',
                      color: 'teal',
                      href: 'mailto:lasanthija@gmail.com'
                    },
                    { 
                      icon: MapPin, 
                      label: 'Visit Us', 
                      value: 'Green Garden Avenue, Arachchikanda',
                      detail: 'Hikkaduwa Beach, Sri Lanka',
                      color: 'blue'
                    },
                    {
                      icon: Clock, 
                      label: 'Service Hours', 
                      value: '24/7 Concierge',  
                      detail: 'Always here to help', 
                      color: 'purple' 
                    }
                  ].map((contact, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:scale-105">
                        <div className={`w-12 h-12 bg-gradient-to-r from-${contact.color}-500 to-${contact.color}-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 animate-pulse`} style={{ animationDuration: '3s', animationDelay: `${idx * 500}ms` }}>
                          <contact.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-800 mb-1 transition-all duration-200 group-hover:text-slate-900">
                            {contact.label}
                          </p>
                          {contact.href ? (
                            <a href={contact.href} className={`text-${contact.color}-600 font-bold hover:underline block mb-1 transition-all duration-300 hover:text-${contact.color}-700 hover:scale-105`}>
                              {contact.value}
                            </a>
                          ) : (
                            <p className={`text-${contact.color}-600 font-bold mb-1 transition-all duration-200 group-hover:text-${contact.color}-700`}>
                              {contact.value}
                            </p>
                          )}
                          <p className="text-slate-500 text-sm transition-all duration-200 group-hover:text-slate-600">
                            {contact.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="lg:col-span-3 space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  Find Our Villa
                </h2>
                <p className="text-slate-600 text-lg transition-all duration-300 hover:text-slate-700">
                  Located on beautiful Hikkaduwa Beach, Sri Lanka.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 transition-all duration-300 hover:text-slate-900">
                      Hikkaduwa Beach
                    </h3>
                    <p className="text-slate-600 transition-all duration-300 hover:text-slate-700">
                      Southern Province, Sri Lanka
                    </p>
                  </div>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=La+by+Deepi+Villa,+Hikkaduwa+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-xl font-medium hover:from-emerald-700 hover:to-teal-700 hover:scale-105 transition-all duration-300 shadow-lg text-sm hover:shadow-xl"
                  >
                    <Navigation className="w-4 h-4 animate-pulse" style={{ animationDuration: '2s' }} />
                    Directions
                  </a>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-lg mb-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]" style={{height: '400px'}}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.234567890123!2d80.1215076!3d6.1426383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177652b09633d%3A0xdcd8f25b3ff5afc1!2sLa%20by%20Deepi!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="La by Deepi Villa Location"
                    className="transition-all duration-300 hover:brightness-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute top-10 right-10 opacity-5 animate-pulse" style={{ animationDuration: '6s' }}>
          <div className="text-9xl">🏖️</div>
        </div>
        <div className="absolute bottom-10 left-10 opacity-5 animate-bounce" style={{ animationDuration: '8s' }}>
          <div className="text-7xl">🐢</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '5s' }}>
              Plan Your Visit
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-300 hover:text-slate-700">
              Everything you need to know for the perfect tropical getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Transportation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-100 hover:to-blue-150/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse hover:scale-110 transition-all duration-300" style={{ animationDuration: '3s' }}>
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-blue-900 text-xl transition-all duration-200 hover:text-blue-800">
                  Getting Here
                </h3>
              </div>
              <div className="space-y-3 text-blue-800">
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <Plane className="w-4 h-4 animate-pulse" style={{ animationDuration: '2s' }} />
                  <span className="text-sm">Colombo Airport: 2 hours drive</span>
                </div>
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <Car className="w-4 h-4 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                  <span className="text-sm">Free parking on-site</span>
                </div>
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <Navigation className="w-4 h-4 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  <span className="text-sm">Express highway access</span>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 border border-emerald-200/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-emerald-100 hover:to-emerald-150/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse hover:scale-110 transition-all duration-300" style={{ animationDuration: '3.5s' }}>
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-emerald-900 text-xl transition-all duration-200 hover:text-emerald-800">
                  Attractions
                </h3>
              </div>
              <div className="space-y-3 text-emerald-800">
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <span className="text-lg animate-bounce" style={{ animationDuration: '2s' }}>🏖️</span>
                  <span className="text-sm">World-class surfing beaches</span>
                </div>
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <span className="text-lg animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}>🐢</span>
                  <span className="text-sm">Turtle conservation center</span>
                </div>
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <span className="text-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.6s' }}>🏛️</span>
                  <span className="text-sm">Historic Galle Fort</span>
                </div>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-amber-100 hover:to-amber-150/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse hover:scale-110 transition-all duration-300" style={{ animationDuration: '4s' }}>
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-amber-900 text-xl transition-all duration-200 hover:text-amber-800">
                  Best Time
                </h3>
              </div>
              <div className="space-y-3 text-amber-800">
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <span className="text-lg animate-pulse" style={{ animationDuration: '1.5s' }}>🌞</span>
                  <span className="text-sm">Nov - Apr: Perfect weather</span>
                </div>
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <span className="text-lg animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }}>🌊</span>
                  <span className="text-sm">Dec - Mar: Best for surfing</span>
                </div>
                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                  <span className="text-lg animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>🌡️</span>
                  <span className="text-sm">28-32°C average temperature</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle Background Animation */}
        <div className="absolute top-0 right-0 opacity-5 animate-pulse" style={{ animationDuration: '8s' }}>
          <div className="text-8xl">🌴</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
  <div className="flex items-center mb-6 group">
    <Palmtree 
      className="w-6 h-6 text-emerald-400 mr-2 animate-pulse group-hover:scale-110 transition-transform duration-300" 
      style={{ animationDuration: '3s' }} 
    />
    <h3 className="text-xl font-bold transition-all duration-200 hover:text-emerald-400">
      LA BY DEEPI VILLA
    </h3>
  </div>

  <p className="text-slate-300 leading-relaxed mb-6 max-w-md text-sm transition-all duration-200 hover:text-slate-200">
    A tranquil villa retreat in Hikkaduwa, Sri Lanka where comfort meets convenience, only a short ride from the ocean.
  </p>

  <div className="space-y-2 text-sm text-slate-400">
    {/* Address */}
    <div className="flex items-center group hover:scale-105 transition-transform duration-200">
      <MapPin className="w-3 h-3 mr-2 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200" />
      <span className="group-hover:text-slate-300 transition-colors duration-200">
        Green Garden Avenue, Arachchikanda, Hikkaduwa 80240
      </span>
    </div>

    {/* Phone */}
    <div className="flex items-center group hover:scale-105 transition-transform duration-200">
      <Phone className="w-3 h-3 mr-2 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200" />
      <span className="group-hover:text-slate-300 transition-colors duration-200">
        +94 777336924
      </span>
    </div>

    {/* Email */}
    <div className="flex items-center group hover:scale-105 transition-transform duration-200">
      <Mail className="w-3 h-3 mr-2 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200" />
      <span className="group-hover:text-slate-300 transition-colors duration-200">
        lasanthija@gmail.com
      </span>
    </div>

    {/* Facebook */}
    <div className="flex items-center group hover:scale-105 transition-transform duration-200">
      <Facebook className="w-3 h-3 mr-2 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200" />
      <a 
        href="https://www.facebook.com/yourpage" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group-hover:text-slate-300 transition-colors duration-200 hover:underline"
      >
        Facebook
      </a>
    </div>

    {/* TikTok */}
    <div className="flex items-center group hover:scale-105 transition-transform duration-200">
      <Music className="w-3 h-3 mr-2 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200" />
      <a 
        href="https://www.tiktok.com/@la.by.deepi1?_t=ZS-8zQwLU6pUcJ&_r=1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group-hover:text-slate-300 transition-colors duration-200 hover:underline"
      >
        LA BY DEEPI
      </a>
    </div>
  </div>
</div>


            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-emerald-400 animate-pulse" style={{ animationDuration: '4s' }}>
                Villa Services
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-x-1 transition-transform">
                  Luxury Accommodation
                </li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-x-1 transition-transform">
                  High-Speed WiFi
                </li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-x-1 transition-transform">
                Private Parking
                </li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-x-1 transition-transform">
                Gourmet Kitchen
                </li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-x-1 transition-transform">
                Garden Terrace
                </li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-x-1 transition-transform">
                2 Bedrooms
                </li><li className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-x-1 transition-transform">
                Entertainment
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h4 className="font-semibold mb-4 text-emerald-400 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                Experience
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-300 group hover:scale-105 transition-transform duration-200">
                  <Star className="w-4 h-4 fill-current text-yellow-500 mr-2 animate-pulse group-hover:text-yellow-400 transition-colors duration-200" style={{ animationDuration: '2s' }} />
                  <span className="group-hover:text-slate-200 transition-colors duration-200">5.0 Star Rating</span>
                </div>
                <div className="flex items-center text-sm text-slate-300 group hover:scale-105 transition-transform duration-200">
                  <Shield className="w-4 h-4 text-emerald-400 mr-2 animate-pulse group-hover:text-emerald-300 transition-colors duration-200" style={{ animationDuration: '2.5s' }} />
                  <span className="group-hover:text-slate-200 transition-colors duration-200">Licensed Property</span>
                </div>
                <div className="flex items-center text-sm text-slate-300 group hover:scale-105 transition-transform duration-200">
                  <Award className="w-4 h-4 text-amber-500 mr-2 animate-pulse group-hover:text-amber-400 transition-colors duration-200" style={{ animationDuration: '3s' }} />
                  <span className="group-hover:text-slate-200 transition-colors duration-200">Premium Hospitality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
              <div className="mb-4 md:mb-0 transition-colors duration-200 hover:text-slate-300">
                © 2024 LA BY DEEPI VILLA. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-y-[-1px] transition-transform">
                  Privacy Policy
                </span>
                <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-y-[-1px] transition-transform">
                  Terms of Service
                </span>
                <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-200 hover:scale-105 hover:translate-y-[-1px] transition-transform">
                  Booking Terms
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VillaContactSection;