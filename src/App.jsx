import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Categories from "./views/Categories"
import Shop from "./views/Shop"
import Cart from "./views/Cart"
import Login from "./views/Login"
import Register from "./views/Register"
import Profile from "./views/Profile"
import Article from "./views/Article"
import Cgu from "./views/Cgu"
import Checkout from "./views/Checkout"
import Contact from "./views/Contact"
import Noise from "./components/Noise"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="App bg-[#9F948B] ">
    <Noise />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:id" element={<Shop />} />
      <Route path="women/categories" element={<Categories />} />
      <Route path="women/categories/:id" element={<Shop />} />
      <Route path="men/categories" element={<Categories />} />
      <Route path="men/categories/:id" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cgu" element={<Cgu />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
    <Footer />
    </div>
  )
}

export default App
