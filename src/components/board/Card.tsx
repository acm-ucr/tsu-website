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
    <div className="mb-5 flex flex-col items-center justify-center p-4 md:p-10">
      <div className="relative flex w-60 flex-shrink-0 border-8 border-white md:border-10 lg:w-70 xl:w-90">
        <Image src={image || Board} alt="Board" />
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

          className="absolute right-[170] bottom-[-30] w-20 lg:right-[195] lg:bottom-[-20] lg:w-25 xl:right-[235] xl:bottom-[-35] xl:w-35"
        />
      </div>
      <div className="font-tsu-sahitya mt-8 flex flex-col items-center text-3xl md:text-4xl xl:text-5xl">
        <div className="text-tsu-brown-300 ml-[-70] font-bold">{name}</div>
        <div className="ml-15">{role}</div>
      </div>
    </div>
  );
};

export default Card;
