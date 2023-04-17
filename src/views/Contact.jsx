import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 min-h-screen max-h-screen overflow-y-auto " >

<div className="pt-10 col-start-2 col-end-12 row-start-6 row-end-12 sm:row-start-2 sm:row-end-5 m-auto md:ml-0">        
        <h3 style={{ fontFamily: "ClashDisplay-Bold" }} className="text-xl">OPEN DAILY </h3>
        <p style={{ fontFamily: "ClashDisplay-Medium" }}  className="mb-5 ">9am to 7pm</p>
        <hr style={{ borderColor: "black", margin: "10px 0" }} />
        
        <h3 style={{ fontFamily: "ClashDisplay-Bold" }} className="text-xl">PHONE</h3>
        <p style={{ fontFamily: "ClashDisplay-Medium" }}  className="mb-5">+33 (0)1 99 99 99 99</p>
        <hr style={{ borderColor: "black", margin: "10px 0" }} />
        
        <h3 style={{ fontFamily: "ClashDisplay-Bold" }} className="text-xl">EMAIL</h3>
        <p style={{ fontFamily: "ClashDisplay-Medium" }} className="mb-5">contact@sapesavenue.com</p>
        <hr style={{ borderColor: "black", margin: "10px 0" }} />
        
        <h3 style={{ fontFamily: "ClashDisplay-Bold" }} className="text-xl">OFFICE</h3>
        <p style={{ fontFamily: "ClashDisplay-Medium" }}  className="mb-5">10 rue de Penthievre - 75008 - Paris</p>
      </div>

      <div className="mt-20 col-start-2 col-end-12 md:col-start-4 md:col-end-12 md:row-start-3 md:row-end-12 row-start-2 row-end-5 p-6 m-auto bg-white rounded-md shadow-md ">
        <h1 
            style={{ fontFamily: "ClashDisplay-Bold" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Contact
        </h1>
        
        <form 
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="mt-6 text-xl"
        >
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

          <div className="mb-2">
            <label
              htmlFor="Subject"
              className="block">
              Subject
            </label>
            <input 
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 "/>
          </div>

          <div className="mb-2">
            <label
              htmlFor="Message"
              className="block">
              Message
            </label>
            <textarea 
              id="message"
              rows={4}
              className="block w-full px-4 py-2 mt-2 text-black-700 border rounded-lg focus:border-black-900 ">
            </textarea>
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700  ">Send Message</button>
          </div>
          
        </form>
      </div>
      </div>
   
  );
};

export default Contact;
