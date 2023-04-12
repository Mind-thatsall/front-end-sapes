const Navbar = () => {
  return (
    <nav
      className="fixed flex justify-between w-full px-[6vw] mt-[1.25vh]"
      style={{ fontFamily: "ClashDisplay-Medium" }}
    >
      <ul className="flex gap-[2vw]">
        <li className="lg:hidden">MENU</li>
        <li className="hidden lg:block">HOME</li>
        <li className="hidden lg:block">(WOMEN|MEN)</li>
        <li className="hidden lg:block">SHOP</li>
      </ul>
      <p className="hidden lg:block">13:30 | 06/04/2023 | MADE IN FRANCE</p>
      <ul className="flex gap-[2vw]">
        <li className="hidden lg:block">SEARCH</li>
        <li className="hidden lg:block">CONNECT</li>
        <li>CART 00</li>
      </ul>
    </nav>
  );
};

export default Navbar;