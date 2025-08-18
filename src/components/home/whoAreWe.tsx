"use client";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";

const WhoAreWe = () => {
  return (
    <div className="bg-tsu-blue-100 flex h-auto w-screen">
      <Image
        src={placeholder}
        alt="Placeholder Image"
        className="ml-17 w-1/3 p-13"
      />

      <div className="font-tsu-sahitya mt-35 ml-25 flex w-5/10 flex-col text-white">
        <div className="mb-4 flex items-baseline gap-3">
          <div className="border-tsu-pink-100 h-10 border-l-8" />
          <p className="text-5xl text-white">Who Are We?</p>
        </div>
        <p className="text-2xl text-white">
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
