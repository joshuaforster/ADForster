import React from "react";
import { Helmet } from "react-helmet";
import Steps from "../PageComponents/HomeComponents/steps";
import TestimonialSlider from "../PageComponents/HomeComponents/Reviews";
// import Logo from "../PageComponents/HomeComponents/logo";
import HeroTwo from "../PageComponents/HomeComponents/heroTwo";
import HomeGallery from "../PageComponents/HomeComponents/homegallery";
import Assurance from "../PageComponents/HomeComponents/Assurance";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Lambert & Wright are award-winning bespoke developers with a reputation for creating exceptional properties. Learn more about our services, view our gallery, and read testimonials from our satisfied clients." />
        <title>Lambert & Wright - Home</title>
      </Helmet>
      <HeroTwo />
      {/* <Logo /> */}
      <Steps />
      <Assurance />
      <HomeGallery />
      <TestimonialSlider />
    </>
  );
}
