import React, { useEffect, useState } from "react";
import { getArticle } from "../services/articlesApi";
import { useLocation } from "react-router-dom";
import { animError } from "../utils/animations";
import { useAuth } from "../components/AuthProvider";

const Article = ({ addToCartMutation }) => {
  const location = useLocation();
  const arrProductURL = location.pathname.split("-");
  const idProduct = arrProductURL[arrProductURL.length - 1];
  const [article, setArticle] = useState(null);
  const [size, setSize] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    async function getData() {
      const data = await getArticle(idProduct);
      setArticle(data);
    }
    getData();
  }, []);

  return (
    <>
      {article && (
        <div className='md:px-[4vw] h-screen relative flex flex-col gap-4 lg:grid md:grid-cols-8 lg:grid-cols-12 grid-rows-6'>
          <div className='relative w-full h-20vh lg:h-auto lg:col-start-1 lg:row-start-1 md:col-end-9 lg:col-end-7 md:row-end-5 lg:row-end-7'>
            <img
              className='w-full h-[60vh] md:h-[70vh] lg:h-full md:static object-cover'
              src={article && article.picture}
              alt='black hoodie'
              width={310}
              height={450}
            />
          </div>
          <h2
            style={{ fontFamily: "ClashDisplay-Bold" }}
            className='uppercase ml-[4vw] mt-[4vw] md:ml-[3vw] md:mt-[1vw] w-max h-fit lg:ml-0 lg:col-start-6 lg:col-end-10 lg:row-start-1 lg:row-end-3 lg:self-end text-[5vw] md:text-[6vw] lg:text-[4vw] leading-[6vw] md:leading-[4vw] lg:leading-[3.5vw] mix-blend-difference text-[#796B66] lg:w-[34vw]'
          >
            {article && article.name}
          </h2>
          <p
            style={{ fontFamily: "ClashDisplay-Medium" }}
            className='text-[3.5vw] ml-[3vw] md:ml-[1.5vw] lg:ml-0 lg:mt-0 lg:mb-0 leading-[4.5vw] md:text-[2vw] md:leading-[2.2vw] lg:self-center lg:text-[1.2vw] lg:leading-[1.75vw] md:row-start-5 md:row-end-6 lg:row-start-3 lg:row-end-4 md:col-start-1 md:col-end-6 lg:col-start-7 lg:col-end-13 md:w-[70%] lg:w-[80%] pl-[2vw] mix-blend-difference text-[#796B66]'
          >
            {article && article.description}
          </p>
          <p
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
            className='text-[5vw] ml-[3vw] md:ml-[1vw] lg:ml-0 md:mt-[0vw] lg:mt-0 md:text-[3.5vw] md:leading-[2.5vw] lg:text-[4.6vw] lg:leading-[5vw] md:mb-[2vh] lg:mb-0 lg:self-start lg:row-start-4 lg:row-end-5 lg:col-start-7 lg:col-end-10 pl-[2vw] mix-blend-difference text-[#796B66]'
          >
            {article && (article.price / 100).toFixed(2)}$
          </p>

          <div
            style={{ fontFamily: "ClashDisplay-Medium" }}
            className='text-[5vw] md:ml-[3vw] lg:ml-0 md:text-[2.2vw] lg:text-[1.2vw] absolute bottom-[2vh] w-full px-[4vw] md:px-0 md:w-[40vw] lg:static flex flex-col lg:block lg:row-start-6 lg:row-end-7 lg:col-start-7 lg:col-end-10 lg:pl-[2vw] lg:pb-[2vw] text-[#222421]'
          >
            <div id="sizesInputs" className='mb-[1vh]'>
              <span onClick={() => setSize("XL")} style={{ fontFamily: size === "XL" ? "ClashDisplay-Bold":"ClashDisplay-Medium"}} className="cursor-pointer select-none">XL</span> /{" "}
              <span onClick={() => setSize("L")} style={{ fontFamily: size === "L" ? "ClashDisplay-Bold":"ClashDisplay-Medium"}} className="cursor-pointer select-none">L</span> /{" "}
              <span onClick={() => setSize("M")} style={{ fontFamily: size === "M" ? "ClashDisplay-Bold":"ClashDisplay-Medium"}} className="cursor-pointer select-none">M</span> /{" "}
              <span onClick={() => setSize("S")} style={{ fontFamily: size === "S" ? "ClashDisplay-Bold":"ClashDisplay-Medium"}} className="cursor-pointer select-none">S</span> /{" "}
              <span onClick={() => setSize("XS")} style={{ fontFamily: size === "XS" ? "ClashDisplay-Bold":"ClashDisplay-Medium"}} className="cursor-pointer select-none">XS</span>
            </div>
            <button
              className='px-[4vw] py-[1vw] bg-[#9F948B] border-[0.3vw] border-[#222421] hover:text-[#9F948B] hover:bg-[#222421] active:bg-[#181a18] transition-colors'
              type=''
              onClick={() => { if(!size) {animError()} else {addToCartMutation({"product": article.id, "size": size}, token)}}}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
