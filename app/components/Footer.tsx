import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#2E3E3B]/10 bg-[#E4E0DB]/80 text-[#8C7A6B]">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex items-center gap-6 text-sm md:text-[15px]" aria-label="Rodapé">
          <Link href="/" className="hover:opacity-80">Início</Link>
          <Link href="/sobre-mim" className="hover:opacity-80">Sobre Mim</Link>
          <Link href="/consultas" className="hover:opacity-80">Consultas</Link>
          <Link href="/contact" className="hover:opacity-80">Contacto</Link>
          <Link href="/blog" className="hover:opacity-80">Blog</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF size={18} /></a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={18} /></a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-6 text-xs opacity-70">
        © {new Date().getFullYear()} Liliana Pinto Pereira. Todos os direitos reservados.
      </div>
    </footer>
  );
}

