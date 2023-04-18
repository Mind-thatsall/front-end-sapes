import React from "react";

const Register = () => {
  return  (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden uppercase ">
     <div className="p-6 m-auto bg-[#9F948B] border-2 border-[#222421] shadow-xl lg:max-w-xl">

        <h1
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
            className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
            Register
        </h1>

        <form
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl">

          <div className="mb-2">
            <label
              for="email"
              className="block text-base">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]">
            </input>
          </div>

          <div className="flex flex-col md:flex-row">
          <div className="mb-2 md:mr-2">
            <label
              htmlFor="firstname"
              className="block text-base">
              Firstname
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190] "/>
          </div>

          <div className="mb-2 md:ml-2">
            <label
              htmlFor="lastname"
              className="block text-base">
              Lastname
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"/>
          </div>
          </div>

           <div className="flex flex-col md:flex-row">
         <div className="mb-2 md:mr-2">
            <label
              htmlFor="password"
              className="block text-base">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"/>
          </div>

          <div className="mb-2 md:ml-2">
            <label
              htmlFor="confirmpassword"
              className="block text-base">
              Confirm Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"/>
          </div>
        </div>

          <div className="mt-5 text-xs form-control">
            <label className="cursor-pointer label">
              <input type="checkbox"/>
              <span className="label-text">{" "}Sign Up for Newsletter</span>
            </label>
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 text-lg text-[#b0a49a] transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36] uppercase">Create an Account</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
