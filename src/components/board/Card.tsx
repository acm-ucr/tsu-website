import Image from "next/image";
import Flower from "@/public/flower.webp";
import Board from "@/public/board.webp";
interface BoardProps {
  name: string;
  role: string;
}

const Card = ({ name, role }: BoardProps) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="flex h-3/4 w-1/4 flex-shrink-0 border-10 border-white">
        <Image src={Board} alt="Board" />
      </div>
      <Image
        src={Flower}
        alt="Flower"
        className="absolute bottom-[15vh] left-[33vw]"
      />
      <div className="font-tsu-sahitya mt-2 flex flex-col items-center text-6xl">
        <div className="text-tsu-brown-300 font-bold">{name}</div>
        <div className="ml-35">{role}</div>
      </div>
    </div>
  );
};

export default Card;
