import React, { useEffect, useRef, useState } from 'react';
import { Users, Leaf, CheckCircle, ClipboardList } from 'lucide-react';
import { motion as Motion, useInView } from 'framer-motion';

const metricsData = [
  {
    Icon: Users,
    title: 'Propriedades acompanhadas',
    description: 'Atendimento técnico com leitura da realidade da fazenda e foco em evolução prática.',
    value: 35,
  },
  {
    Icon: Leaf,
    title: 'Áreas com manejo orientado',
    description: 'Apoio voltado para uso eficiente do pasto, rotina produtiva e organização do sistema.',
    value: 18,
  },
  {
    Icon: CheckCircle,
    title: 'Planos e diagnósticos técnicos',
    description: 'Estratégias construídas para melhorar decisão, execução no campo e resultado do produtor.',
    value: 62,
  },
  {
    Icon: ClipboardList,
    title: 'Acompanhamentos em campo',
    description: 'Visitas e orientações técnicas realizadas com proximidade, clareza e responsabilidade.',
    value: 120,
  },
];

const CountUp = ({ value, start }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setDisplayValue(0);
      return;
    }

    let frameId;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [start, value]);

  return <>{displayValue.toLocaleString('pt-BR')}+</>;
};

const Metrics = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-surface-dark py-16 text-content-white texture-bg-dark"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/18 to-transparent" />

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 mx-auto max-w-6xl px-8 sm:px-10 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-8 divide-y divide-white/10 sm:grid-cols-2 sm:items-stretch sm:gap-0 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {metricsData.map((item, idx) => (
            <Motion.div
              key={item.title}
              variants={itemVariants}
              className={`flex h-full flex-col pt-6 sm:min-h-[248px] sm:pt-0 ${
                idx === 0 ? 'sm:pr-6 lg:pr-8' : ''
              } ${idx === 1 ? 'sm:pl-6 lg:px-8' : ''} ${idx === 2 ? 'lg:px-8' : ''} ${
                idx === 3 ? 'sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <item.Icon className="mb-4 text-primary" size={34} strokeWidth={1.7} />
              <h4 className="mb-2 text-lg font-semibold leading-snug text-content-white">
                {item.title}
              </h4>
              <p className="text-sm leading-6 text-white/62">{item.description}</p>

              <div className="mt-auto flex min-h-[56px] items-end pt-5 text-3xl font-bold tracking-tight tabular-nums text-content-white md:text-4xl">
                <CountUp value={item.value} start={isInView} />
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Metrics;
