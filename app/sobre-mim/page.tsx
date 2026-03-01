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
      <section className="mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-14 md:pb-16">
        {/* Bloco 1: texto à esquerda, foto à direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Olá,</h2>
            <div className="space-y-4 leading-relaxed opacity-95">
              <p>
                Sou psicóloga e psicoterapeuta, trabalho com pessoas que sentem um apelo ao seu desenvolvimento pessoal, 
                que firmam um compromisso com o seu bem-estar e sabem que o melhor investimento da sua vida é em si próprio.
              </p>
              <p>
                Mulher real, com tudo o que isso implica, e renasço todos os dias
                através da minha vulnerabilidade.
              </p>
              <p>
                Encontro o sagrado nas pequenas coisas e nos imprevistos que a
                vida me traz.
              </p>
            </div>
          </div>
          <div className="md:pl-6">
            <div className="rounded-2xl overflow-hidden border border-[#2E3E3B]/10 shadow-sm bg-white/40">
              <img
                src="/foto-lili-2.jpg"
                alt="Fotografia de Liliana"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2: foto à esquerda, texto à direita */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <div className="rounded-2xl overflow-hidden border border-[#2E3E3B]/10 shadow-sm bg-white/40">
              <img
                src="/foto-lili.jpg"
                alt="Liliana em ambiente exterior"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:pl-6">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">A minha História</h3>
            <div className="space-y-4 leading-relaxed opacity-95">
              <p>
                Nasci em Portugal, e desde cedo me descreveram como uma alma
                observadora e curiosa pelas pessoas e pelo mundo.
              </p>
              <p>
                Acredito que o autoconhecimento é um caminho e que a terapia
                pode ser um espaço seguro para cuidar, integrar e transformar.
              </p>
              <p className="font-medium">
                Esta página será atualizada com a minha biografia completa em breve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
