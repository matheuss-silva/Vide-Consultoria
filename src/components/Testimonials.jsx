import React from 'react';
import { Star } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const testimonialsData = [
  {
    title: 'Atendimento claro',
    desc: 'A consultoria trouxe mais segurança para decidir e ajustar a rotina da propriedade.',
    name: 'Clara Lima',
  },
  {
    title: 'Mais organização',
    desc: 'O planejamento ficou mais prático e fácil de aplicar no dia a dia do campo.',
    name: 'João Almeida',
  },
  {
    title: 'Visão técnica',
    desc: 'As orientações foram objetivas e ajudaram a enxergar melhorias com rapidez.',
    name: 'Sofia Oliveira',
  },
  {
    title: 'Acompanhamento próximo',
    desc: 'O suporte foi direto, acessível e alinhado com a realidade da nossa operação.',
    name: 'Marcos Dias',
  },
  {
    title: 'Resultado no campo',
    desc: 'O trabalho trouxe mais confiança para conduzir as ações e melhorar o manejo.',
    name: 'Olivia Branco',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-surface-secondary py-20">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-10 text-center text-3xl font-bold leading-tight text-content-primary md:text-4xl"
        >
          O que os clientes dizem sobre a Vide
        </Motion.h2>

        <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {testimonialsData.map((item, idx) => (
            <Motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.06 * idx, duration: 0.4 }}
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
