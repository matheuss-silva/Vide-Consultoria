import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-white/70 py-16 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="text-3xl font-semibold text-content-white leading-none">
                Vide
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.28em] text-primary">
                Consultoria Agronomica
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Atuacao tecnica voltada para produtividade, planejamento e
              seguranca nas decisoes do produtor.
            </p>
          </div>

          <div>
            <h4 className="text-content-white font-semibold mb-6">
              Nossos Servicos
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors text-sm">
                  Gestao de Pastagens
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors text-sm">
                  Nutricao Animal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors text-sm">
                  Planejamento Produtivo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors text-sm">
                  Consultoria Ambiental
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-content-white font-semibold mb-6">Companhia</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#sobre"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Sobre Nos
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Nossos Produtos
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Programas
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-primary transition-colors text-sm"
                >
                  FAQ e Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-content-white font-semibold mb-6">Contato</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm">Paraiso do Tocantins e todo o estado</li>
              <li className="text-sm">Atendimento com acompanhamento tecnico</li>
              <li className="text-sm">Solicitacoes via contato e WhatsApp</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            (c) {new Date().getFullYear()} Vide Consultoria Agronomica. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors text-sm">
              Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
