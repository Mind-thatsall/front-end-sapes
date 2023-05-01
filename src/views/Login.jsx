import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setToken,token} = useAuth();
  const [error,setError] = useState();

  const handleSubmit = async (e) => {
    
    e.preventDefault();

      await axios.post(import.meta.env.VITE_API_URL + "api/login_check", {
        username: email,
        password: password,
      }, {
        withCredentials: true
      })
      .then((response) => {
        console.log(response)
        Cookies.set('refresh_token', response.data.refresh_token)
        setToken(response.data.refresh_token)
        navigate("/");
      })
      .catch((error) =>{
        console.log(error);
        if(error.response.status === 401) setError("Your email address and password are incorrect.");
      })
  }


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden uppercase">
     <div className="p-6 m-auto bg-[#9F948B] md:border-2 md:border-[#222421] md:shadow-xl">

        <h1
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
            className="text-2xl text-[#222421] font-bold text-center md:text-3xl lg:text-4xl">
            Login
        </h1>
        {error && <p className="border border-[#c12522] mb-2 text-[#c12522] bg-[#c1252220] p-2 max-w-xs mt-2">{error}</p>}
        <form
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
          onSubmit={handleSubmit}
        >

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-[#222421]">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 shadow-lg md:shadow-none border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]">
            </input>
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-[#222421]">
              Password
            </label>
            <input
              type="password"
              autoComplete="true"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] shadow-lg md:shadow-none border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]">
            </input>
          </div>

          <div className="mt-6">
            <button className="uppercase w-full px-4 py-2 tracking-wide text-[#b0a49a] shadow-lg md:shadow-none transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36]">Login</button>
          </div>

        </form>

        <p className="mt-8 text-xs text-center">
        {" "} Don't have an account ? {" "} <Link to="/register" className="hover:underline"> Sign up </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
