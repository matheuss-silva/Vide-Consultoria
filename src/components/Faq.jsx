import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import faqImage from "../assets/hero-background.jpg";
import {
  fadeInUp,
  easeOutExpo,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../lib/motion";

const faqData = [
  {
    question: "Como funciona a consultoria?",
    answer:
      "O atendimento começa com a análise da propriedade, definição das prioridades e organização de um plano técnico com orientações práticas para o campo.",
  },
  {
    question: "Vocês atendem fora de Paraíso?",
    answer:
      "Sim. A base está em Paraíso do Tocantins, mas o atendimento pode ser realizado em outras regiões conforme a necessidade de acompanhamento.",
  },
  {
    question: "Quais áreas vocês acompanham?",
    answer:
      "A consultoria atua com manejo de pastagens, planejamento produtivo, orientação técnica no campo e apoio em demandas ambientais.",
  },
  {
    question: "Atendem pequenos produtores?",
    answer:
      "Sim. O atendimento é ajustado à estrutura da propriedade, ao momento do produtor e aos objetivos de cada operação.",
  },
  {
    question: "Como pedir um orçamento?",
    answer:
      "Você pode entrar em contato pelo site ou pelo WhatsApp. A partir disso, avaliamos a demanda e definimos a melhor proposta de atendimento.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 xl:px-12"
    >
      <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-stretch xl:gap-12">
        <Motion.div
          {...fadeInUp()}
          className="relative hidden min-h-[420px] overflow-hidden rounded-[2rem] xl:block xl:h-full"
        >
          <img
            src={faqImage}
            alt="Paisagem rural com rebanho em área de pastagem"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/10 bg-black/45 p-6 text-white backdrop-blur-md">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Atendimento próximo
            </span>

            <p className="max-w-sm text-[15px] leading-6 text-white/90">
              Orientação clara, acompanhamento técnico e foco no resultado da propriedade.
            </p>
          </div>
        </Motion.div>

        <Motion.div
          {...fadeInUp(0.08)}
          className="mx-auto flex w-full max-w-3xl flex-col justify-center xl:mx-0 xl:max-w-none"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Perguntas frequentes
          </span>

          <h2 className="max-w-[11ch] text-[2rem] font-bold leading-[1.02] text-content-primary sm:text-[2.4rem] md:max-w-[12ch] lg:text-[2.8rem] xl:text-[3rem]">
            Como funciona o atendimento
          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-content-secondary sm:text-base">
            Respostas rápidas sobre atendimento, áreas acompanhadas e orçamento.
          </p>

          <Motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="mt-8 flex flex-col gap-3 sm:mt-9"
          >
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <Motion.div
                  key={item.question}
                  variants={staggerItem(18)}
                  className={`overflow-hidden rounded-[1.4rem] border bg-white transition-all duration-300 sm:rounded-[1.5rem] ${
                    isOpen
                      ? "border-primary/20 shadow-[0_18px_40px_rgba(20,20,20,0.06)]"
                      : "border-border-soft"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="pr-2 text-[15px] font-semibold leading-6 text-content-primary sm:text-[17px]">
                      {item.question}
                    </h3>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-secondary text-primary sm:h-11 sm:w-11">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: easeOutExpo }}
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                          <p className="max-w-[58ch] text-[14px] leading-7 text-content-secondary sm:text-[15px]">
                            {item.answer}
                          </p>
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </Motion.div>
              );
            })}
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Faq;
