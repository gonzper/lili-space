import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export default function BlogPost({ params }) {
  const filePath = path.join(process.cwd(), 'posts', params.slug + '.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <main className="max-w-3xl mx-auto py-20 px-6 prose">
      <h1>{data.title}</h1>
      <p className="text-gray-600">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
