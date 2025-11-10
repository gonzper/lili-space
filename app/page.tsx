import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactCtaSection from "./components/ContactCtaSection";
import QuoteSection from "./components/QuoteSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <ServicesSection />
      <ContactCtaSection />
    </main>
  );
}
