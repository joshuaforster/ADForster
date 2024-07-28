import React from 'react';
import Contact from '../PageComponents/ContactComponents/Contact';
import { Helmet } from 'react-helmet';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | AD Forster Window Cleaning</title>
        <meta name="description" content="Get in touch with AD Forster Window Cleaning for all your window cleaning needs. Our team is here to help you with any inquiries or to schedule a service." />
        <meta name="keywords" content="Contact AD Forster, Window Cleaning Contact, AD Forster Contact Information, Window Cleaning Services Contact" />
        <meta name="author" content="AD Forster Window Cleaning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Contact />
    </>
  );
}

