import Hero from "./Hero"
import About from "./components/About"
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
    </div>
  )
}

export default App
