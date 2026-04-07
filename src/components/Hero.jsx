import React from "react";
import { motion as Motion } from "framer-motion";
import heroBackground from "../assets/hero-background.jpg";

const eyebrow = "Atuacao em Paraiso do Tocantins e em todo o estado";

const title =
  "Decisoes tecnicas que fortalecem a produtividade e o futuro da sua operacao.";

const subtitle =
  "Da gestao de pastagens e nutricao animal ao planejamento produtivo, projetos agronomicos e consultoria ambiental, a Vide entrega orientacao pratica e estrategica para produtores que querem crescer com seguranca e resultado.";

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
              <p className="mb-5 max-w-2xl text-sm font-medium leading-relaxed text-white/80 md:text-base">
                {eyebrow}
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-content-white md:text-5xl lg:text-[58px]">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                {subtitle}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contato"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 text-sm font-bold uppercase tracking-[0.18em] text-content-white transition-all hover:bg-primary-hover"
                >
                  Solicitar orcamento
                </a>
                <a
                  href="#contato"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 text-sm font-bold uppercase tracking-[0.18em] text-content-white backdrop-blur-sm transition-all hover:bg-white/15"
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
