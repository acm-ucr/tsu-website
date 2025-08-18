"use client";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";

const WhoAreWe = () => {
  return (
    <div className="bg-tsu-blue-100 flex w-screen flex-col items-center text-center md:flex-row md:text-left">
      <Image
        src={placeholder}
        alt="Placeholder Image"
        className="h-auto w-4/5 pt-15 md:ml-9 md:w-xs md:p-5 lg:ml-17 lg:w-1/3 lg:p-7"
      />
      <div className="h-15 lg:block" />
      <div className="font-tsu-sahitya mr-10 mb-10 ml-10 flex w-2/3 flex-col text-white md:mt-4 md:mb-5 xl:mr-20">
        <div className="flex justify-center gap-1 md:mt-8 md:justify-start md:gap-3 lg:mb-4 xl:mt-15 2xl:mt-15">
          <div className="border-tsu-pink-100 h-8 border-l-6 md:h-10 lg:border-l-8" />
          <p className="text-4xl text-white lg:text-5xl">Who Are We?</p>
        </div>
        <p className="mt-5 mb-10 text-lg text-white md:mb-5 lg:mb-10 lg:text-2xl xl:mb-13">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi
        </p>
      </div>
    </div>
  );
};

export default WhoAreWe;
