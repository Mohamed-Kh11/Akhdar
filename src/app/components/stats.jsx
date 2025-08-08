'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';
import { FaTree, FaRecycle, FaUsers, FaHandsHelping } from 'react-icons/fa';

const stats = [
  { label: 'أشجار مزروعة', value: 12000, icon: <FaTree /> },
  { label: 'مبادرات بيئية', value: 85, icon: <FaHandsHelping /> },
  { label: 'متطوعون نشطون', value: 450, icon: <FaUsers /> },
  { label: 'أطنان نفايات مُعاد تدويرها', value: 65, icon: <FaRecycle /> },
];

const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1,
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });

      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500"
    >
      {displayValue.toLocaleString('ar-EG')}
    </motion.span>
  );
};

const Statistics = () => {
  return (
    <section
      dir="rtl"
      className="h-[50vh] flex items-center justify-center text-green-600 font-['Noto_Kufi_Arabic'] px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center w-full max-w-6xl">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl text-green-500">
              {stat.icon}
            </div>
            <AnimatedNumber value={stat.value} />
            <span className="text-sm sm:text-lg md:text-xl">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
