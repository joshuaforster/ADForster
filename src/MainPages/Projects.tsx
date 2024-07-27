import React from 'react';
import { useProjects } from '../CustomComponents/projectsContext';
import { Link } from 'react-router-dom';

const Projects: React.FC<{ limit?: number }> = ({ limit }) => {
  const { projects } = useProjects();

  // If limit is provided, slice the projects array to the limit
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Projects</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Explore some of our latest and greatest projects. Click on any project to view more details.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((proj) => (
          <article
            key={proj.id}
            className="relative isolate flex flex-col justify-end overflow-hidden bg-gradient-to-b from-gray-400 to-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-300 ease-in-out transform hover:brightness-75"
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
  );
};

export default Projects;

