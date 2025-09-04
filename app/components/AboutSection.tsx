import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative bg-[#E4E0DB] text-[#2E3E3B] py-20 px-6 overflow-hidden">
      {/* subtle texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/background-texture.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold mb-10">Sobre mim</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-xl shadow-sm bg-white/30">
              {/* Enforce 4:5 portrait crop */}
              <div className="relative w-full pb-[125%]">
                <Image
                  src="/foto-lili.jpg"
                  alt="Fotografia de Liliana"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 text-left">
            <p className="opacity-90 leading-relaxed">
              Olá! Eu sou a Liliana ✨ Sempre senti uma enorme curiosidade em
              compreender quem somos e como podemos viver de forma mais plena e
              feliz. Essa busca levou-me a estudar Psicologia, a trabalhar em
              Portugal e em Moçambique, e a dedicar-me há mais de uma década ao
              acompanhamento de crianças e adultos.
            </p>
            <p className="opacity-90 leading-relaxed mt-4">
              Para além da psicologia e da psicoterapia, encontrei no Yoga um
              caminho profundo de equilíbrio e auto-conhecimento, que hoje
              integro na minha vida e no meu trabalho. Acredito que cada pessoa
              tem dentro de si os recursos para crescer, transformar-se e
              alcançar os seus objetivos — a minha missão é ajudar-te a
              descobri-los e a usá-los ao teu favor.
            </p>
            <p className="opacity-90 leading-relaxed mt-4">
              Reconhecida pela Ordem dos Psicólogos, Cédula Profissional nº52.
              Especialista em Psicologia Clínica e da Saúde e Especialista em
              Psicologia Social, do Trabalho e das Organizações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
