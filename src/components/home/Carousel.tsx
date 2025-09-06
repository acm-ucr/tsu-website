"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoIosArrowDropright } from "react-icons/io";
import LoyKrathong from "./LoyKrathong";
import Songkran from "./Songkran";

const Carousel = () => {
  const [isFirstCard, setIsFirstCard] = useState(true);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-screen">
        <AnimatePresence mode="wait">
          {isFirstCard ? (
            <motion.div
              key="Card1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <LoyKrathong />
            </motion.div>
          ) : (
            <motion.div
              key="Card2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <Songkran />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setIsFirstCard((prev) => !prev)}
        className="text-tsu-orange-200 mt-[-20] mb-15 flex gap-2 rounded-full p-1 px-3 transition hover:bg-white md:text-lg"
      >
        more events
        <IoIosArrowDropright className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;
