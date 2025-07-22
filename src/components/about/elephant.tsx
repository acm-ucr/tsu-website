import Image from "next/image";
import elephant from "@/public/elephant.webp";

const Elephant = () => {
  return (
    <div className="flex">
      <Image
        src={elephant}
        alt="Elephant w/Text Bubble Image"
        className="flex w-[80%] ml-40 -mb-30"
      />
    </div>
  );
};

export default Elephant;
