import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../shared/Button";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowUpFill } from "react-icons/ri";

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const scrollBtn = document.getElementById("scroll-up");
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300
        ? scrollBtn.classList.add("show-scroll")
        : scrollBtn.classList.remove("show-scroll");
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const links = [
    {
      name: "Residencies",
      linkName: "residencies",
    },
    {
      name: "Our Value",
      linkName: "ourvalue",
    },
    {
      name: "Contact Us",
      linkName: "contactus",
    },
    {
      name: "Get Started",
      linkName: "getstarted",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    const mobileMenu = document.getElementById("mobile__menu");
    const closeBtn = document.getElementById("close__btn");
    const hamburgerBtn = document.getElementById("hamburger__btn");
    mobileMenu.classList.toggle("hidden");
    // mobileMenu.classList.toggle("block");
    hamburgerBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");

    document.body.style.overflowY =
      document.body.style.overflowY === "hidden" ? "visible" : "hidden";

    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="sticky bg-darkBlack top-0 z-[99] h-20">
      <div
        className="px-[1.5rem] md:px-3 py-4 lg:mx-auto flex items-center justify-between w-full
      md:max-w-[45rem] lg:max-w-[1280px]"
      >
        <div className="flex md:ml-auto lg:ml-0 sm:ml-0">
          <a href="/">
            <img className="w-[100px] md:w-[80px]" src={logo} alt="Homez" />
          </a>
        </div>
        <div
          className="flex md:hidden mr-2 items-center justify-center cursor-pointer transition-all duration-300 ease-out"
          onClick={toggleMenu}
        >
          <HiBars3BottomRight id="hamburger__btn" size={35} color="white" />
          <AiOutlineClose
            id="close__btn"
            size={35}
            color="white"
            className="hidden"
          />
        </div>
        {/* Desktop menu */}
        <nav className="hidden md:flex ml-auto space-x-10">
          <ul className="flex items-center justify-between gap-6 text-secondary cursor-pointer text-lg ">
            {links.map((link, index) => (
              <a className="cursor-pointer" href={`#${link.linkName}`}>
                <li
                  key={index}
                  className="hover:text-gray-400 transition-all duration-200 ease"
                >
                  {link.name}
                </li>
              </a>
            ))}
          </ul>
          <div>
            <Button text={"Contact"} />
          </div>
        </nav>
      </div>
      {/* Mobile menu */}
      <section
        id="mobile__menu"
        className="hidden overflow-hidden overflow-y-hidden bg-darkBlack top-18 origin-top w-full h-screen animate-open-menu"
        onClick={toggleMenu}
      >
        <nav className="flex flex-col items-center justify-center gap-10">
          <ul className="flex mt-20 flex-col gap-10 flex-1 items-center text-secondary text-lg ">
            {links.map((link, index) => (
              <li
                key={index}
                className="hover:text-gray-400 text-4xl transition-all duration-200 ease"
              >
                <a className="cursor-pointer" href={`#${link.linkName}`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <Button text={"Contact"} className={"mt-20"} />
          </div>
        </nav>
      </section>
      <a
        href="#"
        className="fixed right-[4rem] md:right-[3rem] -bottom-[30%] inline-flex p-[0.1rem] rounded-sm opacity-80 transition-all duration-300 z-10 bg-blue-gradient"
        id="scroll-up"
      >
        <RiArrowUpFill size="20" color="white" />
      </a>
    </section>
  );
};

export default Navbar;
