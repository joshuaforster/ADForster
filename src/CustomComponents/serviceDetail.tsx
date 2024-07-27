import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../Data/serviceData';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const serviceId = id ? parseInt(id, 10) : null;
  const service = services.find(service => service.id === serviceId);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (service?.images && service.images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length);
      }, 4000); // Change every 4 seconds

      return () => clearInterval(intervalId);
    }
  }, [service]);

  if (!service) {
    return <div>Service not found</div>;
  }

  const renderContent = (content: string) => {
    const lines = content.split('\n\n').map((line, index) => {
      if (line.startsWith('- ')) {
        const items = line.split('\n').filter(item => item.startsWith('- ')).map((item, i) => (
          <li key={i}>{item.substring(2)}</li>
        ));
        return <ul key={index} className="list-disc list-inside">{items}</ul>;
      }
      return <p key={index} className="mb-4">{line}</p>;
    });
    return lines;
  };

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            {service.images && service.images.length > 1 ? (
              service.images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: index === currentImageIndex ? 1 : 0,
                    transition: 'opacity 2s ease-in-out',
                  }}
                  className="absolute inset-0 w-full h-full"
                />
              ))
            ) : (
              <img
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={service.images[0]}
                alt={service.title}
              />
            )}
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-8 pt-8 sm:pb-32 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none xl:w-1/2">
            <Link
              to="/services"
              className="text-gray-900 hover:text-customBlue inline-flex items-center mb-6"
            >
              &larr; Back to All Services
            </Link>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.title}</h1>
            <div className="mt-10 max-w-xl text-base leading-8 text-gray-700 lg:max-w-none">
              {renderContent(service.content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
