import React, { useState } from "react";
import Account from "../components/Account";
import History from "../components/History";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");
  console.log(activeTab);

  return (
    <div className="grid grid-cols-12 grid-rows-12 min-h-screen max-h-screen overflow-y-auto">
      <div className="col-start-2 row-start-2 col-span-10 sm:col-span-12 md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-6 mt-20 p-6 m-auto bg-white rounded-md shadow-md">
        <h1
          style={{ fontFamily: "ClashDisplay-Bold" }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"
        >
          Profile
        </h1>

        <div
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="mb-2 sm:mr-2 sm:w-1/2">
              <div className="mt-6">
                <button
                  className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 ${
                    activeTab === "account" && "bg-gray-700"
                  }`}
                  onClick={() => setActiveTab("account")}
                >
                  Account
                </button>
              </div>
            </div>

            <div className="mb-2 sm:ml-2 sm:w-1/2">
              <div className="mt-6">
                <button
                  className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 ${
                    activeTab === "orders" && "bg-gray-700"
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  Orders
                </button>
              </div>
            </div>
          </div>
        </div>

        {activeTab === "account" ? <Account /> : <History />}
      </div>
    </div>
  );
};

export default Profile;
