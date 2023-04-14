import React from "react";
import { Link } from "react-router-dom";

const CategorieCard = ({ picture, categorieName, slug }) => {
  return (
    <Link className="relative" to={slug}>
      <img
        className="h-full w-full"
        src={picture}
        alt=""
        width={310}
        height={450}
      />
      <p
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[3vw] text-[#f9e9db] mix-blend-difference"
        style={{ fontFamily: "ClashDisplay-SemiBold" }}
      >
        {categorieName}
      </p>
    </Link>
  );
};

export default CategorieCard;
