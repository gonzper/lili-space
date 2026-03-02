import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../components/Logo';
import TopNav from '../../components/TopNav';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function BlogPost({ params }) {
  const filePath = path.join(process.cwd(), 'posts', params.slug + '.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <main className="min-h-screen bg-[#E4E0DB] text-[#2E3E3B]">
      {/* Floating logo (outside nav) */}
      <div className="fixed top-3 left-6 z-40 hidden md:block">
        <Logo className="h-24 w-auto md:h-32" priority />
      </div>
      <TopNav />

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-16 prose prose-slate">
        <h1 className="!mb-2">{data.title}</h1>
        {data.date && <p className="!mt-0 !mb-6 text-sm opacity-70">{data.date}</p>}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </main>
  );
}
