import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "default" | "white";
  className?: string;
  priority?: boolean;
  href?: string;
  ariaLabel?: string;
};

export default function Logo({
  variant = "default",
  className = "",
  priority = false,
  href = "/",
  ariaLabel = "Ir para a página inicial",
}: LogoProps) {
  // Usar PNG transparente em todas as variantes
  const src = "/logo.png";
  return (
    <Link href={href} aria-label={ariaLabel} className="inline-flex items-center">
      <Image src={src} alt="Logótipo Liliana Pinto Pereira" width={1400} height={900} priority={priority} className={className} />
    </Link>
  );
}
