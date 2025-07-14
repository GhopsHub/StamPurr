import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter basename="/StamPurr">
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
