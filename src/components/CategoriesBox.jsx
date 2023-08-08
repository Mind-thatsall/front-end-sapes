import React, { useRef, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import useSWR from "swr";
import { getCategories } from "../services/articlesApi";

export const CategoriesBox = ({ gender }) => {
  const scrollBoxRef = useRef(null);
  const {
    data: categories,
    isLoading,
    error,
  } = useSWR("/api/categories", getCategories);

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
    <div
      id="categoriesGrid"
      ref={scrollBoxRef}
      className="hide-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw] md:gap-[1.5vw] overflow-auto py-[3vh] w-[96%] mx-auto"
    >
      {isLoading && "LOADING..."}
      {categories &&
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            picture={category.picture}
            categorieName={category.name}
            slug={`/${gender}/categories/${category.name}`}
          />
        ))}
    </div>
  );
};
