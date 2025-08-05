import Image from "next/image";

interface BoardProps {
  name: string;
  role: string;
  image: string;
}

const Card = ({ name, role, image }: BoardProps) => {
  return (
    <div className="mb-5 flex flex-col items-center justify-center p-4 md:p-10">
      <div className="relative flex w-60 flex-shrink-0 border-8 border-white md:border-10 lg:w-70 xl:w-90">
        <Image
          src={image || "/board.webp"}
          alt="Board"
          width={300}
          height={300}
        />
        <Image
          src="/flower.webp"
          alt="Flower"
          className="absolute right-[170px] bottom-[-30px] w-20 lg:right-[195px] lg:bottom-[-20px] lg:w-25 xl:right-[235px] xl:bottom-[-35px] xl:w-35"
        />
      </div>
      <div className="font-tsu-sahitya mt-8 flex flex-col items-center text-3xl md:text-4xl xl:text-5xl">
        <div className="text-tsu-brown-300 ml-[-70px] font-bold">{name}</div>
        <div className="ml-15">{role}</div>
      </div>
    </div>
  );
};

export default Card;