import AboutHeader from "../../components/about/header";
import Polaroid from "../../components/about/polaroid";
import AboutBottom from "../../components/about/aboutbottom";

const About = () => {
  return (
    <div className="bg-tsu-beige-300">
      <AboutHeader />
      <Polaroid />
      <AboutBottom />
    </div>
  );
};

export default About;
