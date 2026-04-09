import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import TopNav from "../components/TopNav";
import { Check } from "lucide-react";

export default function SobreMimPage() {
  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Floating logo (outside nav) */}
      <div className="fixed top-3 left-6 z-40 hidden md:block">
        <Logo className="h-24 w-auto md:h-32" priority />
      </div>
      <TopNav />

      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-2 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#B08E7A]">
          Sobre Mim
        </h1>
        <p className="mt-3 text-base md:text-lg text-[#2E3E3B] opacity-80">
          A minha história, o meu caminho e o que me trouxe até aqui.
        </p>
        <div className="mt-6 flex justify-center">
          <svg
            width="140"
            height="16"
            viewBox="0 0 140 16"
            fill="none"
            aria-hidden
          >
            <path d="M2 8h48" stroke="#8C7A6B" strokeOpacity="0.45" />
            <path d="M90 8h48" stroke="#8C7A6B" strokeOpacity="0.45" />
            <path
              d="M70 2c3 2.5 5 4 5 6s-2 3.5-5 6c-3-2.5-5-4-5-6s2-3.5 5-6Z"
              fill="#B08E7A"
              fillOpacity="0.35"
            />
          </svg>
        </div>
      </section>

      {/* Intro two columns */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left: text */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#B08E7A]">
              O meu percurso pessoal
            </h2>
            <div className="space-y-4 leading-relaxed opacity-95">
              <p>
                Sou psicóloga e psicoterapeuta, trabalho com pessoas que sentem
                um apelo ao seu desenvolvimento pessoal, que firmam um
                compromisso com o seu bem-estar e sabem que o melhor
                investimento da sua vida é em si próprio.
              </p>
              <p>
                Acredito profundamente que cuidar de nós é um ato de consciência
                e amor‑próprio que transforma verdadeiramente a nossa vida.
              </p>
              <p>
                Quero ajudar‑te a encontrar o teu próprio caminho de paz
                interior, aceitação e realização, num espaço acolhedor e seguro.
              </p>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="md:pl-6">
            <div className="rounded-2xl overflow-hidden border border-[#2E3E3B]/10 shadow-sm bg-white/60">
              <div className="relative w-full pb-[125%]">
                <Image
                  src="/foto_pessoal.jpg"
                  alt="Fotografia de Liliana"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional path */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#B08E7A]">
          Percurso Profissional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formação */}
          <div className="rounded-xl border border-[#2E3E3B]/10 bg-[#2E3E3B]/5 shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3 text-[#B08E7A]">
              Formação
            </h3>
            <ul className="space-y-3 text-[15px]">
              <ListItem> Mestrado em Psicologia Clínica e da Saúde. </ListItem>
              <ListItem>
                {" "}
                Pós‑graduação em Terapia de Casal e Sexualidade.{" "}
              </ListItem>
              <ListItem>
                {" "}
                Formação em Mindfulness e Terapias Integrativas.{" "}
              </ListItem>
            </ul>
          </div>

          {/* Áreas de especialização */}
          <div className="rounded-xl border border-[#2E3E3B]/10 bg-[#2E3E3B]/5 shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-3 text-[#B08E7A]">
              Áreas de especialização
            </h3>
            <ul className="space-y-3 text-[15px]">
              <ListItem> Terapia individual </ListItem>
              <ListItem> Parentalidade e educação consciente </ListItem>
              <ListItem>
                {" "}
                Gestão de carreira e desenvolvimento pessoal{" "}
              </ListItem>
              <ListItem> Ansiedade, depressão e crescimento pessoal </ListItem>
            </ul>
          </div>
        </div>
      </section>

      {/* Commitment + CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <p className="text-xl md:text-2xl italic text-[#5C4A3F] opacity-95">
          O meu compromisso é oferecer um espaço seguro, ético e respeitador,
          onde possas sentir‑te verdadeiramente escutado(a).
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#8C7A6B] px-7 py-3 text-white shadow-sm border border-transparent hover:translate-y-[-1px] hover:shadow-md transition-all duration-200 hover:bg-[#7A6A5D]"
          >
            Agendar sessão
          </Link>
        </div>
      </section>
    </main>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 text-[#8C7A6B]" />
      <span className="opacity-90">{children}</span>
    </li>
  );
}
