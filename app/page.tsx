import React from "react";
import Hero from "./components/Hero";
import WhySolar from "./components/WhySolar";
import OurServices from "./components/Services";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      <WhySolar />
      <OurServices />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default page;
