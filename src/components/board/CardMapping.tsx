"use client";
import boardMembers from "@/data/BoardInfo";
import Card from "@/components/board/Card";
import { motion } from "motion/react";

const BoardAnimation = (index: number) => ({
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, delay: index * 0.1 },
});

const CardMapping = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="grid grid-cols-1 gap-x-20 md:grid-cols-2 lg:grid-cols-3">
        {boardMembers.map(({ name, role, image }, index) => (
          <motion.div {...BoardAnimation(index)} key={index}>
            <Card name={name} role={role} image={image} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardMapping;
