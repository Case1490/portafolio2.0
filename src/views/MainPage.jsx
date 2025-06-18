import Navbar from "../components/Navbar";
import AboutMe from "../sections/AboutMe";
import Portfolio from "../sections/Portfolio";
import Presentation from "../sections/Presentation";
import Services from "../sections/Services";
import Skills from "../sections/Skills";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Presentation />
      <AboutMe />
      <Skills />
      <Services />
      <Portfolio />
    </div>
  );
};

export default MainPage;
