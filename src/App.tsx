import Hero from "./Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="h-screen body-font font-poppins">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
