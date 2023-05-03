import React, { useRef, useEffect, useState } from "react";
import Card from "@/components/Card";
import { useLocation } from "react-router-dom";
import { maxSize } from "@/utils/functions";
import { articlesApiEndPoint, getArticles } from "@/services/articlesApi";
import useSWR from "swr";
import { toggleFilters } from "@/utils/animations";
import { getArticlesFromCategory } from "../services/articlesApi";

const Shop = (props) => {
  const scrollBoxRef = useRef(null);
  const location = useLocation();
  const categorieName =
    location.pathname !== "/shop" ? location.pathname.split("/")[3] : "SHOP";
  const gender = location.pathname.split("/")[1] !== 'shop' ? location.pathname.split("/")[1] : null;
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    maxSize(scrollBoxRef.current);
    window.addEventListener("resize", () => maxSize(scrollBoxRef.current));
    return () => {
      window.removeEventListener("resize", () => maxSize(scrollBoxRef.current));
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        if(gender && categorieName) {
          
          setIsLoading(true)
          const data = await getArticlesFromCategory(gender, categorieName);
          setArticles(data.products);
        } else {
          const data = await getArticles();
          setArticles(data);
        }
      } catch(err) {
        console.log(err)
        setError(err.message)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();    
  }, [location.pathname])

  return (
    <div className='px-[2vw] md:px-[4vw] pt-[10vh] flex flex-col justify-center items-center'>
      <h2
        className='uppercase text-[8vw] leading-[8vw] text-[#796B66] mix-blend-difference ml-[1.5vw] self-start'
        style={{
          fontFamily: "ClashDisplay-SemiBold",
        }}
      >
        {categorieName}
      </h2>
      <span className='w-[98%] block h-1 bg-[#796B66] mix-blend-difference'></span>

      <div
        ref={scrollBoxRef}
        className='hide-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw] md:gap-[1.5vw] overflow-auto py-[3vh] w-[96%] mx-auto'
      >
        {isLoading && "LOADING..."}
        {error && <p className="uppercase absolute left-[50%] top-[50%] md:top-[55%] lg:top-[60%] translate-x-[-50%] text-[3.5vw] lg:text-[1.5vw] text-center text-[#222421]" style={{fontFamily: "ClashDisplay-Medium"}}>{error}</p>}
        {articles &&
          articles.map((article) => (
            <Card
              key={article.id}
              {...article}
              addToCartMutation={props.addToCartMutation}
            />
          ))}
      </div>
    </div>
  );
};

export default Shop;
