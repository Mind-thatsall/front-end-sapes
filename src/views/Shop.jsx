import React, { useRef, useEffect, useState } from "react";
import Card from "@/components/Card";
import { useLocation } from "react-router-dom";
import { maxSize } from "@/utils/functions";
import { articlesApiEndPoint, getArticles } from "@/services/articlesApi";
import useSWR from "swr";
import { toggleFilters } from "@/utils/animations";

const Shop = (props) => {
  const scrollBoxRef = useRef(null);
  const filtersRef = useRef(null);
  const location = useLocation();
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const categorieName =
    location.pathname !== "/shop"
      ? location.pathname.split("/")[3].toUpperCase()
      : "SHOP";

  const {
    data: articles,
    error,
    isLoading,
  } = useSWR(articlesApiEndPoint, getArticles);

  useEffect(() => {
    maxSize(scrollBoxRef.current);
    window.addEventListener("resize", () => maxSize(scrollBoxRef.current));

    return () => {
      window.removeEventListener("resize", () => maxSize(scrollBoxRef.current));
    };
  }, []);

  return (
    <div className="px-[2vw] md:px-[4vw] pt-[10vh] flex flex-col justify-center items-center">
      <h2
        className="text-[8vw] leading-[8vw] text-[#796B66] mix-blend-difference ml-[1.5vw] self-start"
        style={{
          fontFamily: "ClashDisplay-SemiBold",
        }}
      >
        {categorieName}
      </h2>
      <span className="w-[98%] block h-1 bg-[#796B66] mix-blend-difference"></span>

      <div
        ref={scrollBoxRef}
        className="hide-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw] md:gap-[1.5vw] overflow-auto py-[3vh] w-[96%] mx-auto"
      >
        {isLoading && "Loading..."}
        {error && error}
        {articles &&
          articles.map((article) => (
            <Card
              key={article.id}
              {...article}
              addToCartMutation={props.addToCartMutation}
            />
          ))}
      </div>
        <div ref={filtersRef} className="fixed bottom-[8vh] opacity-0 w-[400px] h-[200px] bg-[#9F948B] border-2 border-[#222421]"></div>
        <div className="fixed bottom-[1vh] w-[400px] flex gap-2 p-2 bg-[#9F948B] h-[55px] border-2 border-[#222421]">
          <button onClick={() => {
            toggleFilters(filtersRef.current, isOpenFilters);
            setIsOpenFilters(!isOpenFilters);
          }} className="flex items-center justify-center w-full h-full bg-[#222421] text-[#9F948B] hover:bg-[#30322e] transition-colors active:bg-[#383a36]">
            COLOR
          </button>
          <button className="flex items-center justify-center w-full h-full bg-[#222421] text-[#9F948B] hover:bg-[#30322e] transition-colors active:bg-[#383a36]">
            SIZE
          </button>
          <button className="flex items-center justify-center w-full h-full bg-[#222421] text-[#9F948B]">
            PRICE
          </button>
      </div>
    </div>
  );
};

export default Shop;
