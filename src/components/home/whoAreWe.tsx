"use client";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";

const WhoAreWe = () => {
  return (
    <div className="bg-tsu-blue-100 flex h-auto w-screen">
      <Image
        src={placeholder}
        alt="Placeholder Image"
        className="ml-5 w-1/3 p-3 md:ml-9 md:p-5 lg:ml-17 lg:w-1/3 lg:p-13"
      />

      <div className="font-tsu-sahitya mt-4 ml-2 flex w-2/3 flex-col text-white md:mt-4 md:ml-9 lg:mt-8 lg:ml-25 lg:w-5/10">
        <div className="mb-1 flex items-baseline gap-1.5 lg:mb-4 lg:gap-3">
          <div className="border-tsu-pink-100 h-6 border-l-4 md:border-l-8 lg:h-10" />
          <p className="text-lg text-white md:text-3xl lg:text-5xl">
            Who Are We?
          </p>
        </div>
        <p className="text-xs text-white md:text-lg lg:text-2xl">
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
