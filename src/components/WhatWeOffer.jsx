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

const benefits = [
  {
    id: "01",
    title: "Mais produtividade por area",
    description:
      "Melhore o aproveitamento da pastagem e aumente o desempenho da operacao com planejamento tecnico.",
    Icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "02",
    title: "Reducao de perdas e desperdicios",
    description:
      "Identifique falhas de manejo, uso ineficiente de recursos e pontos que comprometem a rentabilidade.",
    Icon: BarChart3,
  },
  {
    id: "03",
    title: "Decisoes mais seguras no campo",
    description:
      "Tenha orientacao tecnica para planejar, corrigir e conduzir a producao com mais clareza.",
    Icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "04",
    title: "Melhor aproveitamento do pasto",
    description:
      "Estruture areas, piquetes e sistemas rotacionados para usar o potencial da propriedade com mais eficiencia.",
    Icon: Leaf,
  },
  {
    id: "05",
    title: "Acompanhamento tecnico proximo",
    description:
      "Conte com suporte personalizado, linguagem simples e atuacao alinhada a realidade do produtor.",
    Icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "06",
    title: "Mais controle da operacao",
    description:
      "Use indicadores e planejamento produtivo para entender melhor custos, desempenho e oportunidades de melhoria.",
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
              Beneficios
            </span>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.12] text-content-primary md:text-4xl lg:text-[48px]">
              Ganhos tecnicos que aumentam a eficiencia e a seguranca da sua
              producao
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
