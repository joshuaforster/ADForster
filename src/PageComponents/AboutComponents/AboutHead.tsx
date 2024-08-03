import React, { useRef } from 'react';

export default function AboutHead() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-gray-900 py-12">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-white lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                AD Forster Window Cleaning
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  At AD Forster Window Cleaning, we take immense pride in the work we do because it defines who we are. Based in Norwich, Norfolk, our company has been providing top-notch window cleaning services for over a decade. Our commitment to customer satisfaction and eco-friendly methods sets us apart in the industry.
                </p>
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">Our Story</h2>
                <p className="mt-4">
                  AD Forster Window Cleaning has built a reputation for reliability, professionalism, and exceptional service. Our team uses advanced equipment and eco-friendly methods to ensure your windows are sparkling clean.
                </p>
                <p className="mt-4">
                  We help homeowners and businesses maintain their properties' appearance with our comprehensive cleaning solutions, including window cleaning, gutter cleaning, fascia and soffit cleaning, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-4 lg:sticky lg:top-24 lg:flex lg:items-stretch">
            <div className="relative overflow-hidden flex-grow">
              <img
                className="w-full h-full object-cover hidden lg:block lg:h-3/4"
                src='/images/Home/booking.jpg'
                alt="About"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
