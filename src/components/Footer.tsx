import Link from "next/link";
import Image from "next/image";
import TSULogo from "@/public/logo.webp";
import { AiFillInstagram } from "react-icons/ai";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-tsu-beige-200 flex w-full flex-row items-center gap-5">
      <Image src={TSULogo} alt="TSU Logo" className="w-1/6" />

      <div className="font-tsu-sahitya flex flex-col items-center justify-center pt-5">
        <p className="text-5xl">Thai Student Union</p>
        <p className="text-sm text-gray-600">
          © ACM at UCR 2025. Made with 🧡 from ACM & TSU
        </p>
      </div>

      <div className="ml-30 h-20 border-1 bg-black"></div>

      <div className="font-tsu-sahitya ml-15 flex flex-row gap-3 text-xl">
        <Link href="https://www.instagram.com/tsuucr/?hl=en" target="_blank">
          <AiFillInstagram className="text-tsu-orange-100 h-11 w-11" />
        </Link>
        <span className="py-2"> Instagram </span>
        <Link href="https://line.me/ti/g/3K_UGDcRGR" target="_blank">
          <FaLine className="text-tsu-orange-100 ml-5 h-11 w-11" />
        </Link>
        <span className="py-2"> Line </span>
      </div>
    </div>
  );
};

export default Footer;
