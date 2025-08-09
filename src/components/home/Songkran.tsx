"use client";

import Activities from "./activities";
import placeholder from "@/public/placeholder.webp";

const Songkran = () => {
  return (
    <Activities
      backgroundColor="bg-tsu-green-200"
      borderColor="border-tsu-green-400"
      image={placeholder}
      activityName="Songkran"
      activityDesc="Songkran is the Thai New Year that happens every year from April 13 to 15. Water is used to splash each other as a way to wash away the bad luck from the previous year and start anew. It is also a way to show respect and bring good fortune to the new year."
    />
  );
};

export default Songkran;
