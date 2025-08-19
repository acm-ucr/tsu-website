// import ThaiStudentUnion from "@/components/home/ThaiStudentUnion";
// import WhyJoinUs from "@/components/home/whyJoinUs";

// export default function Home() {
//   return (
//     <div className="bg-rose-50">
//       <ThaiStudentUnion />
//       <WhyJoinUs />
//     </div>
//   );
// }

import ThaiStudentUnion from "@/components/home/ThaiStudentUnion";
import WhoAreWe from "@/components/home/whoAreWe";
import WhyJoinUs from "@/components/home/whyJoinUs";
import LoyKrathong from "@/components/home/LoyKrathong";

export default function Home() {
  return (
    <>
      <ThaiStudentUnion />
      <WhoAreWe />
      <WhyJoinUs />
      <LoyKrathong />
    </>
  );
}
