import Image from "next/image";
import polaroid from "@/public/polaroid.webp";
import polaroid2 from "@/public/polaroid2.webp";

const Polaroid = () => {
  return (
    <div className="flex">
      <Image
        src={polaroid}
        alt="Polaroid 1 Image"
        className="mt-10 ml-65 p-13"
      />

      <Image src={polaroid2} alt="Polaroid 2 Image" className="ml-17 p-13" />
    </div>
  );
};

export default Polaroid;
