import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../../CustomComponents/projectsContext';
import FullscreenImage from '../../CustomComponents/FullScreenImage';


const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjects();
  const project = projects.find((proj) => proj.id === id);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
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

  if (!project) {
    return <div>Project not found</div>;
  }

  const openGallery = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const currentIndex = project.images.indexOf(currentImage!);
    const nextIndex = (currentIndex + 1) % project.images.length;
    setCurrentImage(project.images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = project.images.indexOf(currentImage!);
    const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    setCurrentImage(project.images[prevIndex]);
  };

  const similarProjects = projects.filter((proj) => proj.id !== id).slice(0, 3);

  return (
    <div
      ref={sectionRef}
      className={`bg-gray-100 pb-16 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-screen-lg">
        <Link
          to="/projects"
          className="text-customBlue hover:text-customGold mt-4 mb-4 inline-block"
        >
          &larr; Back to All Projects
        </Link>
        <div className="w-full mb-16">
          <h1 className="text-4xl font-thin mb-8">{project.title}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="relative overflow-hidden cursor-pointer lg:col-span-1 lg:row-span-2 h-full rounded-tl-lg rounded-bl-lg">
              <img
                src={project.images[0]}
                alt={`${project.title} main`}
                className="w-full h-full object-cover"
                onClick={() => openGallery(project.images[0])}
              />
              <div className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-50 transition-opacity duration-200"></div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:col-span-1 lg:row-span-2">
              {project.images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className={`relative w-full overflow-hidden cursor-pointer ${index === 0 ? 'rounded-tr-lg' : ''} ${index === 3 ? 'rounded-br-lg' : ''}`}
                  onClick={() => openGallery(image)}
                  style={{ paddingBottom: '50%' }} // Keep the aspect ratio of the images
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-50 transition-opacity duration-200"></div>
                </div>
              ))}
              <div className="relative w-full overflow-hidden cursor-pointer">
                <button
                  className="absolute inset-0 bg-white text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-200 transition"
                  onClick={() => openGallery(project.images[0])}
                >
                  Show all photos
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:space-x-4">
            <div className="lg:w-2/3">
              <hr className="border-gray-300 my-8" />
              <p className="text-gray-700 font-medium mb-8">{project.description}</p>
              <hr className="border-gray-300 my-8" />
              {/* <h2 className="text-2xl font-semibold mb-4">Key Features</h2> */}
              <ul className="list-none flex flex-wrap text-gray-700 mb-8">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="mr-4 mb-2 bg-gray-200 px-3 py-1 rounded">
                    {feature}
                  </li>
                ))}
              </ul>
              <hr className="border-gray-300 my-8" />
            </div>

          </div>
        </div>
        <div className="w-full mt-16">
          <h2 className="text-3xl font-bold mb-8">Similar Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProjects.map((proj) => (
              <article
                key={proj.id}
                className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={proj.images[0]} alt={proj.title} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link to={`/projects/${proj.id}`}>
                    <span className="absolute inset-0" />
                    {proj.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">{proj.description.substring(0, 100)}...</p>
              </article>
            ))}
          </div>
        </div>
        {isOpen && currentImage && (
          <FullscreenImage
            imageUrl={currentImage}
            onPrevious={prevImage}
            onNext={nextImage}
            onClose={closeGallery}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
