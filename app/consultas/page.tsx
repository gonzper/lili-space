import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import TopNav from "../components/TopNav";

export default function ConsultasPage() {
  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Floating logo (outside nav) */}
      <div className="fixed top-3 left-6 z-40 hidden md:block">
        <Logo className="h-24 w-auto md:h-32" priority />
      </div>
      <TopNav />

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
