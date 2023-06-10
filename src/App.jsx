import About from "./Components/About"
import Hero from "./Components/Hero"
import Information from "./Components/Information"
import Offer from "./Components/Offer"
import Service from "./Components/Service"
import Footer from "./Layouts/Footer"
import Navbar from "./Layouts/Navbar"

function App() {

  return (
    <div className="overflow-hidden m-0 p-0 font-barlow">
      <Navbar />
      <Information />
      <Hero />
      <About />
      <Service />
      <Offer />
      <Footer />
    </div>
  )
}

export default App
