"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Menu } from "lucide-react";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const active = (p: string) =>
    p === "/blog" ? pathname?.startsWith("/blog") : pathname === p;

  return (
    <nav
      className="fixed top-0 left-0 w-full grid grid-cols-3 items-center px-6 md:px-8 py-4 md:py-5 z-30 bg-[#E4E0DB]/90 backdrop-blur text-[#8C7A6B]"
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      {/* Left: mobile menu button */}
      <div className="flex items-center">
        <div className="sm:hidden">
          <button
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-[#2E3E3B]/20 bg-[#2E3E3B]/10 px-3 py-2 hover:bg-[#2E3E3B]/15 transition"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Center: menu (desktop) */}
      <div className="hidden sm:flex justify-center space-x-8 text-base md:text-lg font-medium md:font-semibold">
        <Link href="/" className={`hover:opacity-80 border-b-2 ${active("/") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Início</Link>
        <Link href="/sobre-mim" className={`hover:opacity-80 border-b-2 ${active("/sobre-mim") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Sobre Mim</Link>
        <Link href="/consultas" className={`hover:opacity-80 border-b-2 ${active("/consultas") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Consultas</Link>
        <Link href="/contact" className={`hover:opacity-80 border-b-2 ${active("/contact") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Contacto</Link>
        <Link href="/blog" className={`hover:opacity-80 border-b-2 ${active("/blog") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Blog</Link>
      </div>

      {/* Right: socials */}
      <div className="flex items-center justify-end gap-4 text-[#2E3E3B]">
        <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF size={20} /></a>
        <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={20} /></a>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-[76px] right-6 sm:hidden z-20 rounded-md border border-[#2E3E3B]/15 bg-white/80 p-3 text-sm shadow-md space-y-2 text-right">
          <Link href="/" onClick={() => setOpen(false)} className={`block hover:opacity-80 border-b-2 ${active("/") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Início</Link>
          <Link href="/sobre-mim" onClick={() => setOpen(false)} className={`block hover:opacity-80 border-b-2 ${active("/sobre-mim") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Sobre Mim</Link>
          <Link href="/consultas" onClick={() => setOpen(false)} className={`block hover:opacity-80 border-b-2 ${active("/consultas") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Consultas</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className={`block hover:opacity-80 border-b-2 ${active("/contact") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Contacto</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className={`block hover:opacity-80 border-b-2 ${active("/blog") ? "border-[#8C7A6B]" : "border-transparent hover:border-[#8C7A6B]"}`}>Blog</Link>
        </div>
      )}
    </nav>
  );
}

