import React from 'react';
import { Helmet } from 'react-helmet';
import AboutHead from '../PageComponents/AboutComponents/AboutHead';
import WhyJLR from '../PageComponents/AboutComponents/whyJLR';
import HeaderSection from '../CustomComponents/headerSection';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Lambert & Wright</title>
        <meta name="description" content="Learn more about Lambert & Wright, our story, and our award-winning expertise in property builds and renovations. Meet our dedicated team and discover why homeowners trust us to transform their houses into dream homes." />
      </Helmet>
      <HeaderSection
          image='/images/Gallery/toWEBP-3 2/WhatsApp Image 2024-06-03 at 19.37.51 (1).webp'
          title="About"
      />
      <AboutHead />
      <WhyJLR />

    </div>
  );
};

export default About;
