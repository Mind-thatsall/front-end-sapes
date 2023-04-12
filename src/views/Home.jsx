import React from "react";
import men from "@/assets/images/men.jpg";
import women from "@/assets/images/women.png";
import SideBars from "@/components/SideBars";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid h-screen grid-cols-6 overflow-hidden md:grid-cols-8 lg:grid-cols-12 lg:grid-rows-6">
      <SideBars rotate="" side="left-0" />
      <SideBars rotate="rotate-180" side="right-0" />
      <div className="flex flex-col items-center gap-[2vh] self-center w-full col-start-2 col-end-12 row-start-2 row-end-3">
        <h1
          style={{ fontFamily: "ClashDisplay-Bold" }}
          className="font-bold text-center uppercase text-[10vw] leading-[7vw] text-[#796B66] mix-blend-difference"
        >
          sapes avenue
        </h1>
        <h2
          style={{ fontFamily: "ClashDisplay-Bold" }}
          className="font-bold text-center uppercase text-[4.5vw] leading-[4.5vw] text-[#796B66] mix-blend-difference"
        >
          STREETS ARE OUR PLAYGROUND
        </h2>
        <p
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="font-bold text-center uppercase text-[1.3vw] leading-[2vw] text-[#796B66] mix-blend-difference w-[49vw]"
        >
          UNE MARQUE DE STREETWEAR né à la capitale maintenant ouvert à la france.
          ON BOSSE DUR POUR CRéER DES VÊTEMENTS COMFORTABLE ET INTEMPORELLE.
          UNE TRèS BONNE QUALITé POUR UN PRIX ACCESSIBLE.
        </p>
      </div>
      <Link
        to={"/men/categories"}
        className="relative col-start-4 col-end-6 row-start-4 row-end-7 h-fit hover-gender"
      >
        <p className="gender">MEN</p>
        <img
          className="shadow-2xl -rotate-6"
          src={men}
          alt="men category"
          width={400}
          height={600}
        />
      </Link>

      <Link
        to={"/women/categories"}
        className="relative self-center col-start-8 col-end-10 row-start-3 row-end-7 hover-gender"
      >
        <p className="gender">WOMEN</p>
        <img
          className="women rotate-6 mt-[3vh] shadow-2xl "
          src={women}
          alt="women category"
          width={400}
          height={600}
        />
      </Link>
    </div>
  );
};

export default Home;
