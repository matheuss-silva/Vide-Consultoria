import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlideCattleRoad from "../assets/hero-slide-cattle-road.jpeg";
import heroSlideCattleTree from "../assets/hero-slide-cattle-tree.jpeg";
import heroSlidePasture from "../assets/hero-slide-pasture.jpeg";
import {
  buildWhatsAppLink,
  WHATSAPP_GENERAL_MESSAGE,
  WHATSAPP_QUOTE_MESSAGE,
} from "../lib/contact";
import { staggerContainer, staggerItem, viewportConfig } from "../lib/motion";

const eyebrow = "Atuação em Paraíso do Tocantins e em todo o estado";

const title =
  "Decisões técnicas que fortalecem a produtividade e o futuro da sua operação.";

const subtitle =
  "Da gestão de pastagens e nutrição animal ao planejamento produtivo, projetos agronômicos e consultoria ambiental, a Vide entrega orientação prática e estratégica para produtores que querem crescer com segurança e resultado.";

const heroSlides = [
  {
    image: heroSlideCattleRoad,
    position: "center 62%",
  },
  {
    image: heroSlideCattleTree,
    position: "center 58%",
  },
  {
    image: heroSlidePasture,
    position: "center 64%",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section className="pt-0" id="inicio">
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={`${slide.image}-${index}`}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,14,8,0.72)_0%,rgba(10,14,8,0.52)_42%,rgba(10,14,8,0.42)_100%)]" />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
            <Motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ ...viewportConfig, amount: 0.35 }}
              className="max-w-3xl"
            >
              <Motion.p
                variants={staggerItem(16)}
                className="mb-4 max-w-2xl text-xs font-medium leading-relaxed tracking-[0.08em] text-white/80 sm:text-sm md:text-[15px]"
              >
                {eyebrow}
              </Motion.p>

              <Motion.h1
                variants={staggerItem(22)}
                className="max-w-3xl text-3xl font-bold leading-[1.1] text-content-white sm:text-4xl md:text-[46px] lg:text-[52px]"
              >
                {title}
              </Motion.h1>

              <Motion.p
                variants={staggerItem(24)}
                className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-[17px]"
              >
                {subtitle}
              </Motion.p>

              <Motion.div
                variants={staggerItem(26)}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href={buildWhatsAppLink(WHATSAPP_QUOTE_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 text-xs font-bold uppercase tracking-[0.18em] text-content-white transition-all hover:bg-primary-hover sm:text-sm"
                >
                  Solicitar orçamento
                </a>
                <a
                  href={buildWhatsAppLink(WHATSAPP_GENERAL_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 text-xs font-bold uppercase tracking-[0.18em] text-content-white backdrop-blur-sm transition-all hover:bg-white/15 sm:text-sm"
                >
                  Falar no WhatsApp
                </a>
              </Motion.div>
            </Motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 z-20 px-5 sm:bottom-8 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-6xl items-end justify-between gap-4">
            <div className="flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={`hero-dot-${index}`}
                  type="button"
                  aria-label={`Ir para slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-10 bg-primary" : "w-2.5 bg-white/55 hover:bg-white"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Slide anterior"
                onClick={goToPrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Próximo slide"
                onClick={goToNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
