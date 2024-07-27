import React, { useEffect, useState, useRef } from 'react';

const features = [
  {
    name: 'Advanced Techniques',
    description: 'We use advanced cleaning techniques and equipment to deliver the best results.',
  },
  {
    name: 'Professional Team',
    description: 'Our team is professional, courteous, and dedicated to providing excellent service.',
  },
  {
    name: 'Reliable Service',
    description: 'We are reliable and always on time, ensuring your windows are cleaned regularly and efficiently.',
  },
  {
    name: 'Eco-Friendly Solutions',
    description: 'We use environmentally friendly cleaning solutions that are safe for your home and the planet.',
  },
  {
    name: 'Customer Satisfaction',
    description: 'Our top priority is customer satisfaction. We aim to exceed your expectations.',
  },
  {
    name: 'Attention to Detail',
    description: 'We focus on every detail to ensure your windows are perfectly clean and clear.',
  },
  {
    name: 'Experienced Team',
    description: 'Our team has years of experience in providing top-quality window cleaning services.',
  },
  {
    name: 'Fully Insured',
    description: 'Our services are fully insured, giving you peace of mind for every job.',
  },
  {
    name: 'Use Deionised Water',
    description: 'We use purified, deionised water for a streak-free clean that leaves no residue.',
  },
];

export default function WhyADForster() {
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
    <div className="bg-white py-24 sm:py-32">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose AD Forster Window Cleaning?</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <dl key={feature.name} className="border border-gray-300 p-6">
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-gray-600">{feature.description}</dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
}
