"use client";
import Image from "next/image";
import polaroid from "@/public/polaroid.webp";
import polaroid2 from "@/public/polaroid2.webp";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

const ContainerAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8, staggerChildren: 0.3 },
};
const PolaroidAnimation1 = {
  initial: { opacity: 0, x: 0, rotate: -15 },
  whileInView: { opacity: 1, x: 10, rotate: -5 },
  transition: { duration: 0.8, ease: easeInOut },
};
const PolaroidAnimation2 = {
  initial: { opacity: 0, x: 0, rotate: 15 },
  whileInView: { opacity: 1, x: -5, rotate: 5 },
  transition: { duration: 0.8, ease: easeInOut },
};

const Polaroid = () => {
  return (
    <motion.div
      {...ContainerAnimation}
      className="flex flex-col items-center justify-center gap-10 overflow-hidden p-4 md:flex-row md:gap-20 md:p-15"
    >
      <motion.div {...PolaroidAnimation1}>
        <Image
          src={polaroid}
          alt="Polaroid 1 Image"
          className="mx-auto w-4/5 md:-mt-6 md:w-2xl xl:w-4/5"
        />
      </motion.div>
      <motion.div {...PolaroidAnimation2}>
        <Image
          src={polaroid2}
          alt="Polaroid 2 Image"
          className="mx-auto w-4/5 md:-mt-6 md:w-2xl xl:w-4/5"
        />
      </motion.div>
    </motion.div>
  );
};

export default Polaroid;
