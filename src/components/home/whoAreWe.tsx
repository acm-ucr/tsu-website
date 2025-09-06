"use client";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";
import { motion } from "motion/react";

const WhoAreWe = () => {
  return (
    <div className="bg-tsu-blue-100 flex w-full flex-col items-center text-center md:flex-row md:text-left">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="h-auto w-4/5 pt-15 md:ml-9 md:w-xs md:p-5 lg:ml-17 lg:w-1/3 lg:p-7"
      >
        <Image src={placeholder} alt="Placeholder Image" />
      </motion.div>

      <div className="h-15 lg:block" />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-tsu-sahitya mr-10 mb-10 ml-10 flex w-2/3 flex-col text-white md:mt-4 md:mb-5 xl:mr-20"
      >
        <div className="flex justify-center gap-1 md:mt-8 md:justify-start md:gap-3 lg:mb-4 xl:mt-15 2xl:mt-15">
          <div className="border-tsu-pink-100 h-8 border-l-6 md:h-10 lg:border-l-8" />
          <p className="text-4xl text-white lg:text-5xl">Who Are We?</p>
        </div>
        <p className="mt-5 mb-10 text-lg text-white md:mb-5 lg:mb-10 lg:text-2xl xl:mb-13">
          We are a diverse group of students passionate about promoting Thai
          culture at UCR. Our members come from different backgrounds, but we
          all share a love for community, cultural exchange, and celebrating the
          unique traditions of Thailand. Through events, workshops, and social
          gatherings, we aim to create an inclusive space where everyone can
          experience and appreciate Thai culture.
        </p>
      </motion.div>
    </div>
  );
};

export default WhoAreWe;
