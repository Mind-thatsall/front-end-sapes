import React from "react";
import categorie from "@/assets/images/men.jpg";
import { useRef } from "react";
import { useEffect } from "react";
import CategorieCard from "../components/CategoryCard";
import useSWR from "swr";
import { getArticlesFromCategory, getCategories } from "../services/articlesApi";
import { CategoriesBox } from "../components/CategoriesBox";

const Categories = ({ gender }) => {

  return (
    <div className="px-[4vw] pt-[10vh] flex flex-col justify-center items-center">
      <h2
        className="text-[8vw] leading-[8vw] text-[#796B66] mix-blend-difference ml-[1vw] self-start"
        style={{
          fontFamily: "ClashDisplay-SemiBold",
        }}
      >
        CATEGORIES
        {gender ? (
          <span
            className="text-[3vw] leading-[2vw]"
            style={{ fontFamily: "ClashDisplay-Medium" }}
          >
            ({gender})
          </span>
        ) : (
          ""
        )}
      </h2>
      <span className="w-[98%] block h-1 bg-[#796B66] mix-blend-difference"></span>
      
        <CategoriesBox gender={gender} />
    </div>
  );
};

export default Categories;
