import React from "react";
import product from "@/assets/images/men.jpg";
import { Link } from "react-router-dom";
import PlusSign from "../assets/PlusSign";

const Card = ({ addToCartMutation, ...article }) => {
  return (
    <div
      style={{ fontFamily: "ClashDisplay-Medium" }}
      className="h-fit w-fit mb-[1vh] hover:saturate-50 transition-all"
    >
      <Link to={`/article/${article.slug}`}><img src={product} alt="Black Hoodie" width={310} height={450} className="w-full" /></Link>
      <div className="flex justify-between items-center mt-[0.5vh] md:mt-0">
        <Link className="flex flex-col justify-center" to={`/article/${article.slug}`}>
          <p className="text-[3.7vw] md:text-[1.5vw] lg:text-[1.3vw]">
            {article.name}
          </p>
          <p
            className="leading-none text-[3.5vw] md:text-[1.4vw] lg:text-[1.2vw]"
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
          >
            {article.price}$
          </p>
        </Link>
        <button
          className="text-[12vw] pr-[0.5vw] md:pr-0 md:text-[7vw] lg:text-[6vw] leading-[4vw] hover:cursor-pointer active:scale-75 transition-transform"
          style={{ fontFamily: "ClashDisplay-Light" }}
          onClick={() => addToCartMutation(article)}
        >
          <PlusSign />
        </button>
      </div>
    </div>
  );
};

export default Card;
