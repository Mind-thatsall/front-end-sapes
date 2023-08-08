import React, { useState, useEffect } from "react";
import Account from "../components/Account";
import axios from "axios";
import { getNewAccessToken } from "../services/token";

const Profile = () => {
  const [userData, setUserData] = useState({
    address: "",
    postal_code: "",
    password: "",
    city: "",
    email: "",
    phone_number: "",
  });

  useEffect(() => {
    async function getInformations() {
      await getNewAccessToken();
      const responseUser = await axios.get(
        import.meta.env.VITE_API_URL + "api/secure/user",
        {
          withCredentials: true,
        }
      );
      setUserData(responseUser.data);
      const responseOrders = await axios.get(
        import.meta.env.VITE_API_URL + "api/secure/user/orders",
        {
          withCredentials: true,
        }
      );
      setOrders(responseOrders.data);
    }
    getInformations();
  }, []);

  return (
    <div className="overflow-y-auto grid-cols-12 min-h-screen max-h-screen md:grid grid-rows-12">
      <div className="col-start-2 row-start-2 col-span-10 sm:col-span-12 md:col-start-5 md:col-span-8 lg:col-start-4 lg:col-span-6 mt-20 p-6 m-auto bg-[#9F948B] md:border-2 border-[#222421] shadow-xl">
        <h1
          style={{ fontFamily: "ClashDisplay-Bold" }}
          className="text-2xl font-bold text-center uppercase md:text-3xl lg:text-4xl"
        >
          Profile
        </h1>

        <div
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
        ></div>
        <Account setUserData={setUserData} {...userData} />
      </div>
    </div>
  );
};

export default Profile;
