'use client'
import { useState } from 'react'
import { FiMail, FiPhone, FiEdit3, FiCheck } from 'react-icons/fi'
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
      ? 'flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white shadow-md scale-105 transition-all'
      : 'flex items-center gap-2 px-6 py-3 rounded-full bg-white text-green-700 border border-green-200 hover:bg-green-50 transition-all'

  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col items-center justify-start px-4 pt-[130px] pb-12 bg-gradient-to-b from-green-50 to-white font-['Noto_Kufi_Arabic']"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-green-800"
      >
        كيف تود التواصل معنا؟
      </motion.h1>

      {/* Contact Method Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
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

      {/* Card */}
      <motion.div
        key={method}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:max-w-3xl bg-white rounded-2xl p-6 shadow-lg border border-green-100 min-h-[350px]"
      >
        <AnimatePresence mode="wait">
          {method === 'form' && (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center gap-2"
                  >
                    <FiCheck /> تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا
                  </motion.div>
                )}
              </AnimatePresence>
              <input
                type="text"
                placeholder="الاسم الكامل"
                required
                className="w-full p-3 border rounded-lg text-right focus:ring-2 focus:ring-green-300 outline-none"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                required
                className="w-full p-3 border rounded-lg text-right focus:ring-2 focus:ring-green-300 outline-none"
              />
              <input
                type="text"
                placeholder="الموضوع"
                required
                className="w-full p-3 border rounded-lg text-right focus:ring-2 focus:ring-green-300 outline-none"
              />
              <textarea
                rows="4"
                placeholder="اكتب رسالتك هنا..."
                required
                className="w-full p-3 border rounded-lg text-right focus:ring-2 focus:ring-green-300 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:scale-105 shadow-md transition-transform"
              >
                إرسال
              </button>
            </motion.form>
          )}

          {method === 'email' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-green-800"
            >
              <p className="mb-3 text-lg">📧 يمكنك مراسلتنا عبر البريد:</p>
              <div className="font-semibold text-green-900 text-xl select-all hover:text-green-700 transition">
                contact@akhdar.com
              </div>
            </motion.div>
          )}

          {method === 'phone' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-green-800"
            >
              <p className="mb-3 text-lg">☎️ اتصل بنا على:</p>
              <ul
                className="font-semibold text-green-900 text-xl space-y-2 list-none"
                dir="ltr"
              >
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
