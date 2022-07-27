import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo adoye.png";
import "../styles/navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-[90px] bg-[#d3b68e]">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <a href="/">
            <img className="logo" src={Logo} alt="" />
          </a>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-[#350f04] items-center">
            <li className="n-link">
              <a href="#">Soap</a>
            </li>
            <li className="n-link">
              <a href="#">Body Butter</a>
            </li>
            <li className="n-link">
              <a href="#">Essentail Oil</a>
            </li>
            <li className="n-link">
              <a href="#">About</a>
            </li>
            {/* <button className="ml-4">Use Defi</button> */}
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-[#350f04]" />
          ) : (
            <AiOutlineMenu size={30} className="text-[#350f04]" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-[#d3b68e] text-[#350f04] absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">
              <a href="#">Soap</a>
            </li>
            <li className="text-2xl">
              <a href="#">Body Butter</a>
            </li>
            <li className="text-2xl">
              <a href="#">Essentail Oil</a>
            </li>
            <li className="text-2xl">
              <a href="#">About Us</a>
            </li>
            {/* <button className="m-8">Use Defi</button> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
