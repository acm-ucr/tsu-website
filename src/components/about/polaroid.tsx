import Image from "next/image";
import polaroid from "@/public/polaroid.webp";
import polaroid2 from "@/public/polaroid2.webp";

const Polaroid = () => {
  return (
    <div className="my-6 flex flex-col items-center justify-center gap-6 p-4 md:my-12 md:flex-row md:p-12">
      <Image
        src={polaroid}
        alt="Polaroid 1 Image"
        className="w-3/4 md:mt-6 md:w-2/5"
      />
      <Image
        src={polaroid2}
        alt="Polaroid 2 Image"
        className="w-3/4 md:-mt-6 md:w-2/5"
      />
    </div>
  );
};

export default Polaroid;
