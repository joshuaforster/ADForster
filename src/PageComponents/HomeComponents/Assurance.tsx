import React, { useState, useEffect, useRef } from 'react';
import Button from '../../CustomComponents/buttons';
import { services } from '../../Data/serviceData';
import { Link } from 'react-router-dom';

const images = [
  '/images/Home/booking.jpg',
  '/images/Home/roof.jpg',
  '/images/Home/WhatsApp Image 2024-06-03 at 19.37.52 (2).jpeg',
  '/images/Home/yachtclub.jpg',
  '/images/Home/WhatsApp Image 2024-06-03 at 19.37.56.jpeg',
  '/images/Home/WhatsApp Image 2024-06-03 at 19.37.52 (2).jpeg'
];

export default function Assurance() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
    <div ref={sectionRef} className="relative bg-gray-900 text-white">
      <div className="lg:block hidden lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2 overflow-hidden">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <picture
              key={index}
              className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                index === currentImageIndex
                  ? 'translate-x-0'
                  : index < currentImageIndex
                  ? '-translate-x-full'
                  : 'translate-x-full'
              }`}
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <source srcSet={image} type="image/webp" />
              <img
                src={image}
                alt={`Photos ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 xl:px-0">
        <div
          className={`px-6 py-16 lg:px-0 lg:py-24 transition-opacity duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl">
            <h1 className="mt-2 text-3xl font-bold capitalize sm:text-4xl">
              What we do...
            </h1>
            <p className="mt-4 leading-8">
            From sparkling windows to clean roofs, patios, and solar panels, we offer a wide range of services to keep your property looking tidy.
            </p>
            <div className="mt-6 max-w-xl text-base leading-7 lg:max-w-none">
              <h2>We offer:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {services.map((service, index) => (
                  <Button
                    key={index}
                    // className="w-full mb-4 py-4 text-center text-black bg-white rounded-lg hover:bg-darkGray hover:text-white transition duration-300"
                    to={`/services/${service.id}`}
                    variant={'tertiary'}
                  >
                    <strong className="font-normal">{service.title}</strong>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden block w-full h-64 sm:h-80 overflow-hidden">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <picture
                key={index}
                className={`absolute inset-0 h-full w-full transition-transform duration-1000 transform ${
                  index === currentImageIndex
                    ? 'translate-x-0'
                    : index < currentImageIndex
                    ? '-translate-x-full'
                    : 'translate-x-full'
                }`}
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <source srcSet={image} type="image/webp" />
                <img
                  src={image}
                  alt={`Photos ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
