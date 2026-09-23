import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Volunteer from './components/Volunteer'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cream focus:px-4 focus:py-2"
      >
        Saltar para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
