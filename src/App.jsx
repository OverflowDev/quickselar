import About from "./Components/About"
import Hero from "./Components/Hero"
import Offer from "./Components/Offer"
import Service from "./Components/Service"
import Footer from "./Layouts/Footer"
import Navbar from "./Layouts/Navbar"

function App() {

  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Offer />
      <Footer />
    </div>
  )
}

export default App
