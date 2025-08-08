'use client';

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo2 from '../images/leaf5.png';
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="fixed w-full z-50">

      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm py-1 px-6 md:px-12 font-['Noto_Kufi_Arabic'] text-center">
        ازرع شجرة اليوم... لتحيا الأجيال غداً
      </div>

      {/* Main Navbar */}
      <nav dir="rtl" className="custom-gradient flex px-6 md:px-12 py-2 gap-4 h-[75px] justify-between items-center shadow-2xl">
        <Link href={`/`} className="flex items-center gap-3">
          <Image src={logo2} alt="logo" className="w-[45px] transform duration-200 ease-in-out hover:scale-[1.2]" />
          <span className="text-4xl font-medium text-white font-['Noto_Kufi_Arabic']">أَخْضَر</span>
        </Link>

        <div className="flex gap-5 justify-center items-center">
          {/* Main Links */}
          <div className="hidden md:flex items-center gap-9 text-white font-['Noto_Kufi_Arabic']">
            <Link href="/programs" className="relative group duration-200 hover:text-gray-400">برامجنا
              <span className="absolute right-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/clean-energy" className="relative group duration-200 hover:text-gray-400">الطاقة النظيفة
              <span className="absolute right-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/facts" className="relative group duration-200 hover:text-gray-400">ارقام وحقائق
              <span className="absolute right-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact-us" className="relative group duration-200 hover:text-gray-400">تواصل معنا
              <span className="absolute right-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Burger Menu (mobile only) */}
          <div className="flex items-center gap-4">
            <GiHamburgerMenu onClick={toggleSidebar} className="text-3xl text-white cursor-pointer md:hidden" />
          </div>
        </div>
      </nav>

      {/* Sidebar (mobile nav) */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-green-900 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b border-white">
          <span className="text-xl font-['Noto_Kufi_Arabic']">القائمة</span>
          <IoClose onClick={toggleSidebar} className="text-3xl cursor-pointer" />
        </div>
        <div className="flex flex-col gap-6 p-6 font-['Noto_Kufi_Arabic'] text-lg">
          <Link href="/programs" onClick={toggleSidebar}>برامجنا</Link>
          <Link href="/clean-energy" onClick={toggleSidebar}>الطاقة النظيفة</Link>
          <Link href="/facts" onClick={toggleSidebar}>ارقام وحقائق</Link>
          <Link href="/contact-us" onClick={toggleSidebar}>تواصل معنا</Link>
        </div>
      </div>

      {/* Overlay for dimming background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
