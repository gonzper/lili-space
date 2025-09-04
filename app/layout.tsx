import "./globals.css";
import { Playfair_Display, Open_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-opensans",
});

export const metadata = {
  title: "Lili Space",
  description: "Site profissional de psicologia e terapia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${playfair.variable} ${openSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
