import React from 'react';
import { Helmet } from 'react-helmet';
import ServicesHead from '../PageComponents/Services/servicesHead';
import ServicesSection from '../PageComponents/Services/servicesSection';
import HeaderSection from '../CustomComponents/headerSection';

export default function ServicesHome() {
  return (
    <div>
      <Helmet>
        <title>Our Services | Lambert & Wright</title>
        <meta 
          name="description" 
          content="Discover the range of services offered by Lambert & Wright. From architectural planning to full project management, our experienced team is here to help you with your renovation and building needs." 
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
