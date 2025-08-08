import Image from "next/image";
import backGround from "./images/compressed.webp";
import Btn from "./components/Button";
import Statistics from "./components/stats";
import Phone from "./components/Phone";
import ArticleShowcase from "./components/articles";
import Newsletter from "./components/newsLetter";
import Fact from "./components/Fact";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="relative h-screen w-full flex justify-center">
      <div className="absolute h-screen w-full"><Image src={backGround} alt="environment" fill className="object-cover -z-10" priority />
      <span className="absolute bg-black w-full h-full z-10 opacity-50"></span>
      </div>

      <div dir="rtl" className="absolute flex flex-col gap-5 items-center justify-center h-full z-40 font-['Noto_Kufi_Arabic'] text-center">
        <div>
        <span className="text-[50px] gradient font-bold ">&quot;أَخْضَر&quot;</span>
        <h1 className="text-white text-2xl md:text-4xl font-bold ">لأن مجتمعنا يستحق.</h1>
        </div>
        
        <p className="text-white w-10/12 lg:w-2/5">معًا نحو مستقبل أكثر اخضرارًا. نسعى في &quot;أخضر&quot; إلى نشر الوعي البيئي وتشجيع استخدام الطاقة النظيفة، من أجل حماية بيئتنا والحفاظ على موارد مصر الطبيعية للأجيال القادمة.</p>
        <Btn url={'/details'} text={'اعرف أكثر'}/>
      </div>
      </div>

      <Statistics/>
      <Phone/>
      <ArticleShowcase/>
      <Fact/>
      <Newsletter/>

    </div>
  );
}
