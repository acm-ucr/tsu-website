import Image from "next/image";
import Mango from "@/public/mango.webp";

const WhyJoinUs = () => {
  return (
    <div className="font-tsu-sahitya border-tsu-blue-100 relative mx-30 w-[85vw] border-b-8 py-20">
      {/* Title */}
      <div className="mb-4 flex items-baseline gap-3">
        <div className="border-tsu-orange-100 h-10 border-l-8" />
        <p className="text-5xl">Why Join Us?</p>
      </div>

      {/* Mango top-right */}
      <Image
        src={Mango}
        alt="Mango Top Right"
        className="absolute top-[100] right-[1020] h-28 w-28 translate-x-8 -translate-y-8"
      />

      {/* Body text */}
      <p className="max-w-4xl text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      {/* Mango bottom-left */}
      <Image
        src={Mango}
        alt="Mango Bottom Left"
        className="absolute top-[270] left-[-30] h-28 w-28 -translate-x-8 translate-y-8 rotate-180"
      />
    </div>
  );
};

export default WhyJoinUs;
