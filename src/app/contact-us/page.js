'use client'
import { useState } from 'react'
import { FiMail, FiPhone, FiEdit3, FiCheck, FiUser, FiMessageSquare } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactUs() {
  const [method, setMethod] = useState('form')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    e.target.reset()
  }

  const tabClass = (active) =>
    active
      ? 'flex items-center gap-2 px-6 py-3 rounded-full bg-green-700 text-white shadow-md scale-105 transition-all'
      : 'flex items-center gap-2 px-6 py-3 rounded-full bg-white text-green-700 border border-green-300 hover:bg-green-50 transition-all'

  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col items-center px-4 pt-[130px] pb-16 bg-gradient-to-b from-green-50 to-green-100 font-['Noto_Kufi_Arabic']"
    >
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-3 text-green-800 drop-shadow-sm"
      >
        تواصل معنا
      </motion.h1>
      <p className="text-green-700 mb-10 text-lg text-center max-w-xl leading-relaxed">
        يسعدنا تواصلك معنا! اختر الطريقة المناسبة لك سواء عبر النموذج، البريد الإلكتروني أو الهاتف.
      </p>

      {/* Contact Method Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button onClick={() => setMethod('form')} className={tabClass(method === 'form')}>
          <FiEdit3 /> نموذج التواصل
        </button>
        <button onClick={() => setMethod('email')} className={tabClass(method === 'email')}>
          <FiMail /> البريد الإلكتروني
        </button>
        <button onClick={() => setMethod('phone')} className={tabClass(method === 'phone')}>
          <FiPhone /> الهاتف
        </button>
      </div>

      {/* Main Card */}
      <motion.div
        key={method}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full md:max-w-3xl bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-green-200 min-h-[350px]"
      >
        <AnimatePresence mode="wait">
          {/* FORM METHOD */}
          {method === 'form' && (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Success message */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-4 bg-green-50 border border-green-300 text-green-700 rounded-lg flex items-center gap-2 shadow-sm"
                  >
                    <FiCheck /> تم إرسال رسالتك بنجاح — شكرًا لتواصلك!
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Inputs */}
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-green-700 opacity-70" />
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  required
                  className="w-full p-3 pr-3 pl-10 border rounded-lg text-right focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-green-700 opacity-70" />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  required
                  className="w-full p-3 pr-3 pl-10 border rounded-lg text-right focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              <div className="relative">
                <FiEdit3 className="absolute left-3 top-3 text-green-700 opacity-70" />
                <input
                  type="text"
                  placeholder="الموضوع"
                  required
                  className="w-full p-3 pr-3 pl-10 border rounded-lg text-right focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-green-700 opacity-70" />
                <textarea
                  rows="4"
                  placeholder="اكتب رسالتك هنا..."
                  required
                  className="w-full p-3 pr-3 pl-10 border rounded-lg text-right focus:ring-2 focus:ring-green-400 outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-3 rounded-lg hover:scale-105 shadow-md transition-transform text-lg"
              >
                إرسال
              </button>
            </motion.form>
          )}

          {/* EMAIL METHOD */}
          {method === 'email' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-green-800"
            >
              <p className="mb-3 text-xl">📧 يمكنك مراسلتنا عبر البريد:</p>
              <div className="font-semibold text-green-900 text-2xl select-all hover:text-green-700 transition">
                support@akhdar.com
              </div>
            </motion.div>
          )}

          {/* PHONE METHOD */}
          {method === 'phone' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-green-800"
            >
              <p className="mb-3 text-xl">☎️ اتصل بنا على:</p>
              <ul className="font-semibold text-green-900 text-2xl space-y-2" dir="ltr">
                <li className="hover:text-green-700 transition">+20 86 123 456 78</li>
                <li className="hover:text-green-700 transition">+20 86 456 879 22</li>
                <li className="hover:text-green-700 transition">+20 86 987 654 35</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
