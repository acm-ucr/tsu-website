import Header from "@/components/header";
import Polaroid from "../../components/about/polaroid";
import { TopAboutText } from "@/components/about/toptext";
import AboutBottom from "../../components/about/aboutbottom";

const About = () => {
  return (
    <div className="bg-tsu-beige-300">
      <Header header="About Us" />
      <TopAboutText />
      <Polaroid />
      <AboutBottom />
    </div>
  );
};

export default About;
