import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import { Allura } from 'next/font/google';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const allura = Allura({ subsets: ['latin'], weight: ['400'] });

export default function BlogPost({ params }) {
  const filePath = path.join(process.cwd(), 'posts', params.slug + '.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Top nav */}
      <nav className="w-full grid grid-cols-3 items-center px-6 md:px-8 py-6">
        {/* Left: smaller title */}
        <div className="flex items-center">
          <h1 className={`${allura.className} text-3xl md:text-5xl`} style={{ color: '#2E3E3B' }}>Liliana Pinto Pereira</h1>
        </div>
        {/* Center: menu */}
        <div className="hidden sm:flex justify-center space-x-8 text-base md:text-lg font-medium md:font-semibold">
          <Link href="/" className="hover:opacity-80 border-b-2 border-transparent">Início</Link>
          <Link href="/sobre-mim" className="hover:opacity-80 border-b-2 border-transparent">Sobre Mim</Link>
          <Link href="/#servicos" className="hover:opacity-80 border-b-2 border-transparent">Consultas</Link>
          <Link href="/contact" className="hover:opacity-80 border-b-2 border-transparent">Contacto</Link>
          <Link href="/blog" className="hover:opacity-80 border-b-2 border-[#2E3E3B]">Blog</Link>
        </div>
        {/* Right: social icons */}
        <div className="flex items-center justify-end gap-4 text-[#2E3E3B]">
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF size={20} /></a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={20} /></a>
        </div>
      </nav>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-16 prose prose-slate">
        <h1 className="!mb-2">{data.title}</h1>
        {data.date && <p className="!mt-0 !mb-6 text-sm opacity-70">{data.date}</p>}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </main>
  );
}
