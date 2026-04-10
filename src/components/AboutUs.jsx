import React from "react";
import { motion as Motion } from "framer-motion";
import { Briefcase, Leaf, Medal, ShieldCheck } from "lucide-react";
import isabelaCardialImage from "../assets/isabela-cardial.jpeg";
import {
  fadeInScale,
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../lib/motion";

const highlights = [
  {
    Icon: Briefcase,
    text: "Soluções pensadas para o campo",
    mobileText: "Soluções para o campo",
  },
  {
    Icon: Leaf,
    text: "Mais clareza na operação",
    mobileText: "Clareza na operação",
  },
  {
    Icon: Medal,
    text: "Planejamento para produzir melhor",
    mobileText: "Planejamento melhor",
  },
  {
    Icon: ShieldCheck,
    text: "Acompanhamento técnico contínuo",
    mobileText: "Suporte contínuo",
  },
];

const AboutUs = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-18 sm:px-8 sm:py-22 lg:px-12 lg:py-24" id="sobre">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(310px,0.82fr)] lg:gap-10">
        <Motion.div {...fadeInUp()} className="max-w-2xl rounded-[2rem] py-2 lg:pt-6">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-primary sm:mb-5 sm:text-lg sm:tracking-[0.4em] md:text-xl">
            Sobre nós
          </span>
          <p className="max-w-xl text-sm leading-7 text-content-secondary sm:text-base sm:leading-8 md:text-lg md:leading-9">
            A Vide Consultoria Agronômica é conduzida por{" "}
            <span className="font-bold text-content-primary">Isabela Cardial</span>, Engenheira
            Agrônoma, Responsável Técnica e Fundadora da empresa. Com formação técnica em meio
            ambiente, pós-graduação em produção intensiva de gado de corte e experiência em
            consultoria agronômica, atuação em campo e projetos ambientais, desenvolve um trabalho
            pautado em orientação técnica clara, proximidade com o produtor e foco em resultado.
          </p>
        </Motion.div>

        <Motion.div
          {...fadeInScale(0.08)}
          className="relative mx-auto h-[320px] w-full max-w-[400px] overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#dfeedd_0%,#f7f8f4_100%)] sm:h-[390px] lg:mx-0 lg:ml-auto lg:h-[490px]"
        >
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_center,rgba(141,187,46,0.18),transparent_70%)]" />
          <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-white/35 blur-2xl" />
          <img
            className="relative z-10 h-full w-full object-cover"
            style={{ objectPosition: "center 14%" }}
            src={isabelaCardialImage}
            alt="Isabela Cardial em área de cultivo"
          />
        </Motion.div>
      </div>

      <Motion.div
        variants={staggerContainer(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 xl:grid-cols-4"
      >
        {highlights.map((item) => (
          <Motion.div
            key={item.text}
            variants={staggerItem(18)}
            whileHover={{ y: -4 }}
            className="flex items-center gap-3 rounded-[22px] border border-border-soft bg-white px-4 py-3.5 shadow-[0_12px_28px_rgba(21,21,21,0.04)] transition-all duration-300 hover:shadow-[0_18px_34px_rgba(21,21,21,0.08)] sm:min-h-[98px] sm:px-5 sm:py-4"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-surface-secondary text-primary shadow-sm sm:h-10 sm:w-10">
              <item.Icon size={18} strokeWidth={1.9} />
            </span>
            <p className="text-[13px] font-semibold leading-5 text-content-primary sm:text-sm sm:leading-6">
              <span className="sm:hidden">{item.mobileText}</span>
              <span className="hidden sm:inline">{item.text}</span>
            </p>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
};

export default AboutUs;
