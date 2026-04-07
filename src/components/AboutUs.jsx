import React from "react";
import { Briefcase, Leaf, Medal, ShieldCheck } from "lucide-react";
import { motion as Motion } from "framer-motion";
import isabelaCardialImage from "../assets/isabela-cardial.jpeg";

const highlights = [
  { Icon: Briefcase, text: "Soluções pensadas para o campo" },
  { Icon: Leaf, text: "Mais clareza na operação" },
  { Icon: Medal, text: "Planejamento para produzir melhor" },
  { Icon: ShieldCheck, text: "Acompanhamento técnico contínuo" },
];

const AboutUs = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-8 py-24 sm:px-10 lg:px-12"
      id="sobre"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(310px,0.82fr)] lg:gap-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl rounded-[2rem] py-2 lg:pt-6"
        >
          <span className="mb-5 block text-lg font-semibold uppercase tracking-[0.4em] text-primary md:text-xl">
            Sobre nós
          </span>
          <p className="max-w-xl text-sm leading-8 text-content-secondary sm:text-base md:text-lg md:leading-9">
            A Vide Consultoria Agronômica é conduzida por{" "}
            <span className="font-bold text-content-primary">
              Isabela Cardial
            </span>
            , Engenheira Agrônoma, Responsável Técnica e Fundadora da empresa.
            Com formação técnica em meio ambiente, pós-graduação em produção
            intensiva de gado de corte e experiência em consultoria agronômica,
            atuação em campo e projetos ambientais, desenvolve um trabalho
            pautado em orientação técnica clara, proximidade com o produtor e
            foco em resultado.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative mx-auto h-[360px] w-full max-w-[400px] overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#dfeedd_0%,#f7f8f4_100%)] sm:h-[410px] lg:mx-0 lg:ml-auto lg:h-[490px]"
        >
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_center,rgba(141,187,46,0.18),transparent_70%)]" />
          <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-white/35 blur-2xl" />
          <img
            className="relative z-10 h-full w-full object-cover"
            style={{ objectPosition: "center 4%" }}
            src={isabelaCardialImage}
            alt="Isabela Cardial em área de cultivo"
          />
        </Motion.div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item, idx) => (
          <Motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.08 * idx }}
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 rounded-2xl bg-surface-secondary px-5 py-4 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
              <item.Icon size={22} strokeWidth={1.8} />
            </span>
            <p className="text-sm font-semibold leading-6 text-content-primary">
              {item.text}
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
