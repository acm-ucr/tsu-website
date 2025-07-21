"use client";
import Image from "next/image";

const WhoAreWe = () => {
  return (
    <div className="bg-tsu-blue-100 flex h-auto w-screen items-center justify-center px-12 py-16 font-tsu-sahitya">
      {/* Mango Image */}
      <div className="w-1/3 flex justify-center">
        <Image
          src="/mango.webp"
          alt="Mango"
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="ml-16 w-1/2 text-white">
        <div className="mb-6 text-5xl">
          <span className="text-tsu-pink-100 mr-2">|</span>Who Are We?
        </div>
        <p className="text-2xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default WhoAreWe;