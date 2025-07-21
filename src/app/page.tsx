// "use client";

// import ThaiStudentUnion from "../components/home/ThaiStudentUnion";
// import WhoAreWe from "../components/home/whoAreWe";
// import JoinUs from "../components/home/whyJoinUs"; 

// export default function Home() {
//   return (
//     <main className="space-y-12">
//       <ThaiStudentUnion />
//       <WhoAreWe />
//       <JoinUs />
//     </main>
//   );
// }

"use client";

import ThaiStudentUnion from "../components/home/ThaiStudentUnion";
// import WhoAreWe from "../components/home/whoAreWe"; // remove for now
// import JoinUs from "../components/home/whyJoinUs"; // remove for now

export default function Home() {
  return (
    <main className="space-y-12">
      <ThaiStudentUnion />
    </main>
  );
}