import Image from 'next/image';
import one from '../images/trash.jpg';
import two from '../images/bus.jpg';
import three from '../images/grass.jpg';

const programs = [
  {
    image: one,
    title: 'التخلص الآمن من النفايات',
    description:
      'برنامج توعوي يهدف الى ارشاد اهل الارياف والقرى الى الطريقة الصحيحة للتخلص من النفايات دون الاضرار بالبيئة والمجتمع',
  },
  {
    image: two,
    title: 'تمويل صناعة 1000 حافلة كهربائية',
    description:
      'جمع المال لصناعة 1000 حافلة تعمل بالكهرباء لاستبدال الحافلات التقليدية',
  },
  {
    image: three,
    title: 'اعادة الغطاء النباتي للصعيد',
    description:
      'استرجاع الغطاء النباتي للاراضي الموجودة في الصعيد و ايقاف موجة التصحر',
  },
];

const Programs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-[130px] mb-[50px] font-['Noto_Kufi_Arabic']">
      <h1 className="text-green-700 text-4xl font-bold">البرامج الحالية</h1>
      <p className="mt-4 max-w-[80%] mb-14 font-medium text-center text-green-700 text-lg">
        نسعى من خلال برامجنا البيئية إلى تعزيز الوعي بأهمية الحفاظ على البيئة، حيث نعمل على زراعة الأشجار، وتنظيف الشواطئ، وإعادة التدوير، ونشر ثقافة استخدام الطاقة النظيفة مثل الشمسية والرياح. كما نُشرك المجتمع في حملات توعوية تهدف إلى بناء مستقبل أخضر ومستدام للأجيال القادمة.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-7 w-full max-w-[1200px]">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex flex-col  rounded-3xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02] cursor-pointer bg-green-700"
          >
            <div className="relative w-full h-48">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-3 items-center text-center bg-green-700">
              <h2 className="font-bold text-2xl text-white">
                {program.title}
              </h2>
              <p className="text-white text-sm">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
