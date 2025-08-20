import Image from "next/image";
import PalmTree from "@/public/palmTree.webp";

const ThaiStudentUnion = () => {
  return (
    <div className="font-tsu-sahitya relative w-screen overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-23 text-center md:hidden">
        <p className="mb-5 text-6xl">Thai Student Union</p>
        <div className="bg-tsu-pink-100 mb-5 h-1.5 w-1/4"></div>
        <p className="w-3/4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <div className="relative z-10 ml-10 py-20 md:ml-15">
        <div className="border-tsu-pink-100 hidden w-[60vw] border-l-8 px-10 md:block md:w-[70vw]">
          <p className="mb-4 text-7xl lg:text-8xl">Thai Student Union</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </div>

      <Image
        src={PalmTree}
        alt="Palm Tree"
        className="absolute right-0 bottom-0 z-0 w-[50vh] translate-x-20 opacity-70 lg:translate-y-20 xl:w-[40vh] xl:opacity-100 2xl:w-[70vh] 2xl:translate-y-40"
      />
    </div>
  );
};

export default ThaiStudentUnion;
