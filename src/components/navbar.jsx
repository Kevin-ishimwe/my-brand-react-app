import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { RxSun } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  let last = window.scrollY;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    // if (Math.ceil(last) > Math.ceil(window.scrollY)) {
    //   console.log("show");
    //   navbar.style.height = "10vh";
    //   navbar.style.top = "0";
    // } else {
    //   navbar.style.height = "0";
    // }
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
        className="pr-10 ease-out duration-1000 fixed top-0  dark:ml-0  w-full justify-between  flex pr-0 z-20  lg:pl-16 lg:dark:pl-8"
      >
        <h1 className="logo text-5xl scale-75 sm:scale-85 md:scale-95 ">IK</h1>
        {theme === "light" ? (
          <MdDarkMode
            className="text-white lg:ml-60 text-4xl mt-2 cursor-pointer rounded-full border-solid border-white border-2"
            onClick={handleTheme}
          />
        ) : (
          <RxSun
            className="text-white text-4xl mt-2 lg:ml-52 cursor-pointer text-yellow-300"
            onClick={handleTheme}
          />
        )}

        <ul className="hidden md:flex mt-3 mr-10 ">
          <li className="pl-2 ml-2">
            <a className=" z-10 dark:text-black  text-2xl font-medium text-yellow-400 px-0 ">
              HOME
            </a>
          </li>
          <li className="pl-1 pt-px ml-5">
            <a className=" z-10  text-2xl font-medium text-white">ABOUT ME</a>
          </li>
          <li className="pl-1 pt-px ml-5">
            <a className=" z-10  text-2xl font-medium text-white">MY WORK</a>
          </li>
          <li className="pl-1 pt-px ml-5">
            <a className=" z-10  text-2xl font-medium text-white">BLOGS</a>
          </li>
        </ul>

        <HiMenu className=" text-4xl mt-3 mr-5 text-white md:hidden" />
      </nav>
    </div>
  );
}

export default Navbar;
