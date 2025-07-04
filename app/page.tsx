import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  )
}
