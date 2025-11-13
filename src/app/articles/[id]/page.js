export const dynamic = 'force-dynamic';

import { notFound } from "next/navigation";
import Image from "next/image";

// Helper to get the base URL depending on environment
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;

// Load articles from JSON via public fetch
async function getArticles() {
  const res = await fetch(`${baseUrl}/data/articles.json`, {
    cache: 'no-cache',
  });

  if (!res.ok) throw new Error("Failed to load articles");

  return res.json();
}

export default async function ArticlePage({ params }) {
  const articles = await getArticles();
  const article = articles.find((a) => a.id === params.id);

  if (!article) return notFound();

  return (
    <main className="pt-[150px] px-6 sm:px-10 lg:px-32 py-12 font-['Noto_Kufi_Arabic'] bg-white text-right">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-6 leading-tight text-center">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-green-600 mb-8 text-center">
          {article.subtitle}
        </p>

        {/* Flex layout container for large screens */}
        <div className="lg:flex lg:flex-row lg:space-x-12 lg:mb-12">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full">
              <Image
                src={article.img}
                alt={article.title}
                width={800}  // Set a fixed width to control image size
                height={450} // Set a fixed height for consistent aspect ratio
                className="object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          </div>

          {/* Article Content Section */}
          <div className="lg:w-1/2 text-base sm:text-lg text-gray-800 leading-relaxed whitespace-pre-line bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
            {article.content}
          </div>
        </div>
      </div>
    </main>
  );
}
