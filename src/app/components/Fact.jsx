"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import factImage from "../images/fact3.webp";
import jungle from '../images/jungle3.webp'

const Fact = () => {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("/data/facts.json")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setFact(data[randomIndex]);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div>
      <div className="relative flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center min-h-[60svh] bg-green-700 font-['Noto_Kufi_Arabic'] text-white text-center py-6 px-6 md:px-12">
        <div className='absolute inset-0 z-10 opacity-10'><Image src={jungle} alt="خلفية" fill className="object-cover" priority /></div>
        <div className="relative z-20 flex w-[160px] md:w-[210px]">
          <Image
            src={factImage}
            alt="fact image"
            className="w-full object-contain"
          />
        </div>

        {/* AnimatePresence handles mounting/unmounting animation */}
        <AnimatePresence>
          {fact && (
            <motion.div
              key={fact.id}
              className="flex flex-col gap-5 max-w-md relative z-20 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-bold">{fact.title}</h1>
              <p className="text-lg">{fact.body}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Fact;
