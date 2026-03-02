import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import TopNav from "../components/TopNav";

export default function SobreMimPage() {
  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Floating logo (outside nav) */}
      <div className="fixed top-3 left-6 z-40 hidden md:block">
        <Logo className="h-24 w-auto md:h-32" priority />
      </div>
      <TopNav />

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-14 md:pb-16">
        {/* Bloco 1: texto à esquerda, foto à direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#B08E7A' }}>Olá,</h2>
            <div className="space-y-4 leading-relaxed opacity-95">
              <p>
                Sou psicóloga e psicoterapeuta, trabalho com pessoas que sentem
                um apelo ao seu desenvolvimento pessoal, que firmam um
                compromisso com o seu bem-estar e sabem que o melhor
                investimento da sua vida é em si próprio.
              </p>
              <p>
                Ao longo de mais de duas décadas de prática clínica e de
                acompanhamento humano, tenho caminhado ao lado de pessoas em
                momentos de transição, dúvida, cansaço emocional ou perda de
                sentido. Acredito que a psicologia é, antes de tudo, um espaço
                de encontro: consigo, com a sua história, com as suas emoções e
                com aquilo que pede para ser escutado.
              </p>
              <p>
                O meu trabalho assenta numa presença atenta, numa escuta
                profunda e numa relação de confiança onde é possível abrandar,
                compreender e transformar. Mais do que “resolver problemas”,
                procuro ajudar cada pessoa a ganhar clareza, a reconectar-se com
                os seus recursos internos e a encontrar formas mais conscientes
                e alinhadas de viver.
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
            <h3 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: '#B08E7A' }}>
              Especialista em Psicologia Clínica e da Saúde e em Psicologia do
              Trabalho e das Organizações.
            </h3>
            <div className="space-y-4 leading-relaxed opacity-95">
              <p>
                Sou licenciada em Psicologia Clínica, pós-graduada em
                Psicoterapia Centrada no Cliente, realizei formação na área da
                parentalidade, do mindfulness, do coaching e da gestão.
              </p>
              <p>
                Desde 2003 que trabalho como psicóloga, aprendendo e ensinando a
                arte de viver a pessoas de diferentes idades e culturas. Após a
                conclusão da minha licenciatura vivi um ano em Moçambique, onde
                trabalhei no Hospital público. Exerço psicologia clínica há 20
                anos, dando consultas em clínicas privadas, ao longo da minha
                carreira trabalhei ainda como coordenadora de projetos sociais,
                fui formadora na área comportamental e do desenvolvimento de
                competências sócio-emocionais (gestão emocional e comunicação).
                Estive uma década ao serviço da Ordem dos Psicólogos, tendo
                trabalhado na área da formação, na gestão de estágios
                profissionais e gestão de carreira. Fiz especialização em
                Psicoterapia Centrada na Pessoa (Humanista).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3: texto (sem imagem) */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-6 md:pt-10">
        <div className="space-y-4 leading-relaxed opacity-95">
          <p>
            A intervenção psicológica que realizo é fruto da minha diversificada
            experiência profissional e continuada formação. Inspiro-me nas
            correntes humanistas e transpessoais, utilizando técnicas da
            psicoterapia, do mindfulness, da inteligência emocional e do
            coaching. A minha abordagem baseia-se em facilitar o processo de
            auto-conhecimento do cliente, sustentando o processo individual de
            crescimento pessoal e apoiando a pessoa na definição de estratégias
            práticas para alcançar os seus objetivos, promovendo uma maior
            qualidade de vida. Acredito que cada pessoa é única e possui os
            recursos internos necessários para ser feliz, na minha visão, o
            psicólogo é o catalisador da mudança que o cliente deseja ver
            acontecer na sua vida.
          </p>
          <p>
            Sou mãe, dou aulas de yoga e meditação há mais de uma década, quando
            tenho algum tempo disponível adoro contemplar a natureza, ler e
            fazer jardinagem, sempre que tenho oportunidade viajo pelo mundo.
          </p>
        </div>
      </section>
    </main>
  );
}
