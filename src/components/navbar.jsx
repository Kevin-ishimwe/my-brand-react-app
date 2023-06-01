import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { RxSun } from "react-icons/rx";
import { FaRegTimesCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  let last = window.scrollY;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.visualViewport.width > 800) {
      const navbar = document.getElementById("navbar");
      if (Math.ceil(last) > Math.ceil(window.scrollY)) {
        navbar.style = "clip-path: none";
        navbar.style.top = "0";
      } else {
        navbar.style = "clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);";
      }
      last = window.scrollY;
    }
  };
  const [theme, settheme] = useState("dark");
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      settheme("light");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const handleTheme = () => {
    if (theme === "light") {
      settheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");

      AOS.refreshHard("my-element");
      AOS.init();
    } else {
      settheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  const linkStyle =
    "z-10  text-2xl font-medium md:dark:text-white [text-transform:lowercase] ";

  return (
    <div>
      <nav
        id="navbar"
        className="pr-5 md:pr-0 ease-in duration-500 fixed top-0  dark:ml-0  w-full justify-between  flex z-20  lg:pl-8  "
      >
        <h1 className="logo text-5xl scale-75 sm:scale-85 md:scale-95 ">IK</h1>
        {theme === "light" ? (
          <MdDarkMode
            className="text-white lg:ml-60 text-3xl mt-2 cursor-pointer rounded-full border-solid border-gray-100 bg-yellow-500 border-2"
            onClick={handleTheme}
          />
        ) : (
          <RxSun
            className="text-3xl mt-2 cursor-pointer lg:ml-64  dark:text-yellow-300"
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
            <Link to="/" className={linkStyle}>
              HOME
            </Link>
          </li>
          <li id="menu_item" className="pl-1 pt-px mt-1 ml-5">
            <a href="/my-brand-react-app#insidernav" className={linkStyle}>
              ABOUT ME
            </a>
          </li>
          <li id="menu_item" className="pl-1 pt-px mt-1 ml-5">
            <a href="/my-brand-react-app#myWork" className={linkStyle}>
              MY WORK
            </a>
          </li>
          <li id="menu_item" className="pl-1 pt-px mt-1 ml-5">
            <NavLink
              to={"/allblogs"}
              spy="true"
              smooth="true"
              className={linkStyle}
            >
              BLOGS
            </NavLink>
          </li>
        </ul>

        <HiMenu
          className=" text-4xl mt-3 mr-0 text-[#040b1e] dark:text-white md:hidden"
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
