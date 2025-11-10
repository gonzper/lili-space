"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServicesSection: FC = () => {
  const services = [
    {
      title: "TERAPIA",
      image: "/wellness-hero.jpg",
      text: "Apoio psicológico e psicoterapia focados em mudanças sustentadas e bem‑estar.",
    },
    {
      title: "MINDFULNESS",
      image: "/wellness-hero.jpg",
      text: "Prática de presença e regulação emocional para um dia‑a‑dia com mais calma.",
    },
    {
      title: "COACHING",
      image: "/coaching.jpeg",
      text: "Clareza de objetivos, plano de ação e acompanhamento para desbloquear o seu potencial.",
    },
    {
      title: "YOGA",
      image: "/yoga.jpeg",
      text: "Movimento consciente, respiração e alinhamento para corpo e mente em equilíbrio.",
    },
  ];

  const shouldReduceMotion = useReducedMotion();

  const container = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.08 },
        },
      };

  const item = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      };

  return (
    <section id="servicos" className="bg-[#E4E0DB] text-[#2E3E3B] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif uppercase text-4xl md:text-6xl tracking-wide text-center mb-16">Serviços</h2>

        <div className="space-y-24">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              variants={item as any}
              initial={shouldReduceMotion ? undefined : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
            >
              {/* Image */}
              <div
                className={
                  "md:col-span-7 " + (index % 2 === 1 ? "md:order-2" : "")
                }
              >
                <div className="overflow-hidden rounded-2xl bg-white/40 shadow-sm">
                  <div className="relative w-full pb-[70%]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 55vw, 100vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div
                className={
                  "md:col-span-5 " + (index % 2 === 1 ? "md:order-1" : "")
                }
              >
                <h3 className="font-serif uppercase text-3xl md:text-5xl leading-tight">
                  {s.title}
                </h3>
                <div className="w-16 h-[2px] bg-[#2E3E3B]/60 rounded-full my-4" />
                <p className="opacity-80 leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#D49380] text-white px-6 py-3 rounded-full shadow-sm border border-black/5 hover:translate-y-[-1px] hover:shadow-md transition-all duration-200 hover:bg-[#c77c68] focus:outline-none focus:ring-2 focus:ring-black/10"
            aria-label="Ver detalhes dos serviços"
          >
            Ver detalhes dos serviços
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
