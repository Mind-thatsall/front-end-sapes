import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "@/views/Home";
import Categories from "@/views/Categories";
import Shop from "@/views/Shop";
import Cart from "@/views/Cart";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Profile from "@/views/Profile";
import Article from "@/views/Article";
import Cgu from "@/views/Cgu";
import Checkout from "@/views/Checkout";
import Contact from "@/views/Contact";
import Noise from "@/components/Noise";
import Navbar from "@/components/Navbar";
import SideBars from "@/components/Sidebars";
import useSWR from "swr";
import {
  cartApiEndPoint,
  getCartItems,
  addCartItem,
  deleteCartItem,
} from "@/services/cartApi";
import { useAuth } from "./components/AuthProvider";

function App() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const {
    data: cartItems,
    mutate,
    isLoading,
    error,
  } = useSWR(['api/secure/user/cart'], getCartItems);

  const addToCartMutation = async (newItem, token) => {
    if(token) {
      try {
        await addCartItem(newItem);
        mutate();
      } catch (e) {
        throw new Error("Error adding to cart", e.message);
      }
    } else {
      navigate("/login")
    }
    
  };

  const removeCartMutation = async (id, size) => {
    try {
      await deleteCartItem(id, size);
      mutate();
    } catch (e) {
      throw new Error("Error removing from cart", e.message);
    }
  };


  return (
    <div className="App bg-[#9F948B]">
      <Noise />
      <Navbar cartSize={cartItems && cartItems.quantity} errorState={error} loadingState={isLoading} />
      <SideBars rotate="" side="left-0" />
      <SideBars rotate="rotate-180" side="right-0" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/categories/:id"
          element={<Shop addToCartMutation={addToCartMutation} />}
        />
        <Route
          path="women/categories"
          element={<Categories gender={"women"} />}
        />
        <Route
          path="women/categories/:id"
          element={<Shop addToCartMutation={addToCartMutation} />}
        />
        <Route path="men/categories" element={<Categories gender={"men"} />} />
        <Route
          path="men/categories/:id"
          element={<Shop addToCartMutation={addToCartMutation} />}
        />
        <Route
          path="/shop"
          element={<Shop addToCartMutation={addToCartMutation} />}
        />
        <Route path="/article/:id" element={<Article addToCartMutation={addToCartMutation} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={token ? <Cart errorState={error} loadingState={isLoading}  items={cartItems} removeFromCart={removeCartMutation} /> : <Navigate to="/login"/>}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
