import { Link } from "react-router-dom";
import { openSearch, closeSearch } from "@/utils/animations";
import React, { useState, useEffect, useRef } from "react";
import {closeMenu, toggleMenu } from "@/utils/animations";
import SearchBar from "@/components/SearchBar";
import Menu from "@/components/Menu";

const Navbar = ({ cartSize }) => {
  const inputRef = useRef(null);
  const bgModalRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);

  // State variable with the current date and time as initial value
  const [dateTime, setDateTime] = useState(new Date());

  // Use the useEffect hook to update the dateTime state variable every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format the dateTime state variable to display the time and date
  const formattedDateTime = `${dateTime.toLocaleTimeString()} - ${dateTime.toLocaleDateString()}`;

  return (
    <>
      <SearchBar inputRef={inputRef} bgModalRef={bgModalRef} />
      <Menu menuRef={menuRef} setMenu={setMenuOpened} />
      <nav
        className="z-[2] mix-blend-difference text-[#796B66] fixed flex justify-between w-full px-[4vw] md:px-[6vw] mt-[1.25vh] text-[4vw] md:text-[2vw] lg:text-[1vw]"
        style={{ fontFamily: "ClashDisplay-Medium" }}
      >
        <ul className="flex gap-[2vw]">
          <li
            className="lg:hidden"
            onClick={() => {
              setMenuOpened(!menuOpened);
              toggleMenu(menuRef.current, menuOpened);
            }}
          >
            {menuOpened ? "CLOSE" : "MENU"}
          </li>
          <li className="hidden lg:block">
            <Link to="/">HOME</Link>
          </li>
          <li className="hidden lg:block">
            (<Link to="/women/categories">WOMEN</Link>|
            <Link to="/men/categories">MEN</Link>)
          </li>
          <li className="hidden lg:block">
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
        <p className="hidden lg:block" style={{ wordSpacing: "0.4vw" }}>
          {formattedDateTime} | <Link to="/cgu">CGU</Link>{" "}
          <Link to="/contact">CONTACT</Link> | MADE IN FRANCE
        </p>
        <ul className="flex gap-[2vw]">
          <li
            className="hidden lg:block hover:cursor-pointer"
            onClick={() => openSearch(inputRef.current, bgModalRef.current)}
          >
            SEARCH
          </li>
          <li className="hidden lg:block">
            <Link to="/login">CONNECT</Link>
          </li>
          <li>
            <Link to="/cart">
              CART {cartSize > 10 ? cartSize : "0" + cartSize}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
