"use client";
import Image from "next/image";
import mango from "@/public/mango.webp";
import mango2 from "@/public/mango2.webp";

const WhyJoinUs = () => {
  return (
    <div className="font-tsu-sahitya relative mx-30 mt-15 w-[85vw] py-20">
      <div className="absolute top-0 right-0 mt-2 translate-x-1/8">
        <Image src={mango} alt="Mango" width={180} />
      </div>

      <div className="absolute bottom-50 -translate-x-1/2 lg:top-70">
        <Image src={mango2} alt="Mango 2" width={180} />
      </div>

      <div className="mb-4 flex items-baseline gap-3">
        <div className="border-tsu-pink-100 h-10 border-l-8" />
        <p className="text-5xl">Why Join Us?</p>
      </div>
      <p className="mr-15 text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <div className="bg-tsu-blue-100 mt-50 mb-10 h-2" />
      </p>
    </div>
  );
};

export default WhyJoinUs;
