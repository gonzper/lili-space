import Link from "next/link";
import { Allura } from "next/font/google";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const allura = Allura({ subsets: ["latin"], weight: ["400"] });

export default function SobreMimPage() {
  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Top nav (centered menu) */}
      <nav className="w-full grid grid-cols-3 items-center px-6 md:px-8 py-6">
        {/* Left: smaller title */}
        <div className="flex items-center">
          <h1 className={`${allura.className} text-3xl md:text-5xl`} style={{ color: "#2E3E3B" }}>
            Liliana Pinto Pereira
          </h1>
        </div>

        {/* Center: menu */}
        <div className="hidden sm:flex justify-center space-x-8 text-base md:text-lg font-medium md:font-semibold">
          <Link href="/" className="hover:opacity-80 border-b-2 border-transparent">Início</Link>
          <Link href="/sobre-mim" className="hover:opacity-80 border-b-2 border-[#2E3E3B]">Sobre Mim</Link>
          <Link href="/#servicos" className="hover:opacity-80 border-b-2 border-transparent">Consultas</Link>
          <Link href="/contact" className="hover:opacity-80 border-b-2 border-transparent">Contacto</Link>
          <Link href="/blog" className="hover:opacity-80 border-b-2 border-transparent">Blog</Link>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center justify-end gap-4">
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF size={20} /></a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={20} /></a>
        </div>
      </nav>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Sobre Mim</h2>
        {/* Conteúdo a preencher posteriormente */}
      </section>
    </main>
  );
}
