import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Allura } from 'next/font/google';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const allura = Allura({ subsets: ['latin'], weight: ['400'] });

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
      {/* Top nav (clean, minimal) */}
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
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Blog</h2>
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
