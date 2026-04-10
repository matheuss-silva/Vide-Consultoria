import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { CheckCircle, ClipboardList, Leaf, Users } from "lucide-react";
import { staggerContainer, staggerItem, viewportConfig } from "../lib/motion";

const metricsData = [
  {
    Icon: Users,
    title: "Propriedades acompanhadas",
    description:
      "Atendimento técnico com leitura da realidade da fazenda e foco em evolução prática.",
    value: 20,
    suffix: "+",
  },
  {
    Icon: Leaf,
    title: "Áreas com manejo orientado",
    description:
      "Apoio voltado para uso eficiente do pasto, rotina produtiva e organização do sistema.",
    value: 1500,
    suffix: "ha+",
  },
  {
    Icon: CheckCircle,
    title: "Planos e diagnósticos técnicos",
    description:
      "Estratégias construídas para melhorar decisão, execução no campo e resultado do produtor.",
    value: 62,
    suffix: "+",
  },
  {
    Icon: ClipboardList,
    title: "Acompanhamentos em campo",
    description:
      "Visitas e orientações técnicas realizadas com proximidade, clareza e responsabilidade.",
    value: 120,
    suffix: "+",
  },
];

const CountUp = ({ value, start, suffix = "+" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) {
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

  return (
    <>
      {displayValue.toLocaleString("pt-BR")}
      {suffix}
    </>
  );
};

const Metrics = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-surface-dark py-14 text-content-white texture-bg-dark sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/18 to-transparent" />

      <Motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportConfig}
        className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-0 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {metricsData.map((item, idx) => (
            <Motion.div
              key={item.title}
              variants={staggerItem(20)}
              className={`flex min-h-[208px] flex-col py-6 sm:min-h-[230px] sm:py-0 ${
                idx === 0 ? "sm:pr-5 lg:pr-8" : ""
              } ${idx === 1 ? "sm:pl-5 lg:px-8" : ""} ${idx === 2 ? "lg:px-8" : ""} ${
                idx === 3 ? "sm:pl-5 lg:pl-8" : ""
              }`}
            >
              <item.Icon className="mb-4 text-primary" size={30} strokeWidth={1.8} />

              <h4 className="mb-2 text-base font-semibold leading-6 text-content-white sm:text-lg sm:leading-snug">
                {item.title}
              </h4>

              <p className="text-[13px] leading-6 text-white/62 sm:text-sm">
                {item.description}
              </p>

              <div className="mt-auto flex min-h-[52px] items-end pt-5 text-[2rem] font-bold tracking-tight tabular-nums text-content-white sm:text-4xl">
                <CountUp value={item.value} start={isInView} suffix={item.suffix} />
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Metrics;
