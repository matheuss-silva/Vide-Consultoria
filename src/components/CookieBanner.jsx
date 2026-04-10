import { useState } from "react";

const COOKIE_CONSENT_KEY = "vide-cookie-consent";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(COOKIE_CONSENT_KEY) !== "accepted";
  });

  const handleAccept = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handlePrivacyClick = (event) => {
    event.preventDefault();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[720px] rounded-[18px] bg-white px-5 py-5 text-content-primary shadow-[0_18px_44px_rgba(0,0,0,0.24)] sm:px-6">
        <p className="max-w-3xl text-sm leading-6 text-content-primary/85 sm:text-[15px]">
          Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua
          experiência em nosso site. Ao navegar neste site, você concorda com tal
          monitoramento. Conheça nossa{" "}
          <a
            href="#"
            onClick={handlePrivacyClick}
            className="font-medium text-content-primary underline decoration-content-primary/60 underline-offset-4 transition-colors hover:text-primary"
          >
            Política de Privacidade.
          </a>
        </p>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex min-w-40 items-center justify-center rounded-lg bg-[#9DF000] px-5 py-2.5 text-xs font-semibold tracking-[0.04em] text-content-primary transition-transform hover:-translate-y-0.5 hover:bg-[#93e100] sm:text-sm"
          >
            ESTOU CIENTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
