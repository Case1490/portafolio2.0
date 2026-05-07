import './index.css'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App