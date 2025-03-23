import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Headphones from "./pages/Headphones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails"
import ScrollToTop from "./hooks/ScrollToTop"


function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/earphones" element={<Earphones/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
