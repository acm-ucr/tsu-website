import Link from "next/link";
import Image from "next/image";
import TSULogo from "@/public/logo.webp";
import { AiFillInstagram } from "react-icons/ai";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-tsu-beige-200 flex flex-row items-center justify-center gap-10 px-10 py-6">
      <Image
        src={TSULogo}
        alt="TSU Logo"
        className="flex w-[10%] flex-shrink-0"
      />

      <div className="font-tsu-sahitya flex flex-col items-center pt-5">
        <p className="text-5xl">Thai Student Union</p>
        <p className="text-sm text-gray-600">
          © ACM at UCR 2025. Made with 🧡 from ACM & TSU
        </p>
      </div>

      <div className="ml-15 h-20 border-1 border-black"></div>

      <div className="font-tsu-sahitya ml-10 flex items-center gap-10 text-xl font-medium">
        <div className="flex items-center gap-2">
          <Link href="https://www.instagram.com/tsuucr/?hl=en" target="_blank">
            <AiFillInstagram className="text-tsu-orange-100 h-11 w-11" />
          </Link>
          <span>Instagram</span>
        </div>

        <div className="flex items-center gap-2">
          <Link href="https://line.me/ti/g/3K_UGDcRGR" target="_blank">
            <FaLine className="text-tsu-orange-100 h-11 w-11" />
          </Link>
          <span>Line</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
