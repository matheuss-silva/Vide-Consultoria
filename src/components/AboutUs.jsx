import React from 'react';
import { ShoppingCart, Leaf, Medal, Droplets } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import isabelaCardialImage from '../assets/isabela-cardial.jpeg';

const highlights = [
  { Icon: ShoppingCart, text: 'Entregando o melhor da\nnatureza todos os dias' },
  { Icon: Leaf, text: 'Práticas ecológicas\ne orgânicas' },
  { Icon: Medal, text: 'Confiável em qualidade\ne sustentabilidade' },
  { Icon: Droplets, text: 'Comprometidos com\no frescor e a pureza' },
];

const AboutUs = () => {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24 sm:px-10 lg:px-12" id="sobre">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)]">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl rounded-[2rem] py-2 lg:pt-6"
        >
          <span className="mb-5 block text-lg font-semibold uppercase tracking-[0.4em] text-primary md:text-xl">
            Sobre nós
          </span>
          <p className="max-w-xl text-sm leading-8 text-content-secondary sm:text-base md:text-lg md:leading-9">
            A Vide Consultoria Agronômica é conduzida por{' '}
            <span className="font-bold text-content-primary">Isabela Cardial</span>, Engenheira
            Agrônoma, Responsável Técnica e Fundadora da empresa. Com formação técnica em meio
            ambiente, pós-graduação em produção intensiva de gado de corte e experiência em
            consultoria agronômica, atuação em campo e projetos ambientais, desenvolve um trabalho
            pautado em orientação técnica clara, proximidade com o produtor e foco em resultado.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative mx-auto min-h-[320px] w-full max-w-[430px] overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#dfeedd_0%,#f7f8f4_100%)] sm:min-h-[380px] lg:mx-0 lg:ml-auto lg:min-h-[430px]"
        >
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[radial-gradient(circle_at_center,rgba(141,187,46,0.18),transparent_70%)]" />
          <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-white/40 blur-2xl" />
          <img
            className="relative z-10 h-full w-full object-cover [object-position:center_12%]"
            src={isabelaCardialImage}
            alt="Isabela Cardial em área de cultivo"
          />
        </Motion.div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {highlights.map((item, idx) => (
          <Motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.08 * idx }}
            whileHover={{ y: -5 }}
            className="flex flex-col gap-6 rounded-2xl bg-surface-secondary p-6 shadow-sm transition-all duration-300 hover:shadow-md md:min-h-[180px] md:p-8"
          >
            <item.Icon className="text-primary" size={32} strokeWidth={1.6} />
            <p className="whitespace-pre-line text-sm font-semibold leading-relaxed text-content-primary">
              {item.text}
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
