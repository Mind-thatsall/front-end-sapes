import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [errors, setErrors] = useState({});
  const confirmPasswordRef = useRef(null);

  function checkInputs() {
    const errorsObj = {};

    // First we check if inputs are empty
    if (email === "") errorsObj["email"] = "Please enter an email";

    if (firstName === "")
      errorsObj["firstname"] = "Please enter your first name";

    if (lastName === "") errorsObj["lastname"] = "Please enter your last name";

    if (password === "") {
      errorsObj["password"] = "Please enter a password.";
    } else {
      // If password is not empty we check if it's a valid password

      // We check if there's at least 1 lower case
      if (!password.match(/[a-z]/gm)) {
        // if the key "password" doesn't exist yet we create it
        if (!errorsObj["password"]) errorsObj["password"] = {};

        // If there's an error we create a new key-value pair inside password
        errorsObj["password"]["lowercase"] = "Must include at least 1 lower-case letter.";
      }

      // We check if there's at least 1 upper case
      if (!password.match(/[A-Z]/gm)) {
        if (!errorsObj["password"]) errorsObj["password"] = {};
        errorsObj["password"]["uppercase"] = "Must include at least 1 upper-case letter.";
      }

      // We check if there's at least 1 number
      if (!password.match(/[0-9]/gm)) {
        if (!errorsObj["password"]) errorsObj["password"] = {};
        errorsObj["password"]["number"] = "Must include at least 1 number.";
      }

      // We check if there's at least 1 special character (!#%)
      if (!password.match(/[!#%]/gm)) {
        if (!errorsObj["password"]) errorsObj["password"] = {};
        errorsObj["password"]["specialChar"] = "Must include at least 1 special character (only the following special characters are allowed: !#%).";
      }
    }

    // We check if both passwords are the same
    if (password !== confirmPasswordRef.current.value)
      errorsObj["passwords"] = "The passwords doesn't match";

    // We put all the errors inside the state
    setErrors(errorsObj);
    console.log(typeof errorsObj["password"]);

    // We return a boolean checking if there's any errors to make the post request
    return Object.keys(errorsObj).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkInputs()) {
      await axios
        .post(import.meta.env.API_URL + "api/users", {
          email: email,
          firstname: firstName,
          lastname: lastName,
          password: password,
          newsletter: newsLetter,
          roles: ["ROLES_USER"],
        })
        .then(() => {
          navigate("/login");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden uppercase ">
      <div className="p-6 m-auto bg-[#9F948B] border-2 border-[#222421] shadow-xl lg:max-w-xl">
        <h1
          style={{ fontFamily: "ClashDisplay-SemiBold" }}
          className="text-2xl font-bold text-center md:text-3xl lg:text-4xl"
        >
          Register
        </h1>

        {(errors["password"] && typeof errors["password"] !== "string") ?
          Object.values(errors["password"]).map((error, index) => <p key={index}>{error}</p>) : ""}

        <form
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
          onSubmit={handleSubmit}
          method="post"
        >
          <div className="mb-2">
            <label for="email" className="block text-base">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: errors["email"] && "#ff3b3b" }}
              className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"
            ></input>
            <p
              className={`text-sm text-[#ff3b3b] mt-1 ${
                !errors["email"] && "hidden"
              }`}
            >
              {errors["email"]}
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mb-2 md:mr-2">
              <label htmlFor="firstname" className="block text-base">
                Firstname
              </label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                style={{ borderColor: errors["firstname"] && "#ff3b3b" }}
                className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190] "
              />
              <p
                className={`text-sm text-[#ff3b3b] mt-1 ${
                  !errors["firstname"] && "hidden"
                }`}
              >
                {errors["firstname"]}
              </p>
            </div>

            <div className="mb-2 md:ml-2">
              <label htmlFor="lastname" className="block text-base">
                Lastname
              </label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                style={{ borderColor: errors["lastname"] && "#ff3b3b" }}
                className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"
              />
              <p
                className={`text-sm text-[#ff3b3b] mt-1 ${
                  !errors["lastname"] && "hidden"
                }`}
              >
                {errors["lastname"]}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mb-2 md:mr-2">
              <label htmlFor="password" className="block text-base">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: errors["password"] && "#ff3b3b"}}
                className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"
              />
            </div>

            <div className="mb-2 md:ml-2">
              <label htmlFor="confirmpassword" className="block text-base">
                Confirm Password
              </label>
              <input
                ref={confirmPasswordRef}
                type="password"
                style={{ borderColor: errors["password"] && "#ff3b3b"}}
                className="block w-full px-4 py-2 mt-2 text-[#222421] bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#22242190]"
              />
            </div>
          </div>

          <div className="mt-5 text-xs form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" />
              <span className="label-text"> Sign Up for Newsletter</span>
            </label>
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 text-lg text-[#b0a49a] transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36] uppercase">
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
