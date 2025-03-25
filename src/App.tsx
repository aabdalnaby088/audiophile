import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Headphones from "./pages/Headphones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails"
import ScrollToTop from "./hooks/ScrollToTop"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Checkout from "./pages/Checkout"


function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Provider store={store} >
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/earphones" element={<Earphones/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
      </Provider>
    </BrowserRouter>

  )
}

export default App
