import  { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';

type GalleryCategory = 'All' | 'Front' | 'Garden' | 'Kitchen' | 'Room' | 'Bathroom'| 'Porch' | 'Night View';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
}

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages: GalleryImage[] = [
    // Front
    { id: 1, src: 'front.jpg', alt: 'Front view', category: 'Front' },
    { id: 3, src: 'front3.jpg', alt: 'Front view', category: 'Front' },
    { id: 4, src: 'front4.jpg', alt: 'Front view', category: 'Front' },

    // Garden
    { id: 6, src: 'garden2.jpg', alt: 'Garden view', category: 'Garden' },

    // Kitchen
    { id: 8, src: 'kitchen1.jpg', alt: 'Kitchen view', category: 'Kitchen' },
    { id: 9, src: 'kitchen2.jpg', alt: 'Kitchen view', category: 'Kitchen' },
    { id: 10, src: 'kitchen3.jpg', alt: 'Kitchen view', category: 'Kitchen' },

    // Rooms/Bedrooms
    { id: 11, src: 'room1.jpg', alt: 'Master bedroom view', category: 'Room' },
    { id: 12, src: 'room2.jpg', alt: 'Master bedroom view', category: 'Room' },
    { id: 13, src: 'room3.jpg', alt: 'Master bedroom view', category: 'Room' },
    { id: 14, src: 'room4.jpg', alt: 'Master bedroom view', category: 'Room' },

    // Bathroom
    { id: 16, src: 'bathroom2.jpg', alt: 'Bathroom view', category: 'Bathroom' },
    { id: 17, src: 'bathroom3.jpg', alt: 'Bathroom view', category: 'Bathroom' },
    { id: 18, src: 'bathroom4.jpg', alt: 'Bathroom view', category: 'Bathroom' },

    // Porch
    { id: 19, src: 'porch1.jpg', alt: 'Porch view', category: 'Porch' },
    { id: 20, src: 'porch2.jpg', alt: 'Porch view', category: 'Porch' },
    { id: 21, src: 'porch4.jpg', alt: 'Porch view', category: 'Porch' },

    //Night View
    { id: 23, src: 'Nightview2.jpg', alt: 'Night view', category: 'Night View' },
    { id: 24, src: 'Nightview3.jpg', alt: 'Night view', category: 'Night View' },
    { id: 25, src: 'Nightview4.jpg', alt: 'Night view', category: 'Night View' },
    { id: 26, src: 'Nightview5.jpg', alt: 'Night view', category: 'Night View' },
  
  ];

  const categories: GalleryCategory[] = ['All', 'Front', 'Garden', 'Kitchen', 'Room', 'Bathroom','Porch','Night View'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <section 
      id="gallery" // Add this line
      ref={ref}
      className={`py-20 bg-gradient-to-b from-white via-gray-50 to-white transition-all duration-1000 ${
      isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Villa <span className="font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Take a visual journey through our stunning villa. From luxurious interiors to breathtaking outdoor spaces, every corner tells a story of elegance. Built in 2024, the villa's ground-floor apartment with two bedrooms is ready for you.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div
          className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredImages.map((image, idx) => {
            // Assign different heights for a dynamic look
            let heightClass = 'h-64';
            if (idx % 6 === 1 || idx % 6 === 4) heightClass = 'h-80';
            if (idx % 6 === 2) heightClass = 'h-96';
            return (
              <div
                key={image.id}
                className={`mb-6 break-inside-avoid relative group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 shadow-lg bg-white/70 transition-all duration-300 animate-fade-in-up ${heightClass}`}
                style={{ animationDelay: `${idx * 60}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                  style={{ display: 'block' }}
                />
                {/* Overlay with title on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <span className="text-white text-xl font-semibold drop-shadow-lg animate-fade-in-up">{image.alt}</span>
                </div>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in-up">
          <div className="relative max-w-4xl max-h-full animate-zoom-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm shadow-lg"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery view"
              className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl animate-zoom-in"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;