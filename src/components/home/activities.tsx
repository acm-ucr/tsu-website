"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type ActivitiesProps = {
  backgroundColor: string;
  borderColor: string;
  image: StaticImageData;
  activityName: string;
  activityDesc: string;
};
const Activities = ({
  backgroundColor,
  borderColor,
  image,
  activityName,
  activityDesc,
}: ActivitiesProps) => {
  return (
    <div
      className={`flex w-full flex-col items-center text-center md:flex-row md:text-left ${backgroundColor}`}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="h-auto w-4/5 pt-15 md:ml-9 md:w-xs md:p-5 lg:ml-17 lg:w-1/3 lg:p-7"
      >
        <Image src={image} alt={activityName} />
      </motion.div>
      <div className="h-15 lg:block" />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-tsu-sahitya mr-10 mb-10 ml-10 flex w-2/3 flex-col text-white md:mt-4 md:mb-5 xl:mr-20"
      >
        <div className="flex justify-center gap-1 md:mt-8 md:justify-start md:gap-3 lg:mb-4 xl:mt-15 2xl:mt-15">
          <div
            className={`border-tsu-pink-100 h-8 border-l-6 md:h-10 lg:border-l-8 ${borderColor}`}
          />
          <p className="text-4xl text-white lg:text-5xl">{activityName}</p>
        </div>
        <p className="mt-5 mb-10 text-lg text-white md:mb-5 lg:mb-10 lg:text-2xl xl:mb-13">
          {activityDesc}
        </p>
      </motion.div>
    </div>
  );
};

export default Activities;
