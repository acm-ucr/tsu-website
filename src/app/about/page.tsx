import AboutHeader from "../../components/about/header";
import Polaroid from "../../components/about/polaroid";
import { TopAboutText } from "@/components/about/toptext";
import { BottomAboutText } from "@/components/about/bottomtext";

const About = () => {
  return (
    <div className="bg-tsu-beige-300">
      <AboutHeader />
      <TopAboutText />
      <Polaroid />
      <BottomAboutText />
    </div>
  );
};

export default About;
