// app/page.tsx

import { Facebook, Linkedin } from 'lucide-react';
import { StaticFlower } from './components/StaticFlower';

export default function WellnessPage() {
  return (
    // SUAS ALTERAÇÕES MANTIDAS: Opacidade em /90
    <div className="bg-sage/90 text-white min-h-screen overflow-hidden relative">
      <header className="absolute top-0 left-0 w-full z-20 p-6 md:p-8">
        <div className="container mx-auto flex justify-between items-center relative h-24">
          
          <div className="hidden md:flex items-center space-x-5">
            <a href="#" aria-label="Página do Facebook" className="hover:opacity-80 transition-opacity">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Página do LinkedIn" className="hover:opacity-80 transition-opacity">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center">
            {/* SUA ALTERAÇÃO MANTIDA: Título personalizado */}
            <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em]">
              LILIANA PINTO PEREIRA
            </h1>
          </div>

          <div className="flex items-center">
            {/* NOVA ALTERAÇÃO: Botão traduzido */}
            <button className="bg-white text-gray-800 px-5 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors">
              Trabalhe Comigo
            </button>
          </div>
        </div>
        
        <nav className="absolute left-1/2 top-28 -translate-x-1/2 hidden md:block">
          {/* NOVA ALTERAÇÃO: Menu simplificado e traduzido */}
          <ul className="flex items-center space-x-8 text-base font-light">
            <li><a href="#" className="hover:underline">Sobre</a></li>
            <li><a href="#" className="hover:underline">Serviços</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="relative h-screen">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-center w-full px-4 pt-10 z-10">
          {/* SUAS ALTERAÇÕES MANTIDAS: Citação personalizada */}
          <p className="text-lg md:text-xl tracking-widest font-light mb-4">
            "NÃO EXISTE UM CAMINHO PARA A FELICIDADE...
          </p>
          <h2 className="text-4xl md:text-6xl tracking-wider font-light leading-tight">
            A FELICIDADE 
            <br/>
            É O CAMINHO"
          </h2>
        </div>

        <div className="absolute bottom-0 w-full h-3/5 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            // SUA ALTERAÇÃO MANTIDA: Imagem de fundo comentada
            // style={{ backgroundImage: "url('/wellness-hero.jpg')" }} 
          >
          </div>
        </div>

        <StaticFlower />

      </main>
    </div>
  );
}