import Image from "next/image";
import polaroid from "@/public/polaroid.webp";
import polaroid2 from "@/public/polaroid2.webp";

const Polaroid = () => {
  return (
    <div className="flex items-center justify-center gap-5 px-4 py-2 md:p-8">
      <Image src={polaroid} alt="Polaroid 1 Image" className="mt-6 w-2/5" />
      <Image src={polaroid2} alt="Polaroid 2 Image" className="-mt-6 w-2/5" />
    </div>
  );
};

export default Polaroid;
