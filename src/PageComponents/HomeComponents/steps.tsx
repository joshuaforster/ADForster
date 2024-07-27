import React, { useEffect, useState, useRef } from 'react';


interface StepType {
  id: number;
  name: string;
  description: string;
}

const steps: StepType[] = [
  {
    id: 1,
    name: 'AD Forster Window Cleaning',
    description: 'Providing top-notch window cleaning services in Norwich and Norfolk for over a decade.',
  },
  {
    id: 2,
    name: 'Our Services',
    description: 'Offering comprehensive cleaning solutions for windows, gutters, fascias, soffits, and more.',
  },
  {
    id: 3,
    name: 'Our Process',
    description: 'We use eco-friendly methods and advanced equipment to ensure sparkling clean results.',
  },
  {
    id: 4,
    name: 'Get in Touch',
    description: 'Contact us today for a free quote and join our satisfied customer base.',
  },
];

const Steps: React.FC = () => {
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
    <section ref={sectionRef} className="bg-white font-roboto">
      <div
        className={`mx-auto max-w-7xl px-6 py-20 lg:px-8 transition-opacity duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-5xl font-bold leading-[1.5] capitalize text-gray-900">
              Your <span className="text-customBlue">windows</span> our expertise...
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:mt-0 lg:ml-16 lg:max-w-xl lg:grid-cols-2">
            {steps.map((step) => (
              <Step key={step.id} step={step} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  step: StepType;
  isVisible: boolean;
}

const Step: React.FC<StepProps> = ({ step, isVisible }) => {
  return (
    <dl
      className={`flex flex-col gap-y-3 border-l border-black pl-6 text-gray-900 transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <dt className="text-sm leading-6">{step.description}</dt>
      <dd className="order-first text-3xl text-customBlue font-semibold tracking-tight">{step.name}</dd>
    </dl>
  );
};

export default Steps;
