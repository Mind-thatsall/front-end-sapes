import React, { useState, useEffect } from "react";
import Account from "../components/Account";
import History from "../components/History";
import axios from "axios";
import { getNewAccessToken } from "../services/token";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [userData, setUserData] = useState({
    address: "",
    postal_code: "",
    password: "",
    city: "",
    email: "",
    phone_number: ""
  })
  const [orders, setOrders] = useState();

  useEffect(() => {
    async function getInformations() {
      await getNewAccessToken();
      const responseUser = await axios.get(import.meta.env.VITE_API_URL + "api/secure/user", {
        withCredentials: true
      })
      setUserData(responseUser.data);
      const responseOrders = await axios.get(import.meta.env.VITE_API_URL + "api/secure/user/orders", {
        withCredentials: true
      })
      setOrders(responseOrders.data);
      
    }
    getInformations();
  
  }, [])
  

  return (
    <div className="grid max-h-screen min-h-screen grid-cols-12 overflow-y-auto grid-rows-12">
      <div className="col-start-2 row-start-2 col-span-10 sm:col-span-12 md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-6 mt-20 p-6 m-auto bg-[#9F948B] border-2 border-[#222421] shadow-xl">
        <h1
          style={{ fontFamily: "ClashDisplay-Bold" }}
          className="text-2xl font-bold text-center md:text-3xl lg:text-4xl uppercase"
        >
          Profile
        </h1>

        <div
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
        >
          <div className="flex flex-col sm:flex-row ">
            <div className="mb-2 sm:mr-2 sm:w-1/2">
              <div className="mt-6">
                <button
                  className={`w-full px-4 py-2 tracking-wide transition-colors duration-200 uppercase transform border-2 border-[#222421] hover:bg-[#30322e] hover:text-[#9F948B] active:bg-[#383a36] ${
                    activeTab === "account" ? "bg-[#222421] text-[#9F948B]" : "bg-[#9F948B] text-[#222421]"
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
                  className={`w-full px-4 py-2 tracking-wide transition-colors uppercase duration-200 transform border-2 border-[#222421] hover:bg-[#30322e] hover:text-[#9F948B] active:bg-[#383a36] ${
                    activeTab === "orders" ? "bg-[#222421] text-[#9F948B]" : "bg-[#9F948B] text-[#222421]"
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  Orders
                </button>
              </div>
            </div>
          </div>
        </div>
        {activeTab === "account" ? <Account setUserData={setUserData} {...userData} /> : <History orders={orders} />}
      </div>
    </div>
  );
};

export default Profile;
