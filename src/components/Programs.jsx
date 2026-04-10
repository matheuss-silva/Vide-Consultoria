import React from "react";
import { ArrowRight } from "lucide-react";
import { motion as Motion } from "framer-motion";
import consultoriaAgronomicaImage from "../assets/consultoria-agronomica-atual.png";
import planejamentoProdutivoImage from "../assets/planejamento-produtivo.png";
import projetosAgronomicosImage from "../assets/projetos-agronomicos.png";
import projetosAmbientaisImage from "../assets/projetos-ambientais.png";

const servicesData = [
  {
    title: "Consultoria\nAgronômica",
    desc: "Diagnóstico técnico e orientações práticas para lavouras, pastagens e rotina produtiva no campo.",
    image: consultoriaAgronomicaImage,
    imagePosition: "center center",
  },
  {
    title: "Planejamento\nProdutivo",
    desc: "Planejamento da propriedade para melhorar resultados, organizar a operação e usar melhor os recursos.",
    image: planejamentoProdutivoImage,
    imagePosition: "center center",
  },
  {
    title: "Projetos\nAgronômicos",
    desc: "Projetos técnicos para estruturar áreas, orientar o manejo e elevar a eficiência produtiva.",
    image: projetosAgronomicosImage,
    imagePosition: "center center",
  },
  {
    title: "Projetos\nAmbientais",
    desc: "Licenciamento, regularizações e adequações ambientais para dar mais segurança à propriedade.",
    image: projetosAmbientaisImage,
    imagePosition: "center center",
  },
];

const Programs = () => {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20 sm:px-10 lg:px-12">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.26em] text-primary">
          Nossos serviços
        </span>
        <h2 className="text-3xl font-bold leading-tight text-content-primary md:text-4xl lg:text-[48px]">
          Soluções agronômicas e ambientais para sua propriedade
        </h2>
      </Motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {servicesData.map((service, idx) => (
          <Motion.article
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.08 * idx, duration: 0.45 }}
            className={`group relative overflow-hidden rounded-[28px] border border-border-soft shadow-[0_14px_34px_rgba(21,21,21,0.06)] ${
              idx % 2 === 0 ? "lg:mt-0" : "lg:mt-10"
            }`}
          >
            <div className="relative h-[380px]">
              <img
                src={service.image}
                alt={service.title.replace("\n", " ")}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: service.imagePosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,6,0.06)_0%,rgba(7,10,6,0.28)_38%,rgba(7,10,6,0.82)_100%)]" />

              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <div className="mb-5">
                  <h3 className="whitespace-pre-line text-[28px] font-bold leading-[1.08] text-white drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[24ch] text-sm leading-6 text-white/84">
                    {service.desc}
                  </p>
                </div>

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
};

export default Programs;
