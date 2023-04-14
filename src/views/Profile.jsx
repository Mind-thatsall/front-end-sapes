import React from "react";


const Profile = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 min-h-screen ">


<div className="col-start-2 row-start-2 col-span-10 sm:col-span-12 md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-6 mt-20 p-6 m-auto bg-white rounded-md shadow-md">        
        <h1 
            style={{ fontFamily: "ClashDisplay-Bold" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Profile
        </h1>
        
        <form 
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
        >
       <div className="flex flex-col sm:flex-row">
        <div className="mb-2 sm:mr-2 sm:w-1/2">
            <label  
              htmlFor="firstname"
              className="block">
              Firstname
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>

          <div className="mb-2 sm:ml-2 sm:w-1/2">
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

          <div className="mb-2">
            <label  
              htmlFor="email"
              className="block">
              Email
            </label>
            <input 
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>
          <div className="flex flex-col md:flex-row"> 
         <div className="mb-2 md:mr-2">
            <label  
              htmlFor="password"
              className="block">
              Password
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>

          <div className="mb-2 md:ml-2">
            <label  
              htmlFor="repassword"
              className="block">
              Retype password
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>
        </div> 
        <div className="mb-2">
            <label  
              htmlFor="address"
              className="block">
              Address
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>
          
          <div className="flex flex-col md:flex-row"> 
         <div className="mb-2 md:mr-2">
            <label  
              htmlFor="zipcode"
              className="block">
              ZIP code
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>

          <div className="mb-2 md:ml-2">
            <label  
              htmlFor="city"
              className="block">
              City
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>
        </div>  
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700  ">Update</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Profile;
