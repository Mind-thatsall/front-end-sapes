import { Link } from "react-router-dom";
import { useRef } from "react";
import { openSearch, closeSearch } from "@/utils/animations";

const Navbar = () => {
  const inputRef = useRef(null);
  const bgModalRef = useRef(null);

  return (
    <>
      <form
        ref={inputRef}
        action=""
        className="opacity-0 absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <input
          className="px-[15px] py-[10px] w-[300px] md:w-[400px] text-[#222421] bg-[#9F948B] border-2 border-[#222421] focus:border-4 focus-visible:outline-none transition-all placeholder:text-[#222421]/80"
          type="text"
          name=""
          placeholder="Black hoodie..."
        />
      </form>
      <span
        ref={bgModalRef}
        onClick={() => closeSearch(inputRef.current, bgModalRef.current)}
        className="opacity-0 absolute w-full h-full bg-[#22242180] pointer-events-none z-[9]"
      ></span>
      <nav
        className="z-[2] mix-blend-difference text-[#796B66] fixed flex justify-between w-full px-[4vw] md:px-[6vw] mt-[1.25vh] text-[4vw] md:text-[2vw] lg:text-[1vw]"
        style={{ fontFamily: "ClashDisplay-Medium" }}
      >
        <ul className="flex gap-[2vw]">
          <li className="lg:hidden">MENU</li>
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
          13:30 - 06/04/2023 | <Link to="/cgu">CGU</Link>{" "}
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
            <Link to="/cart">CART 00</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
