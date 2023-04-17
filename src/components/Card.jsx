import React from "react";
import product from "@/assets/images/men.jpg";

const Card = ({ addToCartMutation, ...article }) => {
  return (
    <div
      style={{ fontFamily: "ClashDisplay-Medium" }}
      className="h-fit w-fit mb-[1vh]"
    >
      <img src={product} alt="Black Hoodie" width={310} height={450} />
      <div className="flex justify-between items-center mt-[0.5vh] md:mt-0">
        <div className="flex flex-col justify-center">
          <p className="text-[3.7vw] md:text-[1.5vw] lg:text-[1.3vw]">
            {article.name}
          </p>
          <p
            className="leading-none text-[3.5vw] md:text-[1.4vw] lg:text-[1.2vw]"
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
          >
            {article.price}$
          </p>
        </div>
        <p
          className="text-[12vw] pr-[0.5vw] md:pr-0 md:text-[7vw] lg:text-[6vw] leading-[4vw] hover:cursor-pointer"
          style={{ fontFamily: "ClashDisplay-Light" }}
          onClick={() => addToCartMutation(article)}
        >
          +
        </p>
      </div>
    </div>
  );
};

export default Card;
