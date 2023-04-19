import React from "react";


const Account = () => {
  return (

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
            className="block w-full px-4 py-2 mt-2 border-2 border-[#222421] text-black-700 focus:border-black-900 bg-[#9a9087] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]" />
        </div>

        <div className="mb-2 sm:ml-2 sm:w-1/2">
          <label
            htmlFor="lastname"
            className="block">
            Lastname
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-black-700 border-2 border-[#222421] text-black-700 focus:border-black-900 bg-[#9a9087] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]" />
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
          className="block w-full px-4 py-2 mt-2 border-2 border-[#222421] text-black-700 focus:border-black-900 bg-[#9a9087] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]" />
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
            className="block w-full px-4 py-2 mt-2 border-2 border-[#222421] text-black-700 focus:border-black-900 bg-[#9a9087] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]" />
        </div>

        <div className="mb-2 md:ml-2">
          <label
            htmlFor="repassword"
            className="block">
            Retype password
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 border-2 border-[#222421] text-black-700 focus:border-black-900 bg-[#9a9087] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]" />
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
          className="block w-full px-4 py-2 mt-2 border-2 border-[#222421] text-black-700 focus:border-black-900 bg-[#9a9087] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190] " />
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
            className="block w-full px-4 py-2 mt-2 border-2 border-[#222421] text-black-700 focus:border-black-900 bg-[#9a9087] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190] " />
        </div>

        <div className="mb-2 md:ml-2">
          <label
            htmlFor="city"
            className="block">
            City
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 border-2 border-[#222421] text-black-700 focus:border-black-900 bg-[#9a9087] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]" />
        </div>
      </div>

      <div
        style={{ fontFamily: "ClashDisplay-Medium" }}
        className="mt-6 text-xl"
      >
        <div className="flex flex-col sm:flex-row">
          <div className="mb-2 sm:mr-2 sm:w-1/2">
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-[#b0a49a] transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36] ">Update</button>
            </div>
          </div>

          <div className="mb-2 sm:ml-2 sm:w-1/2">
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-[#b0a49a] transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36] ">Delete account</button>
            </div>
          </div>

          <div className="mb-2 sm:ml-2 sm:w-1/2">
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-[#b0a49a] transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36] ">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </form>


  );
};

export default Account;
