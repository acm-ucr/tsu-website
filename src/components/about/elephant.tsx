import Image from "next/image";
import elephant from "@/public/elephant.webp";

const Polaroid = () => {
  return (
    <div className="flex">
      <Image
        src={elephant}
        alt="Elephant w/Text Bubble Image"
        className="mb-10 ml-65 p-13"
      />
    </div>
  );
};

export default Polaroid;
