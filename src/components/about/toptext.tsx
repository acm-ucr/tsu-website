"use client";
import { motion } from "motion/react";

const DescriptionAnimation = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3 },
};

export const TopAboutText = () => {
  return (
    <div>
      <div className="bg-tsu-green-100 h-1 w-1/2 md:h-3" />
      <motion.div
        {...DescriptionAnimation}
        className="font-tsu-sahitya m-6 w-4/5 text-xs md:m-8 md:ml-20 md:text-3xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi
      </motion.div>
    </div>
  );
};
