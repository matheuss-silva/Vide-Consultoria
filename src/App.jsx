import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
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
import PageLoader from "./components/PageLoader";

const MIN_LOADER_DURATION = 1200;

function App() {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    let timeoutId;

    const revealPage = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, MIN_LOADER_DURATION - elapsed);

      timeoutId = window.setTimeout(() => {
        setIsPageReady(true);
      }, remaining);
    };

    if (document.readyState === "complete") {
      revealPage();
    } else {
      window.addEventListener("load", revealPage, { once: true });
    }

    return () => {
      window.removeEventListener("load", revealPage);
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPageReady ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPageReady]);

  return (
    <>
      <AnimatePresence>{!isPageReady ? <PageLoader /> : null}</AnimatePresence>

      <div className={isPageReady ? "" : "pointer-events-none select-none"}>
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
      </div>
    </>
  );
}

export default App;
