import { Routes, Route } from "react-router-dom";
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

function App() {
  const {
    data: cartItems,
    mutate,
    isLoading,
  } = useSWR(cartApiEndPoint, getCartItems);

  const addToCartMutation = async (newItem) => {
    try {
      await addCartItem(newItem);
      mutate();
    } catch (e) {
      throw new Error("Error adding to cart", e.message);
    }
  };

  const removeCartMutation = async (id) => {
    try {
      await deleteCartItem(id);
      mutate();
    } catch (e) {
      throw new Error("Error removing from cart", e.message);
    }
  };

  return (
    <div className="App bg-[#9F948B]">
      <Noise />
      <Navbar cartSize={cartItems && cartItems.length} />
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
        <Route path="/article/:id" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart items={cartItems} removeFromCart={removeCartMutation} />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
