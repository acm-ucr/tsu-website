import ThaiStudentUnion from "../components/home/ThaiStudentUnion";
import WhoAreWe from "../components/home/whoAreWe";
import WhyJoinUs from "../components/home/whyJoinUs";

export default function Home() {
  return (
    <div className="bg-tsu-beige-300">
      <ThaiStudentUnion />
      <WhoAreWe />
      <WhyJoinUs />
    </div>
  );
}
