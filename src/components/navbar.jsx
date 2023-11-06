import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { FaRegTimesCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [navStyle, setnavStyle] = useState({
    nav: "",
    li: "",
  });
  const [theme, settheme] = useState("dark");
  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      settheme("light");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const handleTheme = () => {
    setnavStyle("bg-[#0000]");
    if (theme === "light") {
      settheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      AOS.init();
    } else {
      settheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 1500) {
        theme === "light"
          ? setnavStyle({
              nav: "shadow-md bg-white ",
              li: "text-[#000223]",
            })
          : setnavStyle({
              nav: "shadow-md bg-[#040b1e]",
              li: "dark:md:text-yellow-300 dark:text-black",
            });
      } else {
        setnavStyle("");
      }
    };
  }, [theme]);
  const linkStyle = `z-10 ${navStyle.li}  text-2xl font-medium [text-transform:lowercase] `;

  return (
    <nav
      id="navbar"
      className={`${navStyle.nav} md:text-white  pr-3 h-[5em]  duration-500 fixed  top-0  dark:ml-0  w-[100vw] justify-between  flex z-20  lg:pl-8 items-center `}
    >
      <h1 className="logo text-5xl scale-75 sm:scale-85 md:scale-95 ">IK</h1>
      {theme === "light" ? (
        <MdDarkMode
          className="text-white lg:ml-60 text-3xl cursor-pointer rounded-full border-none  bg-yellow-500 border-2"
          onClick={handleTheme}
        />
      ) : (
        <HiLightBulb
          className="text-gray-100 lg:ml-60 text-3xl cursor-pointer rounded-full  border-none  bg-yellow-500 border-2"
          onClick={handleTheme}
        />
      )}

      <ul
        id="hamburger"
        className="dark:bg-yellow-400 md:dark:bg-inherit bg-[#f2f2f2] md:bg-inherit sm:w-5/12 w-7/12 md:w-fit top-0 right-0 h-full items-center  md:flex md:mr-10 "
      >
        <li id="menu_item" className=" mx-2">
          <FaRegTimesCircle
            className="text-3xl mb-5 md:hidden text-[#000223]"
            onClick={() => {
              document.getElementById("hamburger").style =
                "clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);";
            }}
          />
        </li>
        <li id="menu_item" className="pl-2 ">
          <Link to="/" className={linkStyle}>
            HOME
          </Link>
        </li>
        <li id="menu_item" className="pl-1  ml-5">
          <a href="/my-brand-react-app#insidernav" className={linkStyle}>
            ABOUT ME
          </a>
        </li>
        <li id="menu_item" className="pl-1  ml-5">
          <a href="/my-brand-react-app#myWork" className={linkStyle}>
            MY WORK
          </a>
        </li>
        <li id="menu_item" className="pl-1  ml-5">
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
        className=" text-4xl text-[#040b1e] dark:text-[#facc15] md:hidden"
        onClick={() => {
          document.getElementById("hamburger").style =
            "clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);";
        }}
      />
    </nav>
  );
}

export default Navbar;
