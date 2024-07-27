import React, { useState, useEffect, useRef } from 'react';
import Button from '../../CustomComponents/buttons';
import Projects from '../../MainPages/Projects';

const HomeProjects: React.FC = () => {
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
    <div className="bg-gray-100 py-16">
      <div
        ref={sectionRef}
        className={`container mx-auto px-6 lg:px-8 transition-opacity duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* <h2 className="text-3xl capitalize font-bold text-center text-fontColour mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-fontColour">
          Check out some of our latest and greatest projects. Click the button below to view all our projects.
        </p> */}
        <Projects limit={3} />
        <div className="text-center mt-12">
          <Button variant='secondary' to="/projects" aria-label="Projects Page">
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
