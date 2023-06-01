import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import IndexPage from "./Components/IndexPage"
import Products from "./Components/Products"
import Aurora from "./Components/Aurora"

function App() {

  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/aurora" element={<Aurora/>}/>
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
