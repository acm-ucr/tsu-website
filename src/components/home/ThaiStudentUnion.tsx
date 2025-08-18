import React from "react";
import Image from "next/image";
import PalmTree from "@/public/palmTree.webp";

const ThaiStudentUnion = () => {
  return (
    <div className="relative h-[60vh] w-screen">
      {" "}
      {/* parent wrapper */}
      <div className="border-tsu-pink-100 relative z-10 border-l-8 px-10">
        <p className="mb-4 font-serif text-8xl">Thai Student Union</p>
        <p className="w-[40vw] font-serif text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <Image
        src={PalmTree}
        alt="Palm Tree"
        className="absolute right-[1000] bottom-0 z-0 w-[55vh]"
        priority
      />
    </div>
  );
};

export default ThaiStudentUnion;
