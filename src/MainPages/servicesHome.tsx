import React from 'react';
import { Helmet } from 'react-helmet';
import ServicesHead from '../PageComponents/Services/servicesHead';
import ServicesSection from '../PageComponents/Services/servicesSection';
import HeaderSection from '../CustomComponents/headerSection';

export default function ServicesHome() {
  return (
    <div>
      <Helmet>
        <title>Our Services | AD Forster Window Cleaning</title>
        <meta 
          name="description" 
          content="Discover the range of services offered by AD Forster Window Cleaning. From window cleaning to gutter cleaning, our experienced team is here to help you with all your cleaning needs." 
        />
      </Helmet>
      <HeaderSection 
        image='/images/ServicesData/WhatsApp Image 2024-06-03 at 19.37.51 (3).jpeg' 
        title="Services" 
      />
      <ServicesHead />
      <ServicesSection />
    </div>
  );
}
