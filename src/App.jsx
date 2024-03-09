import Background from "./components/Background"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./components/About"
import RandomQuote from "./components/RandomQuote"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar logo="UMAR" />
    <Routes>
      <Route path="/" element={<MainSection />}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
