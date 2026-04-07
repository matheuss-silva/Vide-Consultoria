import React from "react";
import { motion as Motion } from "framer-motion";
import {
  BarChart3,
  ClipboardCheck,
  Leaf,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from "lucide-react";
import maisResultadoPorHectareImage from "../assets/mais-resultado-por-hectare.jpg";
import decisoesTecnicasImage from "../assets/decisoes-tecnicas.jpeg";
import acompanhamentoTecnicoImage from "../assets/acompanhamento-tecnico.jpg";

const benefits = [
  {
    id: "01",
    title: "Mais resultado por hectare",
    description:
      "Com orientação técnica aplicada à sua realidade, sua área produz melhor, com uso mais eficiente dos recursos e foco em rentabilidade.",
    Icon: TrendingUp,
    image: maisResultadoPorHectareImage,
    imagePosition: "center center",
  },
  {
    id: "02",
    title: "Menos perdas, mais aproveitamento",
    description:
      "Reduza desperdícios no manejo, corrija gargalos da operação e aproveite melhor pasto, insumos e estrutura disponível.",
    Icon: BarChart3,
  },
  {
    id: "03",
    title: "Decisões técnicas com mais segurança",
    description:
      "Tenha mais clareza para decidir no campo com base em análise técnica, experiência prática e planejamento da propriedade.",
    Icon: ShieldCheck,
    image: decisoesTecnicasImage,
    imagePosition: "center center",
  },
  {
    id: "04",
    title: "Pastagens mais bem aproveitadas",
    description:
      "Melhore o uso do pasto ao longo do ano, com manejo mais eficiente, melhor resposta da área e suporte para decisões mais assertivas.",
    Icon: Leaf,
  },
  {
    id: "05",
    title: "Acompanhamento técnico de perto",
    description:
      "Conte com uma orientação próxima, prática e contínua para ajustar a operação, acompanhar resultados e evoluir com confiança.",
    Icon: ClipboardCheck,
    image: acompanhamentoTecnicoImage,
    imagePosition: "center center",
  },
  {
    id: "06",
    title: "Mais controle da operação",
    description:
      "Organize melhor sua rotina, acompanhe indicadores com mais clareza e tenha uma gestão mais segura da produção.",
    Icon: Sprout,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-24" id="servicos">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        <div className="mb-14 lg:mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl"
          >
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Benefícios
            </span>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.12] text-content-primary md:text-4xl lg:text-[48px]">
              Benefícios da orientação técnica no campo
            </h2>
          </Motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, idx) => {
            const isDarkText = idx % 2 === 1;
            const Icon = benefit.Icon;

            return (
              <Motion.article
                key={benefit.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.08 * idx, duration: 0.45 }}
                className={
                  isDarkText
                    ? "group min-h-[250px] rounded-[28px] border border-[#dfe9d4] bg-[#edf4e5] p-7 shadow-[0_14px_34px_rgba(70,93,29,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-[#f3f8ee] hover:shadow-[0_24px_60px_rgba(70,93,29,0.12)] lg:p-8"
                    : "group relative min-h-[250px] overflow-hidden rounded-[28px] border border-border-soft bg-white p-7 shadow-[0_14px_34px_rgba(21,21,21,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_24px_60px_rgba(21,21,21,0.08)] lg:p-8"
                }
              >
                {!isDarkText && benefit.image ? (
                  <>
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: benefit.imagePosition || "center center" }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,8,0.2)_0%,rgba(8,12,8,0.45)_38%,rgba(8,12,8,0.76)_100%)]" />
                  </>
                ) : null}

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        isDarkText
                          ? "text-[15px] font-semibold tracking-[0.16em] text-primary"
                          : "text-[15px] font-semibold tracking-[0.16em] text-white/90"
                      }
                    >
                      {benefit.id}
                    </span>
                    <span
                      className={
                        isDarkText
                          ? "flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black shadow-sm transition-transform duration-300 group-hover:scale-110"
                          : "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/18 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                      }
                    >
                      <Icon size={20} strokeWidth={2} />
                    </span>
                  </div>

                  <div className={isDarkText ? "mt-8" : "mt-auto pt-14"}>
                    <h3
                      className={
                        isDarkText
                          ? "max-w-[14ch] text-[22px] font-bold leading-[1.18] text-content-primary"
                          : "max-w-[14ch] text-[22px] font-bold leading-[1.18] text-white"
                      }
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className={
                        isDarkText
                          ? "mt-4 max-w-[34ch] text-sm leading-6 text-content-secondary"
                          : "mt-4 max-w-[34ch] text-sm leading-6 text-white/82"
                      }
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
