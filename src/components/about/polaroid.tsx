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
  initial: { opacity: 0, x: 50, rotate: -15 },
  whileInView: { opacity: 1, x: 150, rotate: -5 },
  transition: { duration: 0.8, ease: easeInOut },
};
const PolaroidAnimation2 = {
  initial: { opacity: 0, x: 150, rotate: 15 },
  whileInView: { opacity: 1, x: 50, rotate: 5 },
  transition: { duration: 0.8, ease: easeInOut },
};

const Polaroid = () => {
  return (
    <motion.div
      {...ContainerAnimation}
      className="my-6 flex flex-col items-center justify-center gap-6 p-4 md:my-12 md:flex-row md:p-12"
    >
      <motion.div {...PolaroidAnimation1}>
        <Image
          src={polaroid}
          alt="Polaroid 1 Image"
          className="w-full md:-mt-6 md:w-3/5"
        />
      </motion.div>
      <motion.div {...PolaroidAnimation2}>
        <Image
          src={polaroid2}
          alt="Polaroid 2 Image"
          className="w-full md:-mt-6 md:w-3/5"
        />
      </motion.div>
    </motion.div>
  );
};

export default Polaroid;
