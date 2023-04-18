import React from "react";

const Contact = () => {
  return (
    <div className="grid max-h-screen min-h-screen grid-cols-12 overflow-y-auto grid-rows-12">
      <div className="col-start-3 col-end-12 row-start-6 pt-10 m-auto row-end-12 sm:row-start-2 sm:row-end-5 md:ml-0">
        <h3 style={{ fontFamily: "ClashDisplay-Bold" }} className="text-xl">
          OPEN DAILY{" "}
        </h3>
        <p style={{ fontFamily: "ClashDisplay-Medium" }} className="mb-5 text-base uppercase">
          9am to 7pm
        </p>
        <hr style={{ borderColor: "black", margin: "10px 0" }} />

        <h3 style={{ fontFamily: "ClashDisplay-Bold" }} className="text-xl">
          PHONE
        </h3>
        <p style={{ fontFamily: "ClashDisplay-Medium" }} className="mb-5">
          +33 (0)1 99 99 99 99
        </p>
        <hr style={{ borderColor: "black", margin: "10px 0" }} />

        <h3 style={{ fontFamily: "ClashDisplay-Bold" }} className="text-xl">
          EMAIL
        </h3>
        <p style={{ fontFamily: "ClashDisplay-Medium" }} className="mb-5">
          contact@sapesavenue.com
        </p>
        <hr style={{ borderColor: "black", margin: "10px 0" }} />

        <h3 style={{ fontFamily: "ClashDisplay-Bold" }} className="text-xl">
          OFFICE
        </h3>
        <p style={{ fontFamily: "ClashDisplay-Medium" }} className="mb-5">
          10 rue de Penthievre - 75008 - Paris
        </p>
      </div>

      <div className="mt-20 col-start-2 col-end-12 md:col-start-5 md:col-end-12 md:row-start-2 uppercase md:row-end-12 row-start-2 row-end-5 p-6 m-auto bg-[#9F948B] border-2 border-[#222421] shadow-xl">
        <h1
          style={{ fontFamily: "ClashDisplay-SemiBold" }}
          className="text-2xl font-bold text-center md:text-3xl lg:text-4xl"
        >
          Contact
        </h1>

        <form
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="mb-2 md:mr-2">
              <label htmlFor="firstname" className="block">
                Firstname
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#222421b7] text-[#222421]"
                placeholder="John"
              />
            </div>

            <div className="mb-2 md:ml-2">
              <label htmlFor="lastname" className="block">
                Lastname
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#222421b7] text-[#222421]"
              placeholder="Doe"
              />
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#222421b7] text-[#222421]"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Subject" className="block">
              Subject
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#222421b7] text-[#222421]"
              placeholder="Enter the subject of your email"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Message" className="block">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block w-full px-4 py-2 mt-2 bg-[#9a9087] border-2 border-[#222421] focus-visible:outline-none focus:bg-[#90867d] transition-colors placeholder:text-[#222421b7] text-[#222421]"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-[#b0a49a] transition-colors duration-200 transform bg-[#222421] hover:bg-[#30322e] active:bg-[#383a36] ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
