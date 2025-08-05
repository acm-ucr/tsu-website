import Image from "next/image";
import PalmTree from "@/public/palmTree.webp";

const ThaiStudentUnion = () => {
  return (
    <div className="relative ml-30 min-h-[60vh] py-20">
      <div className="border-tsu-pink-100 border-l-8 px-10">
        <p className="mb-4 font-serif text-8xl">Thai Student Union</p>
        <p className="w-[60vw] font-serif text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <Image
        src={PalmTree}
        alt="Palm Tree"
        className="absolute right-[240] bottom-[75] w-[32vw]"
      />
    </div>
  );
};

export default ThaiStudentUnion;
