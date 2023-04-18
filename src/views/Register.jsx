import React from "react";

const Register = () => {
  return  (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
     <div className="p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">

        <h1 
            style={{ fontFamily: "ClashDisplay-Bold" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Register
        </h1>
        
        <form 
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl">

          <div className="mb-2">
            <label  
              for="email"
              className="block">
              Email
            </label>
            <input 
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 ">
            </input>
          </div>

          <div className="flex flex-col md:flex-row"> 
          <div className="mb-2 md:mr-2">
            <label  
              htmlFor="firstname"
              className="block">
              Firstname
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>

          <div className="mb-2 md:ml-2">
            <label  
              htmlFor="lastname"
              className="block">
              Lastname
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>
          </div> 

           <div className="flex flex-col md:flex-row"> 
         <div className="mb-2 md:mr-2">
            <label  
              htmlFor="password"
              className="block">
              Password
            </label>
            <input 
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>

          <div className="mb-2 md:ml-2">
            <label  
              htmlFor="confirmpassword"
              className="block">
              Confirm Password
            </label>
            <input 
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>
        </div>   

          <div className="form-control mt-5 text-xs">
            <label className="label cursor-pointer">
              <input type="checkbox"/>
              <span className="label-text">{" "}Sign Up for Newsletter</span> 
            </label>
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700  ">Create an Account</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
