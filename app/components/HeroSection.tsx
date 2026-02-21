"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Allura } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { Menu } from "lucide-react";

// Fonte manuscrita
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Initialize from current hash
    if (typeof window !== "undefined") {
      const hash = window.location.hash?.replace("#", "");
      if (hash === "sobre" || hash === "servicos") setActive(hash);
    }

    // Observe sections visibility to update active link
    const ids = ["sobre", "servicos"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.4, 0.6, 0.8] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative h-screen flex flex-col">

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6b847b]/70" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full grid grid-cols-3 items-center px-6 md:px-8 py-6 text-white z-20">
        {/* Left: título reduzido */}
        <div className="z-20 flex items-center">
          <h1
            className={`${allura.className} text-3xl md:text-5xl drop-shadow-lg`}
            style={{ color: "#E4E0DB" }}
          >
            Liliana Pinto Pereira
          </h1>
        </div>

        {/* Centro: menu (desktop) */}
        <div className="hidden sm:flex justify-center space-x-8 text-base md:text-lg font-medium md:font-semibold z-20">
          <a
            href="/"
            className={`hover:text-gray-300 border-b-2 ${active === "sobre" ? "border-white/90" : "border-transparent"}`}
          >
            Início
          </a>
          <a href="/sobre-mim" className="hover:text-gray-300 border-b-2 border-transparent">Sobre Mim</a>
          <a
            href="#servicos"
            className={`hover:text-gray-300 border-b-2 ${active === "servicos" ? "border-white/90" : "border-transparent"}`}
          >
            Consultas
          </a>
          <a href="/contact" className="hover:text-gray-300 border-b-2 border-transparent">Contacto</a>
          <a href="/blog" className="hover:text-gray-300 border-b-2 border-transparent">Blog</a>
        </div>

        {/* Direita: redes sociais + menu mobile */}
        <div className="z-20 flex items-center justify-end gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebookF size={22} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram size={22} />
          </a>
          {/* Mobile compact menu */}
          <div className="sm:hidden">
            <button
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-3 py-2 backdrop-blur hover:bg-white/15 transition"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-[76px] right-6 sm:hidden z-20 rounded-md border border-white/10 bg-white/10 p-3 text-sm backdrop-blur shadow-md space-y-2 text-right">
          <a
            href="/"
            className={`block hover:text-gray-300 border-b ${active === "sobre" ? "border-white/80" : "border-transparent"}`}
            onClick={() => setMenuOpen(false)}
          >
            Início
          </a>
          <a href="/sobre-mim" className="block hover:text-gray-300 border-b border-transparent" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
          <a
            href="#servicos"
            className={`block hover:text-gray-300 border-b ${active === "servicos" ? "border-white/80" : "border-transparent"}`}
            onClick={() => setMenuOpen(false)}
          >
            Consultas
          </a>
          <a href="/contact" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contacto</a>
          <a href="/blog" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Blog</a>
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-stretch text-white px-6">
        <div className="mx-auto w-full max-w-3xl">
          {/* Parte 1: à esquerda */}
          <p className="tracking-wide text-sm md:text-base mb-4 text-left pl-4 md:pl-12">
          “Não existe um caminho para a felicidade,
          </p>

        {/* Partes 2 e 3 com/sem animação */}
        {shouldReduceMotion ? (
          <>
            {/* Parte 2: um degrau à direita */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-left pl-16 md:pl-32 mt-3">
              A felicidade é
            </h2>
            {/* Parte 3: mais um degrau */}
            <h2 className="text-4xl md:text-7xl font-bold leading-tight mt-1 text-left pl-24 md:pl-56">
              o caminho”
            </h2>
            <div className="pl-24 md:pl-56">
              <svg
                viewBox="0 0 480 30"
                className="mt-3 w-64 md:w-[32rem] h-6 text-white/80"
                aria-hidden
              >
                <path
                  d="M5 20 C 160 6, 320 35, 475 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="mt-2 text-xs italic opacity-90 text-left pl-24 md:pl-56">— Gandhi</p>
          </>
        ) : (
          <>
            {/* Parte 2: um degrau à direita (animação suave) */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold leading-tight text-left pl-16 md:pl-32 mt-3"
            >
              A felicidade é
            </motion.h2>
            {/* Parte 3: mais um degrau (animação e leve atraso) */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-bold leading-tight mt-1 text-left pl-24 md:pl-56"
            >
              o caminho”
            </motion.h2>
            <div className="pl-24 md:pl-56">
              <motion.svg
                viewBox="0 0 480 30"
                className="mt-3 w-64 md:w-[32rem] h-6 text-white/80"
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
              >
                <motion.path
                  d="M5 20 C 160 6, 320 35, 475 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.1, duration: 1.6, ease: "easeInOut" }}
                />
              </motion.svg>
            </div>
            <motion.p
              className="mt-2 text-xs italic opacity-90 text-left pl-24 md:pl-56"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              — Gandhi
            </motion.p>
          </>
        )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 px-6 pb-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="opacity-95 mb-4">
            Ofereço-te a primeira sessão, que será gratuita e online, na qual teremos a oportunidade de nos conhecermos e de concebermos a proposta de intervenção mais adequada à tua situação.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D49380] text-white px-6 py-3 rounded-full shadow-sm border border-white/10 hover:translate-y-[-1px] hover:shadow-md transition-all duration-200 hover:bg-[#c77c68] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Marca a tua consulta
          </Link>
        </div>
      </div>
    </section>
  );
}
