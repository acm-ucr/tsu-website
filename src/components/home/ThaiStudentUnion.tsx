"use client";

import Image from "next/image";
import PalmTree from "@/public/palmTree.webp";
import { motion } from "motion/react";

const ThaiStudentUnion = () => {
  return (
    <div className="font-tsu-sahitya relative w-full h-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center pt-23 text-center md:hidden"
      >
        <p className="mb-5 text-6xl">Thai Student Union</p>
        <div className="bg-tsu-pink-100 mb-5 h-1.5 w-1/4"></div>
        <p className="w-3/4 text-lg">
          Join TSU to connect, learn, and make lasting memories!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 ml-10 py-20 md:ml-15"
      >
        <div className="border-tsu-pink-100 hidden w-[60vw] border-l-8 px-10 md:block md:w-[70vw]">
          <p className="mb-4 text-7xl lg:text-8xl">Thai Student Union</p>
          <p className="text-2xl">
            Join TSU to connect, learn, and make lasting memories!
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src={PalmTree}
          alt="Palm Tree"
          className="absolute right-0 bottom-0 z-0 w-[50vh] translate-x-20 opacity-70 lg:opacity-100 2xl:w-[70vh] 2xl:translate-y-40"
        />
      </motion.div>
    </div>
  );
};

export default ThaiStudentUnion;
