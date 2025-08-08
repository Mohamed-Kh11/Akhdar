import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: "tree-festival",
    title: "مهرجان زراعة الأشجار السنوي",
    subtitle: "احتفال بيئي لنشر المساحات الخضراء في أنحاء مصر",
    img: "https://i.imgur.com/m3oJIlo.jpeg",
  },
  {
    id: "plastic-cleanup",
    title: "جمع النفايات البلاستيكية من المياه",
    subtitle: "مبادرة وطنية لتنظيف نهر النيل والبحر الأحمر",
    img: "https://i.imgur.com/C0Ya6sE.jpeg",
  },
  {
    id: "wind-turbines",
    title: "مشروع التوربينات العملاقة في جبل الزيت",
    subtitle: "مستقبل الطاقة المتجددة في مصر",
    img: "https://i.imgur.com/CPqP4Ip.jpeg",
  },
];


export default function ArticleShowcase() {
  return (
    // Section with slightly textured background for depth
    <section className="w-full px-6 sm:px-8 lg:px-14 py-16 lg:py-20 font-['Noto_Kufi_Arabic'] bg-white">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-green-600 sm:text-4xl mb-4">
          استكشف أحدث مبادراتنا البيئية
        </h2>
        <p className="text-lg text-green-600 max-w-2xl mx-auto">
          تعرف على جهودنا المستمرة نحو مستقبل أكثر استدامة واخضرارًا في مصر.
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {articles.map((article, idx) => (
          <Link
            key={idx}
            href={`/articles/${article.id}`}
            className="group block bg-green-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl  dark:border-gray-700 "
          >
            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={article.img}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                priority={idx < 3}
              />
              {/* Subtle gradient at the bottom of the image */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/10 to-transparent "></div>
            </div>

            {/* Text Content Area */}
            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white  transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                {article.title}
              </h3>
              <p className="text-sm md:text-base text-white  line-clamp-3">
                {article.subtitle}
              </p>
              {/* Read More indicator */}
              <div className="mt-4 text-xs font-medium text-emerald-600 dark:text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                اقرأ المزيد &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
