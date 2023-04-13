import React from "react";
import categorie from "@/assets/images/men.jpg";
import { useRef } from "react";
import { useEffect } from "react";

const Categories = () => {
  const scrollBoxRef = useRef(null);

  function maxSize() {
    console.log("test");
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
      </h2>
      <span className="w-[98%] block h-1 bg-[#796B66] mix-blend-difference"></span>
      <div
        ref={scrollBoxRef}
        className="hide-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1.3vw] overflow-auto py-[3vh] w-[96%] mx-auto"
      >
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
        <img src={categorie} alt="" width={310} height={450} />
      </div>
    </div>
  );
};

export default Categories;
