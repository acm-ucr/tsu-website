// import Image from "next/image";
// import React from "react";

// const ThaiStudentUnion = () => {
//   return (
//     <div className="relative space-y-32 bg-[var(--color-bg-rose-50)] pb-20">
//       <div className="relative mx-4 flex min-h-[25vh] flex-col overflow-hidden rounded-xl border-l-8 border-[var(--color-border-pink-400)] bg-[var(--color-bg-rose-50)] p-12 md:flex-row">
//         <div className="z-10 max-w-3xl">
//           <p className="mb-4 font-serif text-7xl">Thai Student Union</p>
//           <p className="font-serif text-xl text-[var(--color-text-gray-700)]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
//           </p>
//         </div>

//         {/* Palm Tree Image */}
//         <Image
//           src="/palmTree.webp"
//           alt="Palm Tree"
//           width={200}
//           height={200}
//           className="absolute bottom-[1] left-[35vw] hidden md:block w-[15vw] h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default ThaiStudentUnion;

import Image from "next/image";
import PalmTree from "@/public/palmTree.webp";

const ThaiStudentUnion = () => {
  return (
    <div className="relative ml-30 min-h-[60vh] py-20">
      <div className="border-tsu-pink-100 border-l-8 px-10">
        <p className="mb-4 font-serif text-8xl">Thai Student Union</p>
        <p className="w-[60vw] font-serif text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <Image
        src={PalmTree}
        alt="Palm Tree"
        className="absolute right-[240] bottom-[75] w-[32vw]"
      />
    </div>
  );
};

export default ThaiStudentUnion;
