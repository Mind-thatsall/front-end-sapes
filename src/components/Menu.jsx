import React from "react";

const Menu = () => {
  return (
    <div
      style={{ fontFamily: "ClashDisplay-Bold" }}
      className="flex flex-col items-center justify-center z-[1] fixed top-0 left-0 right-0 bottom-0 bg-[#222421] opacity-0 pointer-events-none"
    >
      <p className="text-[#9F948B] text-[8vw] leading-[8vw]">HOME</p>
      <p className="text-[#9F948B] text-[8vw] leading-[8vw]">(WOMEN|MEN)</p>
      <p className="text-[#9F948B] text-[22vw] leading-[20vw]">SHOP</p>
      <p className="text-[#9F948B] text-[9vw] leading-[9vw]">CONTACT</p>
      <p className="text-[#9F948B] text-[9vw] leading-[9vw]">CGU</p>
    </div>
  );
};

export default Menu;
