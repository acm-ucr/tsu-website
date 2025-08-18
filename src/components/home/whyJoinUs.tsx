"use client";
import Image from "next/image";
import mango from "@/public/mango.webp";
import mango2 from "@/public/mango2.webp";
import mango3 from "@/public/mango3.webp";

const WhyJoinUs = () => {
  return (
    <div className="font-tsu-sahitya relative mx-auto mt-15 w-[85vw] py-20 2xl:my-30 2xl:mb-40">
      <div className="absolute top-0 right-[-5] mt-5 hidden translate-x-1/2 2xl:block">
        <Image src={mango} alt="Mango" className="h-auto w-40" />
      </div>

      <div className="absolute top-70 left-[-15] hidden -translate-x-1/2 2xl:block">
        <Image src={mango2} alt="Mango 2" className="h-auto w-36" />
      </div>
      <div className="text-center">
        <div className="mb-15 flex items-center justify-center gap-3 md:mb-10 lg:justify-start">
          <div className="border-tsu-orange-100 h-10 border-l-8" />
          <p className="text-4xl md:text-5xl">Why Join Us?</p>
        </div>
        <p className="text-lg lg:text-left lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="mt-15 mb-7 flex justify-center gap-3 2xl:hidden">
        <Image src={mango3} alt="Mango 3" className="h-auto w-20" />
        <Image src={mango3} alt="Mango 3" className="h-auto w-20" />
        <Image src={mango3} alt="Mango 3" className="h-auto w-20" />
      </div>
    </div>
  );
};

export default WhyJoinUs;
