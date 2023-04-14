import React from "react";
import categorie from "@/assets/images/men.jpg";
import { useRef } from "react";
import { useEffect } from "react";
import CategorieCard from "../components/CategorieCard";

const Categories = ({ gender }) => {
  const scrollBoxRef = useRef(null);

  function maxSize() {
    scrollBoxRef.current.style.height =
      window.innerHeight - scrollBoxRef.current.offsetTop + "px";
  }

  useEffect(() => {
    maxSize();
    window.addEventListener("resize", maxSize);

    return () => {
      window.removeEventListener("resize", maxSize);
    };
  }, []);

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
      <div
        ref={scrollBoxRef}
        className="hide-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw] md:gap-[1.5vw] overflow-auto py-[3vh] w-[96%] mx-auto"
      >
        <CategorieCard
          picture={categorie}
          categorieName={"PANTS"}
          slug={`/${gender}/categories/pants`}
        />
        <CategorieCard
          picture={categorie}
          categorieName={"HOODIES"}
          slug={`/${gender}/categories/hoodies`}
        />
        <CategorieCard
          picture={categorie}
          categorieName={"SHOES"}
          slug={`/${gender}/categories/shoes`}
        />
        <CategorieCard
          picture={categorie}
          categorieName={"SOCKS"}
          slug={`/${gender}/categories/socks`}
        />
        <CategorieCard
          picture={categorie}
          categorieName={"JOGGERS"}
          slug={`/${gender}/categories/joggers`}
        />
        <CategorieCard
          picture={categorie}
          categorieName={"HATS"}
          slug={`/${gender}/categories/hats`}
        />
      </div>
    </div>
  );
};

export default Categories;
