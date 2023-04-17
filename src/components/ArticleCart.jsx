import React from "react";

const ArticleCart = ({ removeFromCart, ...item }) => {
  return (
    <div className="grid grid-cols-8 w-full items-center">
      <span className="leading-[20px] col-start-1 col-end-5">
        <p className="uppercase">{item.name}</p>
        <p className="uppercase">{item.color}</p>
        <p>M</p>
      </span>
      <p className="justify-self-center col-start-6 col-end-7">2</p>
      <p className="justify-self-end col-start-7 col-end-8">{item.price}$</p>
      <button
        type=""
        className="justify-self-end text-[1.6vw]"
        style={{ fontFamily: "ClashDisplay-Bold" }}
        onClick={() => removeFromCart(item.id)}
      >
        X
      </button>
    </div>
  );
};

export default ArticleCart;
