import Image from "next/image";

export default function WhyJoinUs() {
  return (
    <section className="relative bg-[#FBEFEF] px-8 pt-10 pb-28">
      {/* Content */}
      <div className="mx-auto max-w-5xl">
        {/* Yellow Left Bar with Title */}
        <div className="mb-4 inline-block border-l-[6px] border-[#F5B82E] pl-3">
          <h2 className="text-3xl font-bold">Why Join Us?</h2>
        </div>

        <p className="mt-4 text-lg text-[#3D3D3D]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi
        </p>
      </div>

      {/* Left Mango */}
      <Image
        src="/mango1.webp"
        alt="Mango left"
        width={200}
        height={200}
        className="absolute bottom-8 left-6 h-auto w-[80px]"
      />

      {/* Right Mango */}
      <Image
        src="/mango2.webp"
        alt="Mango right"
        width={200}
        height={200}
        className="absolute top-6 right-6 h-auto w-[80px]"
      />

      {/* Blue Bottom Border */}
      <div className="absolute bottom-0 left-0 h-3 w-full bg-blue-400" />
    </section>
  );
}
