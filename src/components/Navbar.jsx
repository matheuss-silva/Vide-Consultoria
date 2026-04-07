import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import videLogo from "../assets/vide-logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const useLightLogo = !isScrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        isScrolled
          ? "fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-xl transition-all duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-all duration-300"
      }
    >
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        <div className="flex min-h-[88px] items-center justify-between gap-4">
          <a
            href="#inicio"
            className="flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <img
              src={videLogo}
              alt="Vide Consultoria Agronômica"
              className={`h-14 w-auto transition-all duration-300 sm:h-16 lg:h-[72px] ${
                useLightLogo
                  ? "brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
                  : ""
              }`}
            />
          </a>

          <div
            className={
              isScrolled
                ? "hidden lg:flex items-center rounded-full border border-border-soft bg-white/85 p-2 shadow-sm transition-all duration-300"
                : "hidden lg:flex items-center rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur-sm transition-all duration-300"
            }
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  isScrolled
                    ? "rounded-full px-4 py-2 text-sm font-medium text-content-secondary transition-colors hover:bg-surface-secondary hover:text-primary"
                    : "rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-content-white transition-colors hover:bg-primary-hover"
            >
              Solicitar orçamento
            </a>
          </div>

          <button
            type="button"
            className={
              isScrolled
                ? "inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-soft bg-white text-content-primary transition-colors hover:border-primary hover:text-primary md:hidden"
                : "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/10 md:hidden"
            }
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border-soft bg-white/95 py-4 shadow-sm backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-content-primary transition-colors hover:bg-surface-secondary hover:text-primary"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-content-white transition-colors hover:bg-primary-hover"
                onClick={closeMenu}
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
