import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {

  return (
    <div className="h-screen body-font font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
