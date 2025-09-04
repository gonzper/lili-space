import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Allura } from "next/font/google";

// Fonte manuscrita
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col">
      {/* Background image */}
      <Image
        src="/691b3ec8-0ff3-4eba-9cd1-d02ce9232e33.png"
        alt="Flor de fundo"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6b847b]/70" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 text-white z-20">
        {/* Social icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Name + menu in center */}
        <div className="flex flex-col items-center space-y-3">
          <h1
            className={`${allura.className} text-3xl md:text-5xl drop-shadow-lg`}
            style={{ color: "#E4E0DB" }}
          >
            Liliana Pinto Pereira
          </h1>
          <div className="flex space-x-8 text-sm md:text-base">
            <a href="#sobre" className="hover:text-gray-300">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-gray-300">
              Serviços
            </a>
            <a href="#contacto" className="hover:text-gray-300">
              Contacto
            </a>
            <a href="#blog" className="hover:text-gray-300">
              Blog
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div className="w-10 md:w-16" />
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm md:text-base mb-4">
          "Não existe um caminho para a felicidade..."
        </p>
        <h2 className="text-3xl md:text-6xl font-bold leading-tight max-w-3xl">
          A felicidade é o caminho
        </h2>
      </div>
    </section>
  );
}
