import AboutHeader from "../../components/about/header";
import Polaroid from "../../components/about/polaroid";
import { TopAboutText } from "@/components/about/toptext";

const About = () => {
  return (
    <div className="bg-tsu-beige-300">
      <AboutHeader />
      <TopAboutText />
      <Polaroid />
    </div>
  );
};

export default About;
