import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../../CustomComponents/buttons';

const images = [
  '/images/Home/booking.jpg',
  '/images/Home/roof.jpg',
  '/images/Home/WhatsApp Image 2024-06-03 at 19.37.52 (2).jpeg',
  '/images/Home/yachtclub.jpg',
  '/images/Home/WhatsApp Image 2024-06-03 at 19.37.56.jpeg',
  '/images/Home/WhatsApp Image 2024-06-03 at 19.37.52 (2).jpeg'
];
export default function HeroTwo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setInitialLoad(false); // Disable the initial load flag after the first interval
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    // Preload the LCP image
    const linkWebP = document.createElement('link');
    linkWebP.rel = 'preload';
    linkWebP.href = images[0];
    linkWebP.as = 'image';
    linkWebP.type = 'image/webp';
    document.head.appendChild(linkWebP);

    return () => {
      document.head.removeChild(linkWebP);
    };
  }, []);

  return (
    <div className="relative isolate overflow-hidden h-[80vh] flex pt-14">
      <div className="absolute inset-0 -z-10 w-full h-full">
        {images.map((image, index) => (
          <picture key={index} className="absolute inset-0 w-full h-full">
            <source srcSet={image} type="image/webp" />
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'opacity 2s ease-in-out, transform 4s ease-in-out',
                transform: index === currentImageIndex || (index === 0 && initialLoad) ? 'scale(1.1)' : 'scale(1)',
              }}
              className="absolute inset-0 w-full h-full"
              loading={index === 0 ? 'eager' : 'lazy'} // Load the first image eagerly
            />
          </picture>
        ))}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="w-full px-4 lg:px-6 max-w-screen-xl mx-auto flex items-center">
        <div className="max-w-2xl lg:max-w-xl lg:pt-8 text-left">
          <p
            ref={paragraphRef}
            className={`mt-6 text-lg leading-8 text-white ${
              paragraphInView ? 'animate-slideInLeft' : 'opacity-0'
            }`}
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
              lineHeight: '1.5', // Set the line height to 1.5 times the font size
            }}
          >
            AD Forster Window Cleaning
          </p>
          <h1
            ref={headerRef}
            className={`text-5xl font-bold text-white ${
              headerInView ? 'animate-slideInRight' : 'opacity-0'
            }`}
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Adjust the shadow to your preference
              lineHeight: '1.5', // Set the line height to 1.5 times the font size
            }}
          >
            Sparkling Windows, Exceptional Service
          </h1>
          <div className="mt-10 flex items-center gap-x-6">
            <Button variant='tertiary' to="/contact" aria-label="Contact us">
              Get A Free Quote
            </Button>
            <Button variant='tertiary' to="/about" aria-label="Find Out More">
              Find Out More <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slideInRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-slideInRight {
            animation: slideInRight 2s ease-in-out forwards;
          }

          .animate-slideInLeft {
            animation: slideInLeft 2s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}
