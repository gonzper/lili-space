import Link from "next/link";
import Logo from "../components/Logo";
import TopNav from "../components/TopNav";
import { Briefcase, Heart, Baby, Flower, Check } from "lucide-react";

export default function ConsultasPage() {
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
          Consultas de Psicoterapia
        </h1>
        <p className="mt-3 text-base md:text-lg text-[#2E3E3B] opacity-80">
          Um espaço seguro para escuta, compreensão e transformação.
        </p>
        <div className="mt-6 flex justify-center">
          <svg width="140" height="16" viewBox="0 0 140 16" fill="none" aria-hidden>
            <path d="M2 8h48" stroke="#8C7A6B" strokeOpacity="0.45" />
            <path d="M90 8h48" stroke="#8C7A6B" strokeOpacity="0.45" />
            <path d="M70 2c3 2.5 5 4 5 6s-2 3.5-5 6c-3-2.5-5-4-5-6s2-3.5 5-6Z" fill="#B08E7A" fillOpacity="0.35" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            icon={<Briefcase className="h-7 w-7" />}
            title="Gestão de carreira e desenvolvimento profissional"
            desc="Orientação para evolução profissional, resolução de bloqueios e ampliação de potencial."
            size="lg"
          />
          <ServiceCard
            icon={<Baby className="h-7 w-7" />}
            title="Parentalidade positiva e consciente"
            desc="Apoio na educação dos filhos, fortalecimento de vínculos, comunicação e práticas parentais saudáveis."
            size="lg"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Heart className="h-7 w-7" />}
            title="Terapia de casal e sexualidade"
            desc="Reforço da intimidade, resolução de conflitos e melhoria da comunicação para uma relação saudável e satisfatória."
          />
          <ServiceCard
            icon={<Heart className="h-7 w-7" />}
            title="Terapia individual"
            desc="Acompanhamento psicológico personalizado para lidar com ansiedade, depressão e desafios emocionais."
          />
          <ServiceCard
            icon={<Flower className="h-7 w-7" />}
            title="Mindfulness"
            desc="Práticas de atenção plena para reduzir o stress, promover o bem‑estar e o equilíbrio emocional."
          />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#B08E7A]">Como funciona o acompanhamento</h2>
        <ul className="mt-6 space-y-3 text-left inline-block">
          <ListItem> Sessão inicial de acolhimento </ListItem>
          <ListItem> Definição de objetivos </ListItem>
          <ListItem> Frequência adaptada à pessoa </ListItem>
          <ListItem> Confidencialidade garantida </ListItem>
        </ul>
        <p className="mt-10 text-xl md:text-2xl italic text-[#5C4A3F] opacity-95">
          Dar o primeiro passo é um ato de coragem.
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

function ServiceCard({
  icon,
  title,
  desc,
  size = "md",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  size?: "md" | "lg";
}) {
  return (
    <div className={`rounded-2xl border border-[#8C7A6B]/25 bg-[#2E3E3B]/5 ${size === 'lg' ? 'p-7' : 'p-6'} text-center shadow-sm`}>
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8C7A6B]/10 text-[#8C7A6B]">
        {icon}
      </div>
      <h3 className={`${size === 'lg' ? 'text-2xl' : 'text-xl'} font-semibold text-[#2E3E3B]`} style={{ fontFamily: 'var(--font-playfair)' }}>
        {title}
      </h3>
      <p className="mt-3 text-sm opacity-90 leading-relaxed">{desc}</p>
      <div className="mt-5">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full px-4 py-2 text-[#8C7A6B] border border-[#8C7A6B]/40 hover:bg-[#8C7A6B]/10"
        >
          Saber mais
        </Link>
      </div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-left">
      <Check className="mt-0.5 h-4 w-4 text-[#8C7A6B]" />
      <span>{children}</span>
    </li>
  );
}
