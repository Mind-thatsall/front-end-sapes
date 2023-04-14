import React from "react";
import categorie from "@/assets/images/men.jpg";
import { useRef } from "react";
import { useEffect } from "react";
import Card from "@/components/Card";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const scrollBoxRef = useRef(null);
  const location = useLocation();
  const categorieName =
    location.pathname !== "/shop"
      ? location.pathname.split("/")[3].toUpperCase()
      : "SHOP";

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Shop;
