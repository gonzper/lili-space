"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize from current hash (only 'sobre')
    if (typeof window !== "undefined") {
      const hash = window.location.hash?.replace("#", "");
      if (hash === "sobre") setActive(hash);
    }

    // Observe only the 'sobre' section
    const ids = ["sobre"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
          )[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.4, 0.6, 0.8] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative h-screen flex flex-col">
      {/* Background (solid, sem imagem) */}
      <div className="absolute inset-0 bg-[#E4E0DB]" />

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full grid grid-cols-3 items-center px-6 md:px-8 py-4 md:py-5 text-[#8C7A6B] z-40 bg-[#E4E0DB]/90 backdrop-blur"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {/* Left: título reduzido */}
        <div className="z-20 flex items-center" />

        {/* Centro: menu (desktop) */}
        <div className="hidden sm:flex justify-center space-x-8 text-base md:text-lg font-medium md:font-semibold z-20">
          <a
            href="/"
            className={`hover:opacity-80 border-b-2 ${pathname === "/" ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
          >
            Início
          </a>
          <a
            href="/sobre-mim"
            className={`hover:opacity-80 border-b-2 ${pathname === "/sobre-mim" ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
          >
            Sobre Mim
          </a>
          <a
            href="/consultas"
            className={`hover:opacity-80 border-b-2 ${pathname === "/consultas" ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
          >
            Consultas
          </a>
          <a
            href="/contact"
            className={`hover:opacity-80 border-b-2 ${pathname === "/contact" ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
          >
            Contacto
          </a>
          <a
            href="/blog"
            className={`hover:opacity-80 border-b-2 ${pathname?.startsWith("/blog") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
          >
            Blog
          </a>
        </div>

        {/* Direita: redes sociais + menu mobile */}
        <div className="z-20 flex items-center justify-end gap-4">
          <a href="#" aria-label="Facebook" className="hover:opacity-80">
            <FaFacebookF size={22} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">
            <FaInstagram size={22} />
          </a>
          {/* Mobile compact menu */}
          <div className="sm:hidden">
            <button
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md border border-[#2E3E3B]/20 bg-[#2E3E3B]/10 px-3 py-2 hover:bg-[#2E3E3B]/15 transition"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-[76px] right-6 sm:hidden z-20 rounded-md border border-[#2E3E3B]/15 bg-white/80 p-3 text-sm shadow-md space-y-2 text-right">
          <a
            href="/"
            className={`block hover:opacity-80 border-b-2 ${pathname === "/" ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
            onClick={() => setMenuOpen(false)}
          >
            Início
          </a>
          <a
            href="/sobre-mim"
            className={`block hover:opacity-80 border-b-2 ${pathname === "/sobre-mim" ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
            onClick={() => setMenuOpen(false)}
          >
            Sobre Mim
          </a>
          <a
            href="/consultas"
            className={`block hover:opacity-80 border-b-2 ${pathname === "/consultas" ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
            onClick={() => setMenuOpen(false)}
          >
            Consultas
          </a>
          <a
            href="/contact"
            className={`block hover:opacity-80 border-b-2 ${pathname === "/contact" ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
          <a
            href="/blog"
            className={`block hover:opacity-80 border-b-2 ${pathname?.startsWith("/blog") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
        </div>
      )}

      {/* Hero content (logo + headline, subtexto, CTA e frase final) */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-start text-[#2E3E3B] px-6 pt-20 md:pt-24">
        <Logo className="w-auto h-56 sm:h-72 md:h-96 lg:h-[28rem]" priority />
        <div className="mt-1 md:mt-2 text-center max-w-none" style={{ fontFamily: 'var(--font-playfair)' }}>
          <h1
            className="text-4xl md:text-[44px] leading-tight md:leading-tight tracking-tight fade-subtle text-[#B08E7A] whitespace-normal md:whitespace-nowrap"
          >
            A <span className="text-[#8C7A6B]">vida</span> convida‑nos a ouvir o que <span className="text-[#8C7A6B]">sentimos</span> e a descobrir quem realmente <span className="text-[#8C7A6B]">somos</span>.
          </h1>
        </div>
        <div className="mt-auto w-full text-center pb-8 md:pb-12" style={{ fontFamily: 'var(--font-opensans)' }}>
          <p className="mx-auto text-base md:text-lg text-[#2E3E3B]/90 fade-subtle md:whitespace-nowrap">
            Acompanho pessoas no seu processo de autoconhecimento, equilíbrio emocional e crescimento consciente.
          </p>
          <p className="mx-auto mt-3 md:mt-4 text-base md:text-lg text-[#2E3E3B]/90 fade-subtle-2 md:whitespace-nowrap">
            Na psicoterapia, encontrarás clareza, confiança e presença para fazer escolhas conscientes e autênticas.
          </p>
          <div className="mt-6 md:mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#8C7A6B] px-6 md:px-7 py-3 text-white shadow-sm border border-transparent hover:translate-y-[-1px] hover:shadow-md transition-all duration-200 hover:bg-[#7A6A5D] focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/30"
            >
              Vem experimentar
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      {/* CTA removida nesta página */}
    </section>
  );
}
