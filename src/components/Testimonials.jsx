import React from "react";
import { motion as Motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "../lib/motion";

const testimonialsData = [
  {
    title: "Diagnóstico técnico",
    desc: "Análise da propriedade para orientar decisões mais seguras e coerentes com a realidade do campo.",
    name: "Clareza na operação",
  },
  {
    title: "Planejamento aplicado",
    desc: "Organização da rotina produtiva para melhorar o uso dos recursos e dar mais direção à operação.",
    name: "Mais eficiência",
  },
  {
    title: "Orientação prática",
    desc: "Recomendações técnicas objetivas para facilitar o manejo, ajustar processos e reduzir desperdícios.",
    name: "Decisão no campo",
  },
  {
    title: "Acompanhamento próximo",
    desc: "Suporte técnico contínuo para acompanhar resultados, corrigir gargalos e evoluir com confiança.",
    name: "Suporte técnico",
  },
  {
    title: "Visão ambiental",
    desc: "Apoio em demandas ambientais com responsabilidade técnica e orientação clara para a propriedade.",
    name: "Regularização",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-surface-secondary py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <Motion.h2
          {...fadeInUp()}
          className="mb-10 text-center text-3xl font-bold leading-tight text-content-primary md:text-4xl"
        >
          Como a Vide fortalece a sua operação
        </Motion.h2>

        <Motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="no-scrollbar flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
        >
          {testimonialsData.map((item) => (
            <Motion.article
              key={item.name}
              variants={staggerItem(20)}
              whileHover={{ y: -6 }}
              className="flex min-h-[220px] w-[240px] shrink-0 flex-col rounded-[26px] bg-content-white p-6 shadow-[0_14px_32px_rgba(21,21,21,0.05)] transition-shadow hover:shadow-[0_18px_40px_rgba(21,21,21,0.08)] lg:min-h-[230px] lg:w-auto"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} size={14} fill="currentColor" className="text-primary" />
                ))}
              </div>

              <h3 className="mb-3 text-lg font-bold leading-snug text-content-primary">
                {item.title}
              </h3>

              <p className="mb-5 text-sm leading-6 text-content-secondary">{item.desc}</p>

              <span className="mt-auto text-sm font-semibold text-content-primary">{item.name}</span>
            </Motion.article>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
