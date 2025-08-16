"use client";

import Activities from "./activities";
import placeholder from "@/public/placeholder.webp";

const LoyKrathong = () => {
  return (
    <Activities
      backgroundColor="bg-tsu-pink-100"
      borderColor="border-tsu-pink-200"
      image={placeholder}
      activityName="Loy Krathong"
      activityDesc="Loy Krathong is the water lantern festival that happens on the full-moon day of the twelfth month of the lunar calendar. “Loy” means “to float” and “krathong” refers to the small, floating offerings. The purpose of Loy Krathong is to let go of bad energy and bad luck and let it flow down the river to let the water goddess, Phra Mae Khongkha, cleanse the energy and luck. It also serves as a thank you to Phra Mae Khongkha for providing resources through water, as well as an apology to her for how we use those resources."
    />
  );
};

export default LoyKrathong;
