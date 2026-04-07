import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import faqImage from "../assets/hero-background.jpg";

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
      className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-12">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] min-h-[380px] lg:h-full"
        >
          <img
            src={faqImage}
            alt="Paisagem rural com rebanho em área de pastagem"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

          <div className="absolute left-4 right-4 bottom-4 rounded-[1.5rem] border border-white/10 bg-black/45 p-5 text-white backdrop-blur-md sm:left-6 sm:right-6 sm:bottom-6 sm:p-6">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Atendimento próximo
            </span>

            <p className="max-w-sm text-sm leading-6 text-white/90 sm:text-[15px]">
              Orientação clara, acompanhamento técnico e foco no resultado da
              propriedade.
            </p>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Perguntas frequentes
          </span>

          <h2 className="max-w-[10ch] text-[2.1rem] font-bold leading-[1.02] text-content-primary sm:text-[2.6rem] lg:text-[3rem]">
            Como funciona o atendimento
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-content-secondary sm:text-base">
            Respostas rápidas sobre atendimento, áreas acompanhadas e orçamento.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-[1.5rem] border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-primary/20 shadow-[0_18px_40px_rgba(20,20,20,0.06)]"
                      : "border-border-soft"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="pr-2 text-[16px] font-semibold leading-6 text-content-primary sm:text-[17px]">
                      {item.question}
                    </h3>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-secondary text-primary">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <p className="max-w-[58ch] text-[15px] leading-7 text-content-secondary">
                            {item.answer}
                          </p>
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Faq;
