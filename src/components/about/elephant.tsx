import Image from "next/image";
import elephant from "@/public/elephant.webp";

const Elephant = () => {
  return (
    <div className="flex">
      <Image
        src={elephant}
        alt="Elephant w/Text Bubble Image"
        className="-mb-30 ml-40 flex w-[80%]"
      />
    </div>
  );
};

export default Elephant;
