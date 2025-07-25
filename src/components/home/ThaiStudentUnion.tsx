"use client";

import Image from "next/image";
import React from "react";

const ThaiStudentUnion = () => {
  return (
    <main className="space-y-32 bg-rose-50 pb-20">
      {/* Section 1: Thai Student Union Intro */}
      <section className="relative mx-4 flex min-h-[400px] flex-col overflow-hidden rounded-xl border-l-8 border-pink-400 bg-rose-50 p-12 md:flex-row">
        <div className="z-10 max-w-3xl">
          <h1 className="mb-4 font-serif text-7xl">Thai Student Union</h1>
          <p className="font-serif text-xl text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>

        {/* Palm Tree Image */}
        <Image
          src="/palmTree.webp"
          alt="Palm Tree"
          width={500}
          height={500}
          className="absolute bottom-[-15px] left-[600px] hidden md:block"
        />
      </section>

      {/* Section 2: Why Join Us */}
      <section className="relative mx-4 flex min-h-[140px] items-center overflow-visible rounded-xl bg-rose-50 px-12 pt-12 pb-20">
        {/* Yellow vertical bar matching mango image height */}
        <div className="relative -top-15 mr-0 h-[50px] w-2 rounded-l bg-yellow-400" />

        {/* Content with left margin */}
        <div className="ml-1 max-w-3xl">
          <h2 className="mb-4 text-5xl font-bold">Why Join Us?</h2>
          <p className="font-serif text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Mango Images */}
        <Image
          src="/mango.webp"
          alt="Mango Left"
          width={200}
          height={200}
          className="absolute bottom-[-65px] left-[-35px] hidden scale-x-[1] -rotate-[180deg] md:block"
        />
        <Image
          src="/mango.webp"
          alt="Mango Right"
          width={200}
          height={200}
          className="absolute top-[-25px] left-[715px] hidden rotate-[15deg] md:block"
        />
      </section>

      {/* Blue bar separate from the yellow section */}
      <div className="mx-4 mt-4 ml-[2%] h-3 w-[95%] rounded bg-blue-400" />
    </main>
  );
};

export default ThaiStudentUnion;
