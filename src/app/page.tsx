import ThaiStudentUnion from "../components/home/ThaiStudentUnion";
import WhoAreWe from "../components/home/whoAreWe";
import WhyJoinUs from "../components/home/whyJoinUs";
import Activities from "../components/home/activities";

export default function Home() {
  return (
    <div className="bg-tsu-beige-300">
      <ThaiStudentUnion />
      <WhoAreWe />
      <WhyJoinUs />
      <Activities />
    </div>
  );
}
