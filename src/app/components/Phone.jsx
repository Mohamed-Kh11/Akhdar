import Image from "next/image";
import phone from '../images/phone3.png';
import Btn from "./Button";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

const Phone = () => {
  return (
    <div className="bg-green-600 font-['Noto_Kufi_Arabic'] px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-[60svh] text-center md:text-right">
        
        {/* Image */}
        <div className="w-[200px] md:w-[250px] ">
          <Image src={phone} alt="تطبيق الهاتف" className="object-contain w-full h-auto" />
        </div>

        {/* Text & Button */}
        <div className="flex flex-col items-center text-center gap-4 max-w-md">
          <h1 className="text-2xl md:text-4xl text-white">تطبيق الهاتف متاح الآن !</h1>
          <p className="text-white text-sm md:text-base leading-relaxed">
            ساهم في حماية البيئة من خلال تتبع استهلاكك وتعلّم ممارسات مستدامة باستخدام تطبيقنا السهل والمفيد.
          </p>
          <div className="flex gap-2 text-white">
          <FaApple className="text-2xl" />
          <IoLogoAndroid  className="text-3xl"/>
          </div>
          <Btn url="https://www.apple.com/app-store/" text="نزل التطبيق" target={'_blank'} />
        </div>
      </div>
    </div>
  );
};

export default Phone;
