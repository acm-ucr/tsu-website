import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navigations } from "@/data/NavBarLinks";
import logo from "@/public/textLogo.webp";

const NavBar = () => {
  return (
    <div className="bg-tsu-beige-300 flex w-full items-center justify-between px-8 py-3 shadow-lg">
      <Link href="/">
        <Image src={logo} alt="TSU Text Logo" width={200} height={70} />
      </Link>
      <div className="font-tsu-sahitya flex w-2/3 justify-end gap-8 px-8 text-4xl">
        {navigations.map(({ name, link }, index) => (
          <Link href={link} key={index} className="px-2">
            {" "}
            {name}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
