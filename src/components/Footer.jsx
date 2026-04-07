import React from 'react';
import videLogo from '../assets/vide-logo.png';

const Footer = () => {
  return (
    <footer
      className="border-t border-white/5 bg-surface-dark pt-12 pb-8 text-white/70 md:pt-14 md:pb-10"
      id="contato"
    >
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        <div className="mb-8 grid items-start gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-[1.5fr_0.9fr_1fr]">
          <div className="max-w-md">
            <a href="#inicio" className="inline-flex items-center">
              <img
                src={videLogo}
                alt="Vide Consultoria Agronômica"
                className="h-16 w-auto brightness-0 invert md:h-[72px]"
              />
            </a>

            <p className="mt-4 text-sm leading-7 text-white/72">
              Engenharia Agronômica com orientação prática e estratégica para fortalecer a
              produtividade, a organização da operação e a tomada de decisão no campo.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-content-white">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#inicio" className="text-sm transition-colors hover:text-primary">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm transition-colors hover:text-primary">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm transition-colors hover:text-primary">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm transition-colors hover:text-primary">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-content-white">
              Contato
            </h4>
            <ul className="flex flex-col gap-3 text-sm leading-7">
              <li>Paraíso do Tocantins e atendimento em todo o estado</li>
              <li>Orientação técnica personalizada</li>
              <li>Solicitações via formulário e WhatsApp</li>
              <li>CNPJ: 63.522.509/0001-14</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Vide Consultoria Agronômica. Todos os direitos reservados.
          </p>

          <a
            href="https://elevation-digital-jade.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-sm transition-colors hover:text-primary"
          >
            Desenvolvido por Elevation Digital.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
