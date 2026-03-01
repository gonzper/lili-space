import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/Logo';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
    const { data } = matter(fileContent);
    return { slug: filename.replace('.md', ''), ...data };
  }).sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Floating logo (outside nav) */}
      <div className="fixed top-3 left-6 z-40">
        <Logo className="h-24 w-auto md:h-32" priority />
      </div>
      {/* Top nav (clean, centered menu) */}
      <nav className="fixed top-0 left-0 w-full grid grid-cols-3 items-center px-6 md:px-8 py-4 md:py-5 z-30 bg-[#E4E0DB]/90 backdrop-blur text-[#8C7A6B]" style={{ fontFamily: 'var(--font-playfair)' }}>
        {/* Left: empty to center menu uniformly */}
        <div className="flex items-center" />
        {/* Center: menu */}
        <div className="hidden sm:flex justify-center space-x-8 text-base md:text-lg font-medium md:font-semibold">
          <Link href="/" className="hover:opacity-80 border-b-2 border-transparent hover:border-[#8C7A6B]">Início</Link>
          <Link href="/sobre-mim" className="hover:opacity-80 border-b-2 border-transparent hover:border-[#8C7A6B]">Sobre Mim</Link>
          <Link href="/consultas" className="hover:opacity-80 border-b-2 border-transparent hover:border-[#8C7A6B]">Consultas</Link>
          <Link href="/contact" className="hover:opacity-80 border-b-2 border-transparent hover:border-[#8C7A6B]">Contacto</Link>
          <Link href="/blog" className="hover:opacity-80 border-b-2 border-[#8C7A6B]">Blog</Link>
        </div>
        {/* Right: social icons */}
        <div className="flex items-center justify-end gap-4 text-[#2E3E3B]">
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF size={20} /></a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={20} /></a>
        </div>
      </nav>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8" style={{ color: '#B08E7A' }}>Blog</h2>
        <ul className="divide-y divide-[#2E3E3B]/15">
          {posts.map((post) => (
            <li key={post.slug} className="py-5">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="text-2xl font-semibold hover:opacity-80">{post.title}</div>
                {post.date && (
                  <div className="text-sm opacity-70 mt-1">{post.date}</div>
                )}
              </Link>
            </li>
          ))}
          {posts.length === 0 && (
            <li className="py-8 opacity-70">Ainda não existem publicações.</li>
          )}
        </ul>
      </section>
    </main>
  );
}
