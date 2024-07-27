import React, { useEffect, useState, useRef } from 'react';
import Button from '../../CustomComponents/buttons';

const selectedImages = [
  '/images/Gallery/toWEBP-3 2/WhatsApp Image 2024-06-03 at 19.37.56.webp',
  '/images/Gallery/toWEBP-3 2/patio.webp',
  'images/Gallery/toWEBP-3 2/conservatories.webp'
];

export default function HomeGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`py-16 bg-gray-100 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="px-4 lg:px-8 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-fontColour">Gallery</h2>
          <p className="mt-4 text-lg text-fontColour">
            Take a look at some of the projects we've completed. Click the button below to see our full gallery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden border border-black dark:border-white"
              style={{ height: '500px' }} // Set a fixed height for all images
            >
              <div className="w-full h-full group">
                <picture>
                  <source srcSet={image} type="webp" />
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:brightness-75"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            to="/gallery"
            variant="primary"
            aria-label="Gallery Button"
          >
            View more
          </Button>
        </div>
      </div>
    </div>
  );
}

