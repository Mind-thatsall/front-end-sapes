import React from "react";

const ArticleCart = ({ removeFromCart, ...item }) => {
  return (
    <div className="grid items-center w-full grid-cols-8 border-2 border-[#222421] py-4 px-5">
      <span className="leading-[20px] col-start-1 col-end-5">
        <p className="uppercase text-[14px] leading-[13px] md:text-[16px] md:leading-[15px]">{item.name}</p>
        <p style={{fontFamily: "ClashDisplay-SemiBold"}} className="md:my-1">SIZE: {item.size}</p>
        <p style={{fontFamily: "ClashDisplay-SemiBold"}} className="uppercase text-[14px] md:text-[16px] md:leading-[15px]" >COLOR: {item.color}</p>

      </span>
      <p className="col-start-5 col-end-6 md:col-start-6 md:col-end-7 justify-self-center">1</p>
      <p className="col-start-7 col-end-8 justify-self-end">{item.price}$</p>
      <button
        type=""
        className="justify-self-end lg:text-[1.2vw] md:text-[2vw] text-[3vw] active:scale-75 transition-transform"
        style={{ fontFamily: "ClashDisplay-Bold" }}
        onClick={() => removeFromCart(item.id)}
      >
        X
      </button>
    </div>
  );
};

export default ArticleCart;
