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
    <div className="mb-5 flex flex-col items-center justify-center p-4 md:p-10">
      <div className="relative flex w-60 flex-shrink-0 border-8 border-white md:w-80 md:border-10">
        <Image src={image || Board} alt="Board" />
        <Image
          src={Flower}
          alt="Flower"
          className="absolute right-[140] bottom-[-40] md:right-[180] md:bottom-[-50]"
        />
      </div>
      <div className="font-tsu-sahitya mt-8 flex flex-col items-center text-3xl md:mt-14 md:text-5xl">
        <div className="text-tsu-brown-300 font-bold">{name}</div>
        <div className="ml-20 md:ml-35">{role}</div>
      </div>
    </div>
  );
};

export default Card;
