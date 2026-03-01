import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ConsultasPage() {
  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Floating logo (outside nav) */}
      <div className="fixed top-3 left-6 z-40">
        <Logo className="h-24 w-auto md:h-32" priority />
      </div>
      {/* Top nav (fixed) */}
      <nav className="fixed top-0 left-0 w-full grid grid-cols-3 items-center px-6 md:px-8 py-4 md:py-5 z-30 bg-[#E4E0DB]/90 backdrop-blur text-[#8C7A6B]" style={{ fontFamily: 'var(--font-playfair)' }}>
        {/* Left: empty to center menu uniformly */}
        <div className="flex items-center" />

        {/* Center: menu */}
        <div className="hidden sm:flex justify-center space-x-8 text-base md:text-lg font-medium md:font-semibold">
          <Link href="/" className="hover:opacity-80 border-b-2 border-transparent hover:border-[#8C7A6B]">Início</Link>
          <Link href="/sobre-mim" className="hover:opacity-80 border-b-2 border-transparent hover:border-[#8C7A6B]">Sobre Mim</Link>
          <Link href="/consultas" className="hover:opacity-80 border-b-2 border-[#8C7A6B]">Consultas</Link>
          <Link href="/contact" className="hover:opacity-80 border-b-2 border-transparent hover:border-[#8C7A6B]">Contacto</Link>
          <Link href="/blog" className="hover:opacity-80 border-b-2 border-transparent hover:border-[#8C7A6B]">Blog</Link>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center justify-end gap-4">
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF size={20} /></a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={20} /></a>
        </div>
      </nav>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: '#B08E7A' }}>Consultas</h2>
        <p className="opacity-90 leading-relaxed">
          Em breve vais encontrar aqui informação sobre as consultas, formatos e disponibilidade.
        </p>
      </section>
    </main>
  );
}
