import AboutHeader from "../../components/about/header";
import Polaroid from "../../components/about/polaroid";
import { TopAboutText } from "@/components/about/toptext";
import AboutBottom from "../../components/about/aboutbottom";

const About = () => {
  return (
    <div className="bg-tsu-beige-300">
      <AboutHeader />
      <TopAboutText />
      <Polaroid />
      <AboutBottom />
    </div>
  );
};

export default About;
