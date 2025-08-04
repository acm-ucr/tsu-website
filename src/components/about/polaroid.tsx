import Image from "next/image";
import polaroid from "@/public/polaroid.webp";
import polaroid2 from "@/public/polaroid2.webp";

const Polaroid = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 md:p-12 md:my-12 my-6">
      <Image src={polaroid} alt="Polaroid 1 Image" className="md:mt-6 md:w-2/5 w-3/4" />
      <Image src={polaroid2} alt="Polaroid 2 Image" className="md:-mt-6 md:w-2/5 w-3/4" />
    </div>
  );
};

export default Polaroid;
