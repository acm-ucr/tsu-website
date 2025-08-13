"use client";
import Link from "next/link";
import Image from "next/image";
import TSULogo from "@/public/logo.webp";
import { AiFillInstagram } from "react-icons/ai";
import { FaLine } from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="bg-tsu-beige-200 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-5 sm:px-10 sm:py-6">
      <Image
        src={TSULogo}
        alt="TSU Logo"
        className="mt-5 flex w-25 sm:mt-0 sm:w-[12%]"
      />
      <div className="font-tsu-sahitya flex flex-col items-center">
        <div className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl">
          Thai Student Union
        </div>
        <div className="text-center text-xs md:text-sm">
          © ACM at UCR 2025.{" "}
          <br className="sm:inline sm:text-center md:hidden" />
          Made with 🧡 from ACM & TSU
        </div>
      </div>

      <div className="invisible border-1 border-black sm:visible sm:h-20 md:ml-2 lg:ml-10"></div>

      <div className="font-tsu-sahitya mb-5 flex items-center gap-5 text-xl font-medium sm:mb-0 xl:ml-10 xl:gap-10 xl:text-3xl 2xl:text-4xl">
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://www.instagram.com/tsuucr/?hl=en"
              target="_blank"
            >
              <AiFillInstagram className="text-tsu-orange-100 h-8 w-8 sm:h-11 sm:w-11 xl:h-15 xl:w-15" />
            </Link>
          </motion.div>
          <span>Instagram</span>
        </div>

        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://line.me/ti/g/3K_UGDcRGR" target="_blank">
              <FaLine className="text-tsu-orange-100 h-8 w-8 sm:h-11 sm:w-11 xl:h-15 xl:w-15" />
            </Link>
          </motion.div>
          <span>Line</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
