import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./js/pages/Home";
import Products from "./js/pages/Products";
import AboutUs from "./js/pages/AboutUs";
import Contact from "./js/pages/Contact";
import ProductDetail from "./js/pages/ProductDetail";
import Navbar from "./js/components/ui/navbar";
import Footer from "./js/components/ui/footer";

function App() {
  return (
    <BrowserRouter basename="/StamPurr/">
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/aboutus/" element={<AboutUs />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
