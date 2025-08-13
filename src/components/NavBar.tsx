"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import navigations from "@/data/NavBarLinks";
import logo from "@/public/textLogo.webp";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const NavBar = () => {
  const path = usePathname();
  return (
    <div className="bg-tsu-beige-300 relative flex w-full items-center justify-between px-8 py-3 shadow-lg">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/">
          <Image src={logo} alt="TSU Text Logo" width={200} height={70} />
        </Link>
      </motion.div>

      <div className="font-tsu-sahitya flex w-2/3 justify-end gap-8 px-8 text-4xl">
        {navigations.map(({ name, link }, index) => (
          <motion.div whileHover={{ scale: 1.1 }} key={index}>
            <Link
              href={link}
              className={`${
                path === link
                  ? "text-tsu-orange-200"
                  : "hover:text-tsu-orange-200"
              }`}
            >
              {" "}
              {name}{" "}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
