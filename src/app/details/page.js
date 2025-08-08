import Image from "next/image";
import earth from "../images/earth.webp";

const Details = () => {
  return (
    <div>
      <div className="flex min-h-screen pt-[130px] mb-[45px] md:gap-6 text-green-800 px-7 md:px-14 flex-col lg:flex-row items-center justify-center font-['Noto_Kufi_Arabic']">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold mb-4">قصة أخضر</h1>
          <p className="text-lg leading-relaxed">
            تأسست منصة <strong>أخضر</strong> في عام <strong>2023</strong> بهدف
            نشر الوعي البيئي بين المصريين وتعزيز ثقافة الاستدامة. بدأنا كمجتمع
            صغير يهتم بزراعة الأشجار وتنظيف الشواطئ، واليوم أصبحنا حركة متنامية
            تضم الآلاف من المتطوعين عبر جميع محافظات مصر.
          </p>
          <p className="text-lg leading-relaxed">
            تعمل أخضر على تنفيذ مشاريع مبتكرة مثل إعادة تدوير النفايات في
            المجتمعات المحلية، وتشجيع استخدام الطاقة النظيفة، وتنظيم حملات
            تعليمية في المدارس والجامعات عن أهمية حماية البيئة.
          </p>
          <p className="text-lg leading-relaxed">
            هدفنا هو الوصول إلى <strong>مليون شجرة</strong> مزروعة بحلول عام
            <strong>2030</strong>، وتقليل البصمة الكربونية للأفراد والمؤسسات
            عبر برامج توعية وتطبيقات ذكية تساعد على قياس وتحسين السلوك البيئي.
          </p>
          <p className="text-lg leading-relaxed">
            انضم إلينا في رحلتنا نحو بيئة أكثر خضرة، وكن جزءًا من التغيير
            الإيجابي في مصر.
          </p>
        </div>
        <div className="w-11/12 md:w-2/3 lg:w-1/3 mt-10 lg:mt-0 rounded-ss-[90px] rounded-ee-[90px]">
          <Image src={earth} alt="Earth environment" className="rounded-2xl shadow-lg rounded-ss-[90px] rounded-ee-[90px]" />
        </div>
      </div>
    </div>
  );
};

export default Details;
