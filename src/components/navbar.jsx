import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { RxSun } from "react-icons/rx";
import { FaRegTimesCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  let last = window.scrollY;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (Math.ceil(last) > Math.ceil(window.scrollY)) {
      navbar.style = "clip-path: none";
      navbar.style.top = "0";
    } else {
      navbar.style = "clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);";
    }
    last = window.scrollY;
  };
  const [theme, settheme] = useState("light");
  const handleTheme = () => {
    if (theme === "light") {
      settheme("dark");
      document.documentElement.classList.add("dark");
      AOS.refreshHard("my-element");
      AOS.init();
    } else {
      settheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div>
      <nav
        id="navbar"
        className="pr-5 md:pr-0 ease-in duration-500 fixed top-0  dark:ml-0  w-full justify-between  flex z-20  lg:pl-16 lg:dark:pl-8"
      >
        <h1 className="logo text-5xl scale-75 sm:scale-85 md:scale-95 ">IK</h1>
        {theme === "light" ? (
          <MdDarkMode
            className="text-white lg:ml-60 text-4xl mt-2 cursor-pointer rounded-full border-solid border-gray-600 bg-gray-700 border-2"
            onClick={handleTheme}
          />
        ) : (
          <RxSun
            className="text-white text-4xl mt-2 lg:ml-52 cursor-pointer dark:text-yellow-300"
            onClick={handleTheme}
          />
        )}

        <ul
          id="hamburger"
          className="dark:bg-yellow-400 md:dark:bg-inherit bg-[#f2f2f2] md:bg-inherit sm:w-5/12 w-7/12 md:w-fit top-0 right-0 h-full  md:flex mt:mt-3 md:mr-10 "
        >
          <li id="menu_item" className="pl-2 mx-2">
            <FaRegTimesCircle
              className="text-3xl mb-5 md:hidden text-[#000223]"
              onClick={() => {
                document.getElementById("hamburger").style =
                  "clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);";
              }}
            />
          </li>
          <li id="menu_item" className="pl-2 mt-1">
            <a
              href="/my-brand-react-app/"
              className=" dark:text-[#000223]   z-10  text-2xl font-medium dark:text-yellow-500 md:text-[#black]"
            >
              HOME
            </a>
          </li>
          <li id="menu_item" className="pl-1 pt-px mt-1 ml-5">
            <a className=" dark:text-[#000223]   z-10  text-2xl font-medium dark:text-yellow-500 md:text-[#black]">
              ABOUT ME
            </a>
          </li>
          <li id="menu_item" className="pl-1 pt-px mt-1 ml-5">
            <a className=" dark:text-[#000223]   z-10  text-2xl font-medium dark:text-yellow-500 md:text-[#black]">
              MY WORK
            </a>
          </li>
          <li id="menu_item" className="pl-1 pt-px mt-1 ml-5">
            <a className=" dark:text-[#000223]   z-10  text-2xl font-medium dark:text-yellow-500 md:text-[#black]">
              BLOGS
            </a>
          </li>
        </ul>

        <HiMenu
          className=" text-4xl mt-3 mr-5 text-white md:hidden"
          onClick={() => {
            document.getElementById("hamburger").style =
              "clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);";
          }}
        />
      </nav>
    </div>
  );
}

export default Navbar;
