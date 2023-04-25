import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { closeMenu } from "@/utils/animations";

const Menu = ({ menuRef, setMenu }) => {
  const location = useLocation();

  useEffect(() => {
    setMenu(false);
    closeMenu(menuRef.current);
  }, [location.pathname]);

  return (
    <div
      ref={menuRef}
      style={{ fontFamily: "ClashDisplay-Bold" }}
      className="flex flex-col items-center justify-center z-[1] fixed top-0 left-0 right-0 bottom-0 bg-[#222421] opacity-0 pointer-events-none"
    >
      <Link to="/" className="text-[#9F948B] text-[8vw] leading-[8vw]">
        HOME
      </Link>
      <p className="text-[#9F948B] text-[8vw] leading-[8vw]">
        (<Link to="/women/categories">WOMEN</Link>|
        <Link to="/men/categories">MEN</Link>)
      </p>
      <Link to="/shop" className="text-[#9F948B] text-[22vw] leading-[20vw]">
        SHOP
      </Link>
      <Link to="/contact" className="text-[#9F948B] text-[9vw] leading-[9vw]">
        CONTACT
      </Link>
      <Link to="/cgu" className="text-[#9F948B] text-[9vw] leading-[9vw]">
        CGU
      </Link>

      <Link to="/login" className="text-[#9F948B] text-[9vw] leading-[5vw] absolute bottom-[70px]">CONNECT</Link>
    </div>
  );
};

export default Menu;
