import Navbar from "../components/Navbar";
import AboutMe from "../sections/AboutMe";
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
    </div>
  );
};

export default MainPage;
