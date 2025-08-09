import Image from "next/image";
import elephant from "@/public/elephant.webp";

const AboutBottom = () => {
  return (
    <div className="flex-col justify-items-center">
      <div className="justify-items-end pt-4">
        <div className="bg-tsu-green-100 h-1 w-1/2 md:h-3"></div>
        <p className="font-tsu-sahitya m-6 w-4/5 text-xs md:m-8 md:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi
          alias dolor facere atque quo quis dolorum dicta tenetur vero aut
          ratione consectetur veniam doloremque iusto odio, beatae quae earum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias
          fugiat autem, deleniti ratione minima sint reiciendis perspiciatis
          repellat nihil porro illo nesciunt cum error quibusdam eaque harum
          quidem reprehenderit!
        </p>
      </div>

      <Image
        src={elephant}
        alt="Elephant w/ Text Bubble Image"
        className="w-4/5 md:pt-12"
      />
    </div>
  );
};

export default AboutBottom;
