import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ContactCtaSection = () => {
  return (
    <section id="contacto" className="bg-[#2E3E3B] text-white py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Pronto para começar?</h2>
        <p className="opacity-90 mb-8">
          Entre em contacto para marcar uma sessão ou esclarecer dúvidas.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#D49380] text-white px-6 py-3 rounded-full shadow-sm border border-white/10 hover:translate-y-[-1px] hover:shadow-md transition-all duration-200 hover:bg-[#c77c68] focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Contactar
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default ContactCtaSection;

