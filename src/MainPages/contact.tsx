import React from 'react';
import Contact from '../PageComponents/ContactComponents/Contact';
import { Helmet } from 'react-helmet';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Lambert & Wright</title>
        <meta name="description" content="Get in touch with Lambert & Wright for all your property renovation needs. Our team is here to help you with any inquiries or to schedule a consultation." />
        <meta name="keywords" content="Contact Lambert & Wright, Property Renovation Contact, Home Renovation Contact, Lambert & Wright Contact Information" />
        <meta name="author" content="Lambert & Wright" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Contact />
    </>
  );
}
