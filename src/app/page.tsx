"use client";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";

const Home = () => {
  return (
    <div className="bg-tsu-blue-100 flex h-screen w-screen">
      <Image
        src={placeholder}
        alt="Placeholder Image"
        className="ml-30 h-[325px] w-[440px] p-13"
      />

      <div className="ml-40 flex w-5/10 flex-col text-white">
        <div className="font-tsu-sahitya mt-17 mb-4 text-center text-5xl text-white">
          <span className="text-tsu-pink-100 mr-2">|</span>Who Are We?
        </div>
        <p className="text-xl text-white">
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

export default Home;
