'use client'

import dynamic from 'next/dynamic';

const CleanEnergy = () => {

  const NoSSRCarousel = dynamic(() => import('../components/MyCarousel'), { ssr: false });

  return (
    <div>
      <div className="flex flex-col items-center pt-[130px] min-h-screen px-6 md:px-14 text-green-700 text-center">
        <h1 className="text-4xl font-['Noto_Kufi_Arabic'] mb-6 font-bold">الطاقة النظيفة</h1>
        <p className="text-lg font-medium leading-relaxed max-w-[90%] font-['Noto_Kufi_Arabic']">
          الطاقة النظيفة هي مصادر الطاقة التي لا تنتج انبعاثات ضارة بالبيئة، وتعد من أهم الحلول لمواجهة تغير المناخ. 
          تشمل أبرز أنواعها: الطاقة الشمسية، وطاقة الرياح، والطاقة الكهرومائية، والوقود الحيوي. 
          في السنوات الأخيرة، شهد العالم تزايدًا ملحوظًا في اعتماد هذه المصادر، حيث توفر الطاقة الشمسية وحدها أكثر من 3% من إجمالي إنتاج الكهرباء العالمي، 
          بينما تغطي طاقة الرياح حوالي 7% وتزداد سنويًا. 
          في مصر، تسعى الدولة لرفع نسبة الطاقة المتجددة إلى 42% من مزيج الكهرباء بحلول عام 2035، 
          مع مشاريع ضخمة مثل محطة بنبان الشمسية التي تُعد من أكبر المشاريع في العالم. 
          يمثل التحول للطاقة النظيفة خطوة حاسمة نحو بيئة أكثر استدامة واقتصاد أخضر.
        </p>
        <div className='w-[87%] mt-[35px]'><NoSSRCarousel /></div>
      </div>
    </div>
  );
};

export default CleanEnergy;
