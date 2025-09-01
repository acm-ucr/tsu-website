"use client";
import Image from "next/image";
import mango from "@/public/mango.webp";
import mango2 from "@/public/mango2.webp";
import mango3 from "@/public/mango3.webp";
import { motion } from "motion/react";

const MangoAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.2 },
};

const TextAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

const WhyJoinUs = () => {
  return (
    <div className="font-tsu-sahitya relative mx-auto mt-15 w-[85vw] py-5 2xl:my-30 2xl:mb-45">
      <motion.div
        {...MangoAnimation}
        className="absolute top-0 right-[-5] hidden translate-x-1/2 2xl:block"
      >
        <Image src={mango} alt="Mango" className="h-auto w-40" />
      </motion.div>
      <motion.div
        {...MangoAnimation}
        className="absolute top-53 left-[-15] hidden -translate-x-1/2 2xl:block"
      >
        <Image src={mango2} alt="Mango 2" className="h-auto w-36" />
      </motion.div>
      <div className="text-center">
        <motion.div
          {...TextAnimation}
          className="mb-15 flex items-center justify-center gap-3 md:mb-10 md:justify-start"
        >
          <div className="border-tsu-orange-100 h-10 border-l-8" />
          <p className="text-4xl md:text-5xl">Why Join Us?</p>
        </motion.div>
        <motion.div
          {...TextAnimation}
          className="text-lg md:text-left lg:text-2xl 2xl:mr-5"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </motion.div>
      </div>
      <motion.div
        {...MangoAnimation}
        className="mt-15 mb-7 flex justify-center gap-3 2xl:hidden"
      >
        <Image src={mango3} alt="Mango 3" className="h-auto w-20" />
        <Image src={mango3} alt="Mango 3" className="h-auto w-20" />
        <Image src={mango3} alt="Mango 3" className="h-auto w-20" />
      </motion.div>{" "}
    </div>
  );
};

export default WhyJoinUs;
