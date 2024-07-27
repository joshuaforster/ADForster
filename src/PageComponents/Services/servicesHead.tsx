import React, { useRef } from 'react';

export default function ServicesHead() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-1 lg:py-1">
      <div ref={sectionRef} className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <picture>
            <source srcSet='/images/Home/booking.jpg' type="image/webp" />
            <img
              className="w-full h-80 object-cover hidden lg:block"
              src='/images/Home/booking.jpg'
              alt="Window cleaning service"
              loading="lazy"
            />
          </picture>
          <picture>
            <source srcSet='/images/Home/roof.jpg' type="image/webp" />
            <img
              className="w-full h-80 object-cover hidden lg:block"
              src='/images/Home/roof.jpg'
              alt="Roof cleaning service"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="font-light mt-4 lg:mt-0 text-gray-700 sm:text-lg">
          <h2 className="mb-4 font-semibold text-4xl text-gray-900">
            What We Can Do for You
          </h2>
          <p className="mb-4 text-base">
            At AD Forster Window Cleaning, we provide a wide range of cleaning services to keep your home or business looking its best. Our team of professionals uses advanced techniques and eco-friendly solutions to ensure your satisfaction.
          </p>
          <p className="mb-4 text-base">
            Whether you need regular window cleaning, gutter cleaning, or conservatory cleaning, we have the expertise and equipment to deliver outstanding results.
          </p>
        </div>
      </div>
    </section>
  );
}
