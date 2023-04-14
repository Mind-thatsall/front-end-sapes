import React from "react";
import article from "@/assets/images/men.jpg";

const Article = () => {
  return (
    <div className="md:px-[4vw] h-screen relative flex flex-col md:grid md:grid-cols-8 lg:grid-cols-12 grid-rows-6">
      <div className="relative w-full h-20vh md:h-auto md:col-start-1 md:row-start-1 md:col-end-5 lg:col-end-7 md:row-end-7">
        <img
          className="w-full h-[60vh] md:h-full md:static"
          src={article}
          alt="black hoodie"
          width={310}
          height={450}
        />
        <img
          className="w-full h-[60vh] md:h-full absolute md:static top-0"
          src={article}
          alt="black hoodie"
          width={310}
          height={450}
        />
        <img
          className="w-full h-[60vh] md:h-full absolute md:static top-0"
          src={article}
          alt="black hoodie"
          width={310}
          height={450}
        />
      </div>
      <h2
        style={{ fontFamily: "ClashDisplay-Bold" }}
        className="ml-[4vw] mt-[4vw] w-max md:col-start-4 md:col-end-7 md:ml-[5vw] lg:ml-0 md:row-start-1 md:row-end-3 lg:col-start-6 lg:col-end-10 lg:row-start-1 lg:row-end-3 md:self-end text-[8vw] mix-blend-difference text-[#796B66] md:w-min leading-[7vw]"
      >
        BLACK HOODIE
      </h2>
      <p
        style={{ fontFamily: "ClashDisplay-Medium" }}
        className="text-[3.5vw] ml-[3vw] mt-[4vw] md:ml-0 md:mt-0 leading-[4.5vw] md:text-[1.5vw] md:leading-[2.2vw] self-center lg:text-[1.2vw] lg:leading-[2vw] row-start-3 row-end-4 md:col-start-5 md:col-end-9 lg:col-start-7 lg:col-end-13 md:w-[90%] pl-[2vw] mix-blend-difference text-[#796B66]"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem
        culpa, voluptatibus porro esse ex explicabo, hic laboriosam illum dolor
        expedita.
      </p>
      <p
        style={{ fontFamily: "ClashDisplay-SemiBold" }}
        className="text-[5vw] ml-[3vw] mt-[2vw] md:ml-0 md:mt-0 md:text-[5vw] md:leading-[5vw] lg:text-[4.6vw] lg:leading-[5vw] row-start-4 row-end-5 lg:col-start-7 lg:col-end-10 pl-[2vw] mix-blend-difference text-[#796B66]"
      >
        20.00$
      </p>

      <div
        style={{ fontFamily: "ClashDisplay-Medium" }}
        className="text-[5vw] px-[4vw] md:text-[1.2vw] absolute bottom-[2vh] w-full md:static flex flex-col md:block md:row-start-5 md:row-end-7 md:self-end md:col-start-5 md:col-end-9 lg:col-start-7 lg:col-end-10 md:pl-[2vw] md:pb-[2vw] text-[#222421]"
      >
        <p className="mb-[1vh]">XL / L / M / S / XS</p>
        <button
          className="px-[4vw] py-[1vw] bg-[#9F948B] border-[0.3vw] border-[#222421] hover:text-[#9F948B] hover:bg-[#222421] transition-colors"
          type=""
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Article;
