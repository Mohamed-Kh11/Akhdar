'use client';

import { useState } from 'react';
import { FaLeaf, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setSuccess(true);
    setEmail('');

    setTimeout(() => setSuccess(false), 3000); 
  };

  return (
    <section
      dir="rtl"
      className="relative flex items-center justify-center text-center font-['Noto_Kufi_Arabic'] px-6 py-12 max-h-[60svh]  overflow-hidden mx-4 my-12"
    >
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 max-w-2xl w-full">
        <div className="flex flex-col items-center justify-center gap-3 text-green-600 mb-6">
          {/* <FaLeaf className="text-5xl drop-shadow-sm" /> */}
          <h2 className="text-2xl md:text-4xl font-extrabold">
            اشترك في النشرة البيئية
          </h2>
        </div>
        <p className="text-green-700 text-lg md:text-xl mb-8">
          احصل على آخر الأخبار والنصائح حول حماية كوكبنا
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="بريدك الإلكتروني"
            className="w-full sm:w-auto flex-1 px-5 py-3  border border-green-300 text-green-800 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 backdrop-blur"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 cursor-pointer bg-green-700 text-white px-6 py-3  hover:bg-green-800 transition-all text-base shadow-md"
          >
            <FaPaperPlane />
            اشترك
          </button>
        </form>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 text-green-700 font-semibold"
            >
              تم الاشتراك بنجاح ✅
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
