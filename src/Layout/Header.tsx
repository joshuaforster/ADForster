import React, { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';

export default function Header() {
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: "FAQ's", path: '/faq' },
    { name: 'Contact', path: '/contact', isPrimary: true }
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-lg z-50">
      <nav className="bg-customGray border-gray-200 px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <picture>
              <source srcSet='/images/logos/AD Forster Logo.png' type="image/webp" />
              <img
                src="/images/logos/AD Forster Logo.png"
                className="h-14 sm:h-14"
                alt="Company Logo"
              />
            </picture>
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block  font-light  py-2 px-1 ${
                        link.isPrimary
                          ? 'hidden lg:block text-white bg-gray-900 px-4 py-2 rounded hover:bg-darkBlue'
                          : isActive
                          ? 'text-customBlue underline'
                          : 'text-gray-900'
                      } transition duration-300`
                    }
                    aria-current={link.path === pathname ? 'page' : undefined}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col mt-4 space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block text-sm py-2 pr-4 pl-3 ${
                        link.isPrimary
                          ? 'text-fontColour'
                          : isActive
                          ? 'text-customBlue underline'
                          : 'text-fontColour'
                      } font-light uppercase border-b border-gray-700 transition duration-300 rounded-lg`
                    }
                    aria-current={link.path === pathname ? 'page' : undefined}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
