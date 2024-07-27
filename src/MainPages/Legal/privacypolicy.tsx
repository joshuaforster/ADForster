import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <Helmet>
        <title>Privacy Policy - Lambert and Wright</title>
        <meta name="description" content="Read our Privacy Policy to learn how Lambert and Wright collects, uses, and protects your personal information." />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Lambert and Wright</h2>
        <p className="mb-2">
          We at Lambert and Wright ("we", "us", "our") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
          <a href="https://www.lambertandwright.co.uk" className="text-blue-500"> www.lambertandwright.co.uk</a> or use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <h3 className="text-xl font-semibold mb-2">1.1 Personal Information</h3>
        <p className="ml-4 mb-2">
          We may collect personally identifiable information, such as your name, email address, phone number, and other contact details when you fill out forms on our website or contact us directly.
        </p>
        <h3 className="text-xl font-semibold mb-2">1.2 Payment Information</h3>
        <p className="ml-4 mb-2">
          When you make a purchase or engage our services, we may collect payment information necessary to process your payment, such as your credit card number, billing address, and other related information.
        </p>
        <h3 className="text-xl font-semibold mb-2">1.3 Usage Data</h3>
        <p className="ml-4 mb-2">
          We may collect information about your use of our website, such as your IP address, browser type, operating system, referring URLs, and other technical information. This data helps us understand how our website is being used and to improve our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <h3 className="text-xl font-semibold mb-2">2.1 To Provide Services</h3>
        <p className="ml-4 mb-2">
          We use the information we collect to provide, maintain, and improve our services, process transactions, and send you related information, including confirmations and invoices.
        </p>
        <h3 className="text-xl font-semibold mb-2">2.2 To Communicate</h3>
        <p className="ml-4 mb-2">
          We may use your information to communicate with you, including sending service-related announcements, updates, and administrative messages.
        </p>
        <h3 className="text-xl font-semibold mb-2">2.3 For Marketing</h3>
        <p className="ml-4 mb-2">
          With your consent, we may use your information to send you promotional materials and other communications about our products and services. You can opt out of receiving marketing communications at any time by following the unsubscribe instructions provided in those communications.
        </p>
        <h3 className="text-xl font-semibold mb-2">2.4 To Improve Our Services</h3>
        <p className="ml-4 mb-2">
          We use the information we collect to analyze trends, track user activities, and improve our website and services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
        <h3 className="text-xl font-semibold mb-2">3.1 With Service Providers</h3>
        <p className="ml-4 mb-2">
          We may share your information with third-party service providers that perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </p>
        <h3 className="text-xl font-semibold mb-2">3.2 For Legal Reasons</h3>
        <p className="ml-4 mb-2">
          We may disclose your information if we believe it is necessary to comply with applicable laws, regulations, or legal processes, or to protect the rights, property, and safety of Lambert and Wright, our customers, or others.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p className="mb-2">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Your Privacy Rights</h2>
        <p className="mb-2">
          You have the right to access, correct, or delete your personal information. You can update your preferences or opt out of certain communications at any time by contacting us at 
          <a href="mailto:info@lambertandwright.co.uk" className="text-blue-500"> info@lambertandwright.co.uk</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p className="mb-2">
          We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and we will update the "Effective Date" at the top of this Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p className="mb-2">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="ml-4 mb-2">
          Lambert and Wright  
          19 Warren Park Way, Enderby, Leicester, LE19 4SA  
          <a href="mailto:info@lambertandwright.co.uk" className="text-blue-500">info@lambertandwright.co.uk</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
