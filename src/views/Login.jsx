import React from "react";

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden uppercase">
     <div className="p-6 m-auto bg-[#9F948B] border-2 border-[#222421] shadow-xl lg:max-w-xl">

        <h1
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
            className="text-2xl text-[#222421] font-bold text-center md:text-3xl lg:text-4xl">
            Login
        </h1>

        <form
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
        >

          <div className="mb-2">
            <label
              for="email"
              className="block text-[#222421]">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]">
            </input>
          </div>

          <div className="mb-2">
            <label
              for="password"
              className="block text-[#222421]">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]">
            </input>
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-[#b0a49a] transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36]">Login</button>
          </div>

        </form>

        <p className="mt-8 text-xs text-center">
        {" "} Don't have an account ? {" "} <a className="hover:underline"> Sign up </a>
        </p>

      </div>
    </div>
  );
};

export default Login;
