import Image from "next/image";
import elephant from "@/public/elephant.webp";

const AboutBottom = () => {
  return (
    <>
      <div className="mt-20 ml-auto h-2 w-1/2 bg-green-500"></div>
      <p className="font-tsu-sahitya mr-10 mb-15 ml-auto w-3/5 py-15 text-right text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi
        alias dolor facere atque quo quis dolorum dicta tenetur vero aut ratione
        consectetur veniam doloremque iusto odio, beatae quae earum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eius alias fugiat autem,
        deleniti ratione minima sint reiciendis perspiciatis repellat nihil
        porro illo nesciunt cum error quibusdam eaque harum quidem
        reprehenderit!
      </p>
      <div className="flex">
        <Image
          src={elephant}
          alt="Elephant w/Text Bubble Image"
          className="-mb-30 ml-85 flex w-[70%]"
        />
      </div>
    </>
  );
};

export default AboutBottom;
