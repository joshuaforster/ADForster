import React, { useEffect, useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
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
    <div className="relative bg-customGray">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full lg:top-0"
          src='/images/Gallery/toWEBP-3 2/WhatsApp Image 2024-06-03 at 19.37.51 (3).webp'
          alt="Placeholder"
        />
      </div>
      <div className="pb-8 pt-8 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="flex flex-col mt-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Contact Us</h2>
              
              <p>You can contact us via phone, WhatsApp messaging or email </p>
            </div>
            <div
              ref={sectionRef}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-16"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="postcode" className="block text-sm font-semibold leading-6 text-gray-900">
                      Postcode <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="postcode"
                        name="postcode"
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="phone" className="block font-semibold text-gray-900">
                        Phone <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        How can we help you? <span className="text-red-500">*</span>
                      </label>
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customRed sm:text-sm sm:leading-6"
                        defaultValue={''}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-customRed focus:ring-customRed"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label htmlFor="consent" className="font-medium text-gray-900">
                          I agree that my data is collected and stored.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-start border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className=" px-3.5 py-2.5 bg-customBlue text-center text-sm font-semibold text-white shadow-sm hover:bg-customRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customRed"
                    disabled={!isChecked} // Disable button if checkbox is not checked
                  >
                    Send message
                  </button>
                </div>
              </form>
              <div className="mt-16 flex flex-col items-start space-y-4 text-gray-900">
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-xl" />
                  <a href="tel:07342367824" className="hover:text-customRed">David Forster: 07342 367824</a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-xl" />
                  <a href="mailto:enquiries@adforsterwindowcleaning.co.uk" className="hover:text-customRed">enquiries@adforsterwindowcleaning.co.uk</a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-xl" />
                  <span>Spixworth, Norwich</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
