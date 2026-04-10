import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Menu, MoveRight, X } from "lucide-react";
import videLogo from "../assets/vide-logo.png";
import { buildWhatsAppLink, WHATSAPP_QUOTE_MESSAGE } from "../lib/contact";
import { easeOutExpo } from "../lib/motion";

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

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={
        isScrolled
          ? "fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/92 shadow-[0_10px_35px_rgba(18,24,12,0.08)] backdrop-blur-xl transition-all duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-all duration-300"
      }
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex min-h-[82px] items-center justify-between gap-4 sm:min-h-[88px]">
          <a href="#inicio" className="flex shrink-0 items-center" onClick={closeMenu}>
            <img
              src={videLogo}
              alt="Vide Consultoria Agronômica"
              className={`h-12 w-auto transition-all duration-300 sm:h-14 lg:h-[72px] ${
                useLightLogo
                  ? "brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
                  : ""
              }`}
            />
          </a>

          <div
            className={
              isScrolled
                ? "hidden items-center rounded-full border border-border-soft bg-white/90 p-2 shadow-sm transition-all duration-300 lg:flex"
                : "hidden items-center rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur-sm transition-all duration-300 lg:flex"
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

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={buildWhatsAppLink(WHATSAPP_QUOTE_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-content-white transition-colors hover:bg-primary-hover"
            >
              Solicitar orçamento
            </a>
          </div>

          <button
            type="button"
            className={
              isScrolled
                ? "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-white text-content-primary transition-colors hover:border-primary hover:text-primary lg:hidden"
                : "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/10 lg:hidden"
            }
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <Motion.button
              type="button"
              aria-label="Fechar menu"
              className="fixed inset-0 top-[82px] z-40 bg-[#0f150d]/45 backdrop-blur-[2px] sm:top-[88px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: easeOutExpo }}
              onClick={closeMenu}
            />

            <Motion.div
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.985 }}
              transition={{ duration: 0.3, ease: easeOutExpo }}
              className="absolute inset-x-4 top-full z-50 mt-3 origin-top overflow-hidden rounded-[28px] border border-border-soft bg-white p-4 shadow-[0_28px_80px_rgba(16,21,13,0.22)] sm:inset-x-6 sm:p-5 lg:hidden"
            >
              <div className="rounded-[24px] bg-surface-secondary/70 p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between border-b border-black/6 pb-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Navegação
                    </p>
                    <p className="mt-1 text-sm text-content-secondary">
                      Acesse as seções do site com mais rapidez.
                    </p>
                  </div>

                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <Menu size={18} />
                  </span>
                </div>

                <div className="grid gap-2">
                  {navItems.map((item, index) => (
                    <Motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{
                        duration: 0.28,
                        delay: 0.04 * index,
                        ease: easeOutExpo,
                      }}
                      className="flex items-center justify-between rounded-[20px] bg-white px-4 py-3.5 text-sm font-semibold text-content-primary shadow-[0_8px_24px_rgba(16,21,13,0.06)] transition-colors hover:text-primary"
                    >
                      <span>{item.label}</span>
                      <MoveRight size={16} className="text-primary" />
                    </Motion.a>
                  ))}
                </div>

                <Motion.a
                  href={buildWhatsAppLink(WHATSAPP_QUOTE_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.28, delay: 0.18, ease: easeOutExpo }}
                  className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-content-white transition-colors hover:bg-primary-hover"
                >
                  Solicitar orçamento
                </Motion.a>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
