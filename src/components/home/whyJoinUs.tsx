// import Image from "next/image";
// import React from "react";

// const WhyJoinUs = () => {
//   return (
//     <div className="relative w-full flex min-h-[15vh] items-center overflow-visible rounded-xl bg-[var(--color-bg-rose-50)] px-12 pt-12 pb-60">
//       {/* Yellow vertical bar */}
//       <div className="relative -top-4 mr-0 h-12 w-2 rounded-l bg-[var(--color-yellow-400)]" />

//       {/* Content */}
//       <div className="ml-4 max-w-3xl">
//         <p className="mb-4 text-5xl font-bold">Why Join Us?</p>
//         <p className="font-serif text-lg text-[var(--color-text-gray-700)]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//           ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>

//       {/* Mango Images */}
//       <Image
//         src="/mango.webp"
//         alt="Mango Left"
//         width={90}
//         height={90}
//         className="absolute bottom-[70] left-[-1.5vw] hidden scale-x-100 -rotate-180 md:block w-[10vw] h-auto"
//       />
//       <Image
//         src="/mango.webp"
//         alt="Mango Right"
//         width={90}
//         height={90}
//         className="absolute top-[-4.5vh] left-[31vw] hidden rotate-15 md:block w-[10vw] h-auto"
//       />

//       {/* Blue bottom border */}
//       <div className="absolute bottom-0 left-0 h-3 w-full rounded bg-[var(--color-blue-400)]" />
//     </div>
//   );
// };

// export default WhyJoinUs;

import Image from "next/image";
import Mango from "@/public/mango.webp";

const WhyJoinUs = () => {
  return (
    <div className="relative w-full min-h-[80vh]">
      <Image
        src={Mango}
        alt="Top Mango"
        className="absolute top-[-95] right-[45] w-[15vw]"
      />
      <div className="font-tsu-sahitya mx-30 w-[85vw] py-20 pb-150 border-b-8 border-tsu-blue-100">
        <div className="mb-4 flex items-baseline gap-3">
          <div className="border-tsu-orange-100 h-10 border-l-8" />
          <p className="text-5xl">Why Join Us?</p>
        </div>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <Image
        src={Mango}
        alt="Bottom Mango"
        className="absolute bottom-[420] left-[-40] w-[15vw] rotate-180"
      />
    </div>
  );
};

export default WhyJoinUs;