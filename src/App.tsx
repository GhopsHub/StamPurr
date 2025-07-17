import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./js/pages/Home"
import Products from "./js/pages/Products"
import AboutUs from "./js/pages/AboutUs"
import Contact from "./js/pages/Contact"
import Navbar from "./js/components/ui/navbar"

function App() {
  return (
    <BrowserRouter basename="/StamPurr/">
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/aboutus/" element={<AboutUs />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
