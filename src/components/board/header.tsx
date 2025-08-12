"use client";
import { motion } from "motion/react";
const BoardHeader = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-tsu-sahitya pt-10 text-center text-5xl md:pt-20 md:text-8xl"
    >
      Meet The Board
    </motion.p>
  );
};
export default BoardHeader;
