import Navbar from "../components/Navbar";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
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
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
