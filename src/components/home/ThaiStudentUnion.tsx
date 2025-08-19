import Image from "next/image";
import PalmTree from "@/public/palmTree.webp";

const ThaiStudentUnion = () => {
  return (
    // ✅ Parent wrapper with width/height
    <div className="relative h-[60vh] w-screen">
      {/* ✅ Content wrapper: relative + z-10 */}
      <div className="relative z-10 ml-30 min-h-[60vh] py-20">
        <div className="border-tsu-pink-100 w-[40vw] border-l-8 px-10">
          <p className="mb-4 font-serif text-8xl">Thai Student Union</p>
          <p className="font-serif text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </div>

      {/* ✅ Palm Tree image with z-0, anchored to bottom right */}
      <Image
        src={PalmTree}
        alt="Palm Tree"
        className="absolute right-0 bottom-[0] z-0 h-auto w-[69vh]"
      />
    </div>
  );
};

export default ThaiStudentUnion;
