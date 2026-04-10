import React from "react";
import { motion as Motion } from "framer-motion";
import videLogo from "../assets/vide-logo.png";
import { easeOutExpo } from "../lib/motion";

const PageLoader = () => {
  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: easeOutExpo } }}
      className="fixed inset-0 z-[120] bg-surface-primary"
      aria-live="polite"
      aria-label="Carregando a página"
      role="status"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(141,187,46,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(247,248,244,1)_100%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="flex flex-col items-center text-center">
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
            className="rounded-[28px] border border-black/5 bg-white/70 px-7 py-6 shadow-[0_20px_50px_rgba(21,21,21,0.08)] backdrop-blur-md"
          >
            <img
              src={videLogo}
              alt="Vide Consultoria Agronômica"
              className="mx-auto h-16 w-auto"
            />

            <div className="mt-5 flex items-center justify-center gap-2">
              <Motion.span
                animate={{ opacity: [0.24, 1, 0.24] }}
                transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                className="h-2.5 w-2.5 rounded-full bg-primary"
              />
              <Motion.span
                animate={{ opacity: [0.24, 1, 0.24] }}
                transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, delay: 0.18 }}
                className="h-2.5 w-2.5 rounded-full bg-primary"
              />
              <Motion.span
                animate={{ opacity: [0.24, 1, 0.24] }}
                transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, delay: 0.36 }}
                className="h-2.5 w-2.5 rounded-full bg-primary"
              />
            </div>

            <p className="mt-4 text-sm font-medium tracking-[0.01em] text-content-secondary">
              Carregando a experiência
            </p>
          </Motion.div>
        </div>
      </div>
    </Motion.div>
  );
};

export default PageLoader;
