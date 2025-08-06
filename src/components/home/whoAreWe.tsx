"use client";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";

const WhoAreWe = () => {
  return (
    <div className="bg-tsu-blue-100 flex w-screen items-center justify-center gap-x-25">
      <Image src={placeholder} alt="Placeholder Image" className="w-1/3 p-13" />

      <div className="font-tsu-sahitya flex w-5/10 flex-col text-white">
        <div className="mb-4 flex gap-3 text-5xl text-white">
          <div className="border-tsu-pink-100 ml-50 border-l-8"></div>
          Who Are We?
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
