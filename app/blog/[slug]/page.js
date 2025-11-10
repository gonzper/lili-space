import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import { Allura } from 'next/font/google';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const allura = Allura({ subsets: ['latin'], weight: ['400'] });

export default function BlogPost({ params }) {
  const filePath = path.join(process.cwd(), 'posts', params.slug + '.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Top nav */}
      <nav className="w-full flex justify-between items-start px-6 md:px-8 py-6">
        <div className="flex flex-col items-start gap-2">
          <h1 className={`${allura.className} text-4xl md:text-6xl`} style={{ color: '#2E3E3B' }}>Liliana Pinto Pereira</h1>
          <div className="flex space-x-4 pt-1">
            <a href="#" aria-label="Facebook" className="hover:opacity-70"><FaFacebookF size={22} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70"><FaLinkedinIn size={22} /></a>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="hidden sm:flex space-x-8 text-base md:text-lg font-medium md:font-semibold">
            <Link href="/#sobre" className="hover:opacity-80 border-b-2 border-transparent">Sobre</Link>
            <Link href="/#servicos" className="hover:opacity-80 border-b-2 border-transparent">Serviços</Link>
            <Link href="/contact" className="hover:opacity-80 border-b-2 border-transparent">Contacto</Link>
            <Link href="/blog" className="hover:opacity-80 border-b-2 border-[#2E3E3B]">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 pb-16 prose prose-slate">
        <h1 className="!mb-2">{data.title}</h1>
        {data.date && <p className="!mt-0 !mb-6 text-sm opacity-70">{data.date}</p>}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </main>
  );
}
