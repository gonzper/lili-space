import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/Logo';
import TopNav from '../components/TopNav';
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
      <div className="fixed top-3 left-6 z-40 hidden md:block">
        <Logo className="h-24 w-auto md:h-32" priority />
      </div>
      <TopNav />

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
