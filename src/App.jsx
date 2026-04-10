import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeOffer from "./components/WhatWeOffer";
import AboutUs from "./components/AboutUs";
import Metrics from "./components/Metrics";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <AboutUs />
      <Programs />
      <Metrics />
      <Testimonials />
      <Faq />
      <Footer />
      <CookieBanner />
    </>
  );
}

export default App;
