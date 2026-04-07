import React from "react";
import { motion as Motion } from "framer-motion";
import heroBackground from "../assets/hero-background.jpg";

const eyebrow = "Atuação em Paraíso do Tocantins e em todo o estado";

const title =
  "Decisões técnicas que fortalecem a produtividade e o futuro da sua operação.";

const subtitle =
  "Da gestão de pastagens e nutrição animal ao planejamento produtivo, projetos agronômicos e consultoria ambiental, a Vide entrega orientação prática e estratégica para produtores que querem crescer com segurança e resultado.";

const Hero = () => {
  return (
    <section className="pt-0" id="inicio">
      <div className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: "center 60%",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,14,8,0.72)_0%,rgba(10,14,8,0.52)_42%,rgba(10,14,8,0.42)_100%)]" />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-6xl px-8 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-12 lg:pt-36">
            <Motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="mb-4 max-w-2xl text-xs font-medium leading-relaxed tracking-[0.08em] text-white/80 sm:text-sm md:text-[15px]">
                {eyebrow}
              </p>

              <h1 className="max-w-3xl text-3xl font-bold leading-[1.1] text-content-white sm:text-4xl md:text-[46px] lg:text-[52px]">
                {title}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-[17px]">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contato"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 text-xs font-bold uppercase tracking-[0.18em] text-content-white transition-all hover:bg-primary-hover sm:text-sm"
                >
                  Solicitar orçamento
                </a>
                <a
                  href="#contato"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 text-xs font-bold uppercase tracking-[0.18em] text-content-white backdrop-blur-sm transition-all hover:bg-white/15 sm:text-sm"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
