import Image, { StaticImageData } from "next/image";
import Flower from "@/public/flower.webp";
import Board from "@/public/board.webp";
interface BoardProps {
  name: string;
  role: string;
  image: StaticImageData;
}

const Card = ({ name, role, image }: BoardProps) => {
  return (
    <div className="mb-5 flex flex-col items-center justify-center p-10">
      <div className="relative flex w-80 flex-shrink-0 border-10 border-white">
        <Image src={image || Board} alt="Board" />
        <Image
          src={Flower}
          alt="Flower"
          className="absolute right-[180] bottom-[-50]"
        />
      </div>
      <div className="font-tsu-sahitya mt-14 flex flex-col items-center text-5xl">
        <div className="text-tsu-brown-300 font-bold">{name}</div>
        <div className="ml-35">{role}</div>
      </div>
    </div>
  );
};

export default Card;
