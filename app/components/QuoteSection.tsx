export default function QuoteSection() {
  return (
    <section className="bg-[#6b847b] text-[#E4E0DB] py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-4xl md:text-6xl leading-tight">
          “Tu próprio, tanto quanto qualquer outro ser no universo,
          mereces o teu amor e o teu afecto.”
        </p>
        <p className="mt-4 text-sm italic opacity-90">— Buda</p>
        <div className="mt-3 flex justify-center" aria-hidden>
          <svg viewBox="0 0 300 20" className="w-40 h-4 text-[#E4E0DB]/70">
            <path
              d="M5 10 C 80 2, 220 18, 295 10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
