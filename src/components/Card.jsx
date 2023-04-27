import React, { useEffect } from "react";
import product from "@/assets/images/men.jpg";
import { Link } from "react-router-dom";
import PlusSign from "../assets/PlusSign";

const Card = ({ addToCartMutation, ...article }) => {
  
  return (
    <div
      style={{ fontFamily: "ClashDisplay-Medium" }}
      className="h-fit w-fit mb-[1vh] hover:saturate-50 transition-all"
    >
      <Link to={`/article/${article.slug}-${article.id}`}><img src={article.picture} alt={article.name} width={310} height={450} className="w-[400px] md:h-[500px] h-[310px] object-cover" /></Link>
      <div className="flex justify-between items-center mt-[0.5vh] md:mt-0">
        <Link className="flex flex-col justify-center" to={`/article/${article.slug}-${article.id}`}>
          <p className="uppercase text-[3.2vw] md:text-[1.5vw] lg:text-[1.1vw] lg:mt-1">
          {article.name}
          </p>
          <p
            className="leading-none text-[3.5vw] md:text-[1.4vw] lg:text-[1.2vw]"
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
          >
           {article.price} $
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
