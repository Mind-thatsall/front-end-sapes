import React from "react";
import product from "@/assets/images/men.jpg";

const Card = () => {
  return (
    <div
      style={{ fontFamily: "ClashDisplay-Medium" }}
      className="h-fit w-fit mb-[1vh]"
    >
      <img src={product} alt="Black Hoodie" width={310} height={450} />
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <p className="text-[3.7vw] md:text-[1.5vw] lg:text-[1.3vw]">
            Black Hoodie
          </p>
          <p
            className="leading-none text-[3.5vw] md:text-[1.4vw] lg:text-[1.2vw]"
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
          >
            20.00$
          </p>
        </div>
        <p
          className="text-[12vw] pr-[0.5vw] md:text-[7vw] lg:text-[6vw] leading-[4vw] hover:cursor-pointer"
          style={{ fontFamily: "ClashDisplay-Light" }}
        >
          +
        </p>
      </div>
    </div>
  );
};

export default Card;
