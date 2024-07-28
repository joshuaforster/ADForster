import React, { useEffect, useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import HeaderSection from '../CustomComponents/headerSection';

const faqs = [
  {
    title: 'Do you offer commercial window cleaning?',
    answer: 'Yes, we provide professional window cleaning services for businesses of all sizes.',
  },
  {
    title: 'What is your cancellation policy?',
    answer: 'We require 24 hours\' notice for cancellations or rescheduling. If less notice is given, a cancellation fee may apply.',
  },
  {
    title: 'How do I book a service?',
    answer: 'You can book a service by calling us, emailing, or using our online booking form on our website.',
  },
  {
    title: 'What payment methods do you accept?',
    answer: 'We accept cash, bank transfers, and most major credit/debit cards.',
  },
  {
    title: 'How much do your services cost?',
    answer: 'Our pricing varies based on the size of the property and the specific services required. Contact us for a free, no-obligation quote.',
  },
  {
    title: 'What type of cleaning products do you use?',
    answer: 'We use eco-friendly and non-toxic cleaning solutions to ensure the safety of your home, pets, and the environment.',
  },
  {
    title: 'What methods do you use for window cleaning?',
    answer: 'We use traditional hand-cleaning methods as well as modern water-fed pole systems to ensure a streak-free finish.',
  },
  {
    title: 'Do I need to be home for the service?',
    answer: 'No, you don’t need to be home. We can clean exterior windows while you are away.',
  },
  {
    title: 'Do you clean windows in bad weather?',
    answer: 'Light rain doesn’t affect our cleaning services, but in cases of heavy rain or strong winds, we may need to reschedule for safety reasons.',
  },
  {
    title: 'Are you insured?',
    answer: 'Yes, we are fully insured for your peace of mind.',
  },
  {
    title: 'How often should I have my windows cleaned?',
    answer: 'For residential properties, we recommend every 4-8 weeks. For commercial properties, it can vary based on location and traffic, but typically every 4 weeks.',
  },
  {
    title: 'What services do you offer?',
    answer: 'We offer residential and commercial window cleaning, gutter cleaning, conservatory cleaning, and solar panel cleaning.',
  },
  {
    title: 'What areas do you serve?',
    answer: 'We provide window cleaning services throughout Norwich and the surrounding areas, mainly focusing on Spixworth, Catton, Taverham, Thorpe St Andrew, Hellesdon, Sprowston, Costessey, Eaton, Cringleford, Wroxham, Aylsham, Drayton.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndices((prevActiveIndices) => {
      if (prevActiveIndices.includes(index)) {
        return prevActiveIndices.filter((i) => i !== index);
      } else {
        return [...prevActiveIndices, index];
      }
    });
  };

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
    <>
      <Helmet>
        <title>FAQs - AD Forster Window Cleaning</title>
        <meta name="description" content="Find answers to frequently asked questions about AD Forster Window Cleaning, including services offered, pricing, booking, and more." />
      </Helmet>
      <section className="relative bg-customGray dark:bg-gray-900">
        <HeaderSection
          image='/images/Gallery/toWEBP-3 2/WhatsApp Image 2024-06-03 at 19.37.54 (5).webp'
          title="FAQ's"
        />
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-800 capitalize dark:text-white">Frequently asked questions</h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-10">
                  <div
                    className={`group flex items-center mb-4 text-lg font-medium cursor-pointer ${activeIndices.includes(index) ? 'text-customGold' : 'text-gray-900 dark:text-white'} hover:text-customGold`}
                    onClick={() => toggleFAQ(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => toggleFAQ(index)}
                  >
                    {activeIndices.includes(index) ? (
                      <FaMinus className="mr-2 w-5 h-5 group-hover:text-customGold" />
                    ) : (
                      <FaPlus className="mr-2 w-5 h-5 text-fontColour dark:text-white group-hover:text-customGold" />
                    )}
                    <h3 className="flex items-center group-hover:text-customGold">{faq.title}</h3>
                  </div>
                  {activeIndices.includes(index) && <div className="text-fontColour dark:text-white">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
