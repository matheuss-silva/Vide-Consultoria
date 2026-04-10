import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import consultoriaAgronomicaImage from "../assets/consultoria-agronomica-atual.png";
import planejamentoProdutivoImage from "../assets/planejamento-produtivo.png";
import projetosAgronomicosImage from "../assets/projetos-agronomicos.png";
import projetosAmbientaisImage from "../assets/projetos-ambientais.png";
import { buildWhatsAppLink } from "../lib/contact";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "../lib/motion";

const servicesData = [
  {
    title: "Consultoria\nAgronômica",
    mobileTitle: "Consultoria Agronômica",
    desc: "Diagnóstico técnico e orientações práticas para lavouras, pastagens e rotina produtiva no campo.",
    image: consultoriaAgronomicaImage,
    imagePosition: "center center",
    message:
      "Olá! Vim pelo site e tenho interesse em Consultoria Agronômica. Gostaria de mais informações sobre o serviço, como funciona o atendimento e como vocês podem me ajudar na propriedade.",
  },
  {
    title: "Planejamento\nProdutivo",
    mobileTitle: "Planejamento Produtivo",
    desc: "Planejamento da propriedade para melhorar resultados, organizar a operação e usar melhor os recursos.",
    image: planejamentoProdutivoImage,
    imagePosition: "center center",
    message:
      "Olá! Vim pelo site e tenho interesse em Planejamento Produtivo. Quero entender como vocês ajudam no planejamento da propriedade, organização da operação e melhoria dos resultados.",
  },
  {
    title: "Projetos\nAgronômicos",
    mobileTitle: "Projetos Agronômicos",
    desc: "Projetos técnicos para estruturar áreas, orientar o manejo e elevar a eficiência produtiva.",
    image: projetosAgronomicosImage,
    imagePosition: "center center",
    message:
      "Olá! Vim pelo site e tenho interesse em Projetos Agronômicos. Gostaria de saber mais sobre como funciona o serviço e de que forma ele pode contribuir para a eficiência produtiva da minha área.",
  },
  {
    title: "Projetos\nAmbientais",
    mobileTitle: "Projetos Ambientais",
    desc: "Licenciamento, regularizações e adequações ambientais para dar mais segurança à propriedade.",
    image: projetosAmbientaisImage,
    imagePosition: "center center",
    message:
      "Olá! Vim pelo site e tenho interesse em Projetos Ambientais. Gostaria de mais informações sobre licenciamento, regularizações e adequações ambientais para a propriedade.",
  },
];

const Programs = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-18 md:px-10 lg:px-12 lg:py-20"
      id="produtos"
    >
      <Motion.div
        {...fadeInUp()}
        className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
      >
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:mb-4 sm:text-sm sm:tracking-[0.26em]">
          Nossos serviços
        </span>
        <h2 className="text-2xl font-bold leading-tight text-content-primary sm:text-3xl md:text-4xl lg:text-[48px]">
          Soluções agronômicas e ambientais para sua propriedade
        </h2>
      </Motion.div>

      <Motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:items-start"
      >
        {servicesData.map((service, idx) => (
          <Motion.a
            key={service.title}
            href={buildWhatsAppLink(service.message)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Falar no WhatsApp sobre ${service.mobileTitle}`}
            variants={staggerItem(22)}
            className={`group relative min-w-0 overflow-hidden rounded-[24px] border border-border-soft shadow-[0_14px_34px_rgba(21,21,21,0.06)] sm:rounded-[28px] ${
              idx % 2 === 0 ? "xl:mt-0" : "xl:mt-10"
            }`}
          >
            <div className="relative h-[300px] sm:h-[340px] lg:h-[360px] xl:h-[390px]">
              <img
                src={service.image}
                alt={service.mobileTitle}
                loading="lazy"
                sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: service.imagePosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,6,0.02)_0%,rgba(7,10,6,0.2)_38%,rgba(7,10,6,0.84)_100%)]" />

              <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-[24px] font-bold leading-[1.08] text-white drop-shadow-sm sm:text-[28px]">
                    <span className="sm:hidden">{service.mobileTitle}</span>
                    <span className="hidden whitespace-pre-line sm:inline">{service.title}</span>
                  </h3>
                  <p className="mt-3 max-w-[30ch] text-sm leading-5 text-white/84 sm:max-w-[24ch] sm:leading-6">
                    {service.desc}
                  </p>
                </div>

                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-colors duration-300 group-hover:bg-primary group-hover:text-white sm:h-10 sm:w-10">
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Motion.a>
        ))}
      </Motion.div>
    </section>
  );
};

export default Programs;
