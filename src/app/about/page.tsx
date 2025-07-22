import AboutHeader from "../../components/about/header";
import Polaroid from "../../components/about/polaroid";
import Elephant from "../../components/about/elephant";

const About = () => {
  return (
    <div className="bg-tsu-beige-300">
      <AboutHeader />
      <Polaroid />
      <Elephant />
    </div>
  );
};

export default About;
