import Hero from "./Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="h-screen body-font font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App
