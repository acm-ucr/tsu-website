import ThaiStudentUnion from "../components/home/ThaiStudentUnion";
import WhoAreWe from "../components/home/whoAreWe";
import WhyJoinUs from "../components/home/whyJoinUs";
import LoyKrathong from "@/components/home/LoyKrathong";

export default function Home() {
  return (
    <div className="bg-tsu-beige-300">
      <ThaiStudentUnion />
      <WhoAreWe />
      <WhyJoinUs />
      <LoyKrathong />
    </div>
  );
}
