import React, { useEffect } from "react";
import product from "@/assets/images/men.jpg";
import { Link } from "react-router-dom";
import PlusSign from "../assets/PlusSign";

const Card = ({ addToCartMutation, ...article }) => {
  return (
    <div
      style={{ fontFamily: "ClashDisplay-Medium" }}
      className="transition-all h-fit w-fit mb-[1vh] hover:saturate-50"
    >
      <Link to={`/article/${article.slug}-${article.id}`}>
        <img
          src={article.picture}
          alt={article.name}
          width={310}
          height={450}
          className="object-cover w-[400px] h-[310px] md:h-[500px]"
        />
      </Link>
      <div className="flex justify-between items-center md:mt-0 mt-[0.5vh]">
        <Link
          className="flex flex-col justify-center"
          to={`/article/${article.slug}-${article.id}`}
        >
          <p className="uppercase lg:mt-1 text-[3.2vw] md:text-[1.5vw] lg:text-[1.1vw]">
            {article.name}
          </p>
          <p
            className="leading-none text-[3.5vw] md:text-[1.4vw] lg:text-[1.2vw]"
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
          >
            {(article.price / 100).toFixed(2)} $
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
