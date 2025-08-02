"use client";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";

const WhoAreWe = () => {
  return (
    <div className="bg-tsu-blue-100 flex h-auto w-screen">
      <Image
        src={placeholder}
        alt="Placeholder Image"
        className="ml-[23px] w-1/3 p-6 lg:ml-17 lg:p-13"
      />

      <div className="font-tsu-sahitya mt-[8px] ml-[7px] flex w-2/3 flex-col text-white lg:mt-8 lg:ml-25 lg:w-5/10">
        <div className="mt-10.5 mb-[1px] text-center text-[16px] text-white lg:mt-30 lg:mb-4 lg:text-5xl">
          <span className="text-tsu-pink-100 mr-0.5 lg:mr-2">|</span>Who Are We?
        </div>
        <p className="text-[7px] text-white lg:text-2xl">
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
