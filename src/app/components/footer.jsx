'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/leaf5.png';
import jungle from '../images/jungle3.webp'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'فيسبوك' },
  { icon: <FaTwitter />, href: 'https://twitter.com', label: 'تويتر' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'إنستغرام' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'لينكدإن' },
];

const navLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '/details' },
  { name: 'أرقام وحقائق', href: '/facts' },
  { name: 'تواصل معنا', href: '/contact-us' },
];

const Footer = () => {
  return (
    <footer className='relative'>
      <div className='absolute inset-0 z-10 opacity-15'><Image src={jungle} alt="خلفية" fill className="object-cover" priority /></div>
      <div className="bg-green-900 text-white pt-12 px-6 md:px-20 relative overflow-hidden font-['Noto_Kufi_Arabic']">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400" />

<div className="grid md:grid-cols-3 gap-12 relative z-10 pb-10">
  {/* Logo */}
  <div className="flex items-center gap-4">
    <Image src={logo} alt="شعار أخضر" width={60} height={60} />
    <span className="text-4xl font-medium">أَخْضَر</span>
  </div>

  {/* Navigation */}
  <div>
    <p className="text-xl font-semibold mb-3">روابط سريعة</p>
    <ul className="space-y-2 text-white">
      {navLinks.map(({ name, href }) => (
        <li key={href}>
          <Link href={href} className="hover:text-green-400 transition">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Social Icons */}
  <div>
    <p className="text-xl font-semibold mb-3">تابعنا</p>
    <div className="flex gap-4">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`رابط إلى ${label}`}
          className="bg-green-800 p-2 rounded-full hover:bg-green-600 transition"
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
</div>

<div className="border-t border-green-700 text-center py-4 text-sm">
  © {new Date().getFullYear()} أَخْضَر — جميع الحقوق محفوظة.
</div>
      </div>
    </footer>
  );
};

export default Footer;
