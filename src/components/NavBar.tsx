"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigations } from "@/data/NavBarLinks";
import logo from "@/public/textLogo.webp";

import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="bg-tsu-beige-300 relative w-full shadow-lg">
      <div className="relative flex items-center justify-between px-8 py-3">
        <Link href="/" onClick={closeMenu}>
          <Image src={logo} alt="TSU Text Logo" width={200} height={70} />
        </Link>

        <div className="font-tsu-sahitya hidden w-2/3 justify-end gap-8 px-8 text-4xl md:flex">
          {navigations.map(({ name, link }, index) => (
            <Link href={link} key={index} className="px-2">
              {" "}
              {name}{" "}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <RiCloseFill
              size={32}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu2Fill
              size={32}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          {navigations.map(({ name, link }, index) => (
            <Link
              key={index}
              href={link}
              onClick={closeMenu}
              className="font-tsu-sahitya w-full py-2 text-center text-3xl underline"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
