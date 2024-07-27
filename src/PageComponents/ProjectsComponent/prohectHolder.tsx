import React from 'react';
import Projects from '../../MainPages/Projects';

export default function ProjectHolder() {
  return (
    <section className="bg-white py-8 flex flex-col items-center justify-center">
      {/* <div className="max-w-screen-xl lg:pt-16 lg:px-6">
        <div className="max-w-screen-lg text-center text-gray-800 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
          See Our Recent Projects Across The East Midlands
          </h2>
          <p className='mb-4'>
          We are always updating our projects page, so please do check back regularly for our latest work. You also keep up to date with our latest videos on YouTube.
          </p>
        </div>
      </div> */}
      <Projects />
    </section>
  );
}