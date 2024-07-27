import React, { useEffect, useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSidebar: React.FC = () => {
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
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } bg-white p-6 shadow-lg rounded-lg`}
    >
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="postcode" className="block text-sm font-semibold leading-6 text-gray-900">
              Postcode <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="postcode"
                name="postcode"
                type="text"
                autoComplete="postal-code"
                className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              How can we help you? <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-3.5 py-2.5 bg-customBlue text-center text-sm font-semibold text-white shadow-sm hover:bg-customRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customRed"
          >
            Send message
          </button>
        </div>
      </form>
      <div className="mt-8 flex flex-col items-start space-y-4 text-gray-900">
        <div className="flex items-center space-x-2">
          <FaPhone className="text-xl" />
          <span>+44 1234 567890</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-xl" />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-xl" />
          <span>123 Main Street, Leicester, UK</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
