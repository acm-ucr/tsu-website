import Image from "next/image";
import mango from "@/public/mango.webp";
import mango2 from "@/public/mango2.webp";

const WhyJoinUs = () => {
  return (
    <div className="font-tsu-sahitya relative min-h-[80vh] w-full">
      {/* Top Mango */}
      <Image
        src={mango}
        alt="Top Mango"
        className="absolute top-[65] right-[100] h-auto w-36"
      />

      {/* Left Mango */}
      <div className="absolute top-[245] left-[110] hidden 2xl:block">
        <Image src={mango2} alt="Mango 2" className="h-auto w-36" />
      </div>

      {/* Main Content */}
      <div className="border-tsu-blue-100 mx-auto w-[85vw] border-b-8 py-20 pb-[150px]">
        <div className="mb-10 flex items-baseline gap-3">
          <div className="border-tsu-orange-100 h-10 border-l-8" />
          <p className="text-4xl md:text-5xl">Why Join Us?</p>
        </div>
        <p className="text-lg lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};
export default WhyJoinUs;
