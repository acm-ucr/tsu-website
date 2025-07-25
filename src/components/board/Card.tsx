import Image from "next/image";

interface BoardProps {
  name: string;
  role: string;
  image: string;
}

const Card = ({ name, role, image }: BoardProps) => {
  return (
    <div className="mb-5 flex flex-col items-center justify-center p-10">
      <div className="relative flex w-80 flex-shrink-0 border-10 border-white">
        <Image
          src={image || "/board.webp"}
          alt="Board"
          width={300}
          height={300}
        />
        <Image
          src="/flower.webp"
          alt="Flower"
          width={100}
          height={100}
          className="absolute right-[180px] bottom-[-50px]"
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
