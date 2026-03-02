"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import TopNav from "../components/TopNav";
import { usePathname } from "next/navigation";
import { Menu, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erro ao enviar");
      setStatus({ ok: true, msg: "Pedido enviado com sucesso. Obrigado!" });
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus({ ok: false, msg: err.message || "Erro ao enviar" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Floating logo (outside nav) */}
      <div className="fixed top-3 left-6 z-40 hidden md:block">
        <Logo className="h-24 w-auto md:h-32" priority />
      </div>
      <TopNav />

      {/* Mobile dropdown */}
      {open && (
        <div className="px-6 sm:hidden">
          <div className="mt-2 ml-auto w-fit rounded-md border border-[#2E3E3B]/15 bg-white/60 p-3 text-sm shadow-sm space-y-2 text-right">
            <Link href="/" onClick={() => setOpen(false)} className="block hover:opacity-80">Início</Link>
                <Link href="/sobre-mim" onClick={() => setOpen(false)} className="block hover:opacity-80">Sobre Mim</Link>
            <Link href="/consultas" onClick={() => setOpen(false)} className="block hover:opacity-80">Consultas</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block hover:opacity-80">Contacto</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block hover:opacity-80">Blog</Link>
          </div>
        </div>
      )}

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pt-20 md:pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#B08E7A' }}>Marca a tua consulta</h2>
            <p className="opacity-80 mb-6">
              A primeira sessão é gratuita e online. Partilha os teus dados e
              disponibilidade; entrarei em contacto para alinharmos a proposta
              mais adequada à tua situação.
            </p>
            <ul className="space-y-2 opacity-90">
              <li>• Sessões online ou presenciais (sob consulta).</li>
              <li>• Duração típica: 50 minutos.</li>
              <li>• Idiomas: Português.</li>
            </ul>

            {/* Contactos diretos */}
            <div className="mt-6 space-y-2 text-[15px]">
              <a href="mailto:exemplo@dominio.com" className="inline-flex items-center gap-2 hover:opacity-80">
                <Mail className="w-4 h-4" /> exemplo@dominio.com
              </a>
              <br />
              <a href="tel:+351912345678" className="inline-flex items-center gap-2 hover:opacity-80">
                <Phone className="w-4 h-4" /> +351 912 345 678
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-[#2E3E3B]/10 shadow-sm p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Nome</label>
                <input name="nome" type="text" required className="w-full rounded-md border border-[#2E3E3B]/20 bg-white/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3E3B]/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input name="email" type="email" required className="w-full rounded-md border border-[#2E3E3B]/20 bg-white/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3E3B]/20" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Telefone (opcional)</label>
                  <input name="phone" type="tel" className="w-full rounded-md border border-[#2E3E3B]/20 bg-white/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3E3B]/20" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Data preferida</label>
                  <input name="date" type="date" required className="w-full rounded-md border border-[#2E3E3B]/20 bg-white/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3E3B]/20" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Hora (opcional)</label>
                  <input name="time" type="time" className="w-full rounded-md border border-[#2E3E3B]/20 bg-white/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3E3B]/20" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Assunto</label>
                <input name="subject" type="text" className="w-full rounded-md border border-[#2E3E3B]/20 bg-white/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3E3B]/20" />
              </div>
              <div>
                <label className="block text-sm mb-1">Mensagem</label>
                <textarea name="message" rows={5} className="w-full rounded-md border border-[#2E3E3B]/20 bg-white/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3E3B]/20" />
              </div>
              <button disabled={submitting} type="submit" className="mt-2 inline-flex items-center gap-2 bg-[#D49380] text-white px-6 py-3 rounded-full shadow-sm border border-[#2E3E3B]/10 hover:translate-y-[-1px] hover:shadow-md transition-all duration-200 hover:bg-[#c77c68] focus:outline-none focus:ring-2 focus:ring-[#2E3E3B]/20 disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? "A enviar..." : "Enviar pedido"}
              </button>
              {status && (
                <p className={`text-sm ${status.ok ? "text-emerald-700" : "text-red-700"}`}>{status.msg}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
