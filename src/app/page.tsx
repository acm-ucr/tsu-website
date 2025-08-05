import ThaiStudentUnion from "@/components/home/ThaiStudentUnion";
// import WhoAreWe from "@/components/home/whoAreWe";
import WhyJoinUs from "@/components/home/whyJoinUs";

export default function Home() {
  return (
    <div className="bg-rose-50">
      <ThaiStudentUnion />
      {/* <WhoAreWe /> */}
      <WhyJoinUs />
    </div>
  );
}
