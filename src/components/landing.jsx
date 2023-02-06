import React, { useState, useEffect, useRef } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import herobg from "../assets/herobg.png";
import Navbar from "./navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import js_vanilla from "../assets/js_vanilla.png";
import html5 from "../assets/html5.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import tail from "../assets/tail.png";
import mui from "../assets/mui.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import fire from "../assets/fire.png";
import jwt from "../assets/jwt.png";

function Landing() {
  AOS.init({
    offset: 200,
    duration: 400,
  });
  const front_endskills = [
    { img: html5, name: "html5" },
    { img: css, name: "css" },
    { img: js_vanilla, name: "javascript" },
    { img: react, name: "react" },
    { img: sass, name: "sass" },
    { img: tail, name: "tailwind" },
    { img: mui, name: "material ui" },
  ];
  const back_endskills = [
    { img: node, name: "node js" },
    { img: mongo, name: "MongoDB" },
    { img: jwt, name: "JWT" },
    { img: fire, name: "firebase" },
  ];
  const about = useRef();
  const hero = useRef();
  useEffect(() => {
    window.onscroll = () => {
      if (window.visualViewport.width > 1000) {
        if (Math.floor(window.scrollY) > 790) {
          // console.log(window.scrollY);

          hero.current.style.position = "absolute";
          hero.current.style.top = "116vh";
          hero.current.style.right = "0%";
          about.current.style.position = "fixed";
          about.current.style.top = "-2vh";

          console.log(about.current);
        } else {
          hero.current.style.position = "fixed";
          hero.current.style.top = "0vh";
          about.current.style.position = "relative";
          about.current.style.top = "3vh";
        }
      }
    };
  }, []);

  return (
    <div id="landingnone">
      <div className="landing dark:bg-[#040b1e]">
        <div className="dark:from-[#040b1e] dark:to-[#040b1e]  relative min-h-full lg:absolute bg-gradient-to-r from-[#B4862A] to-[#ECBE3A]   w-full pb-5  ">
          <div className=" flex flex-col-reverse md:dark:flex-col-reverse md:dark:flex sm:-mt-20 sm:w-full md:pt-20 md:pb-11  md:mt-0 md:mb-11  lg:mb-0 lg:mt-36  ">
            <Navbar />
            <div className="sm:w-full md:w-9/12">
              <p className="dark:text-yellow-400 sm:dark:ml-6  text-center md:text-left mt-4 text-4xl sm:ml-4 md:ml-8 md:text-4xl text-[#000223]   lg:ml-20">
                hey there,im
              </p>
              <p
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="3200"
                className="dark:text-yellow-400 sm:dark:ml-6  text-center md:text-left mt-4 text-4xl sm:ml-4 md:ml-8  md:text-5xl text-[#000223] font-semibold sm:mt-1 mb-2  lg:ml-20"
              >
                ISHIMWE KEVIN
              </p>
              <p
                data-aos-id="my-element"
                data-aos="fade-zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="dark:text-yellow-400 sm:dark:ml-6  text-center md:text-left mt-1 text-2xl sm:ml-4 md:ml-8  md:text-3xl text-[#000223] font-semibold  lg:ml-20"
              >
                FULLSTACK WEB DEVELOPER
              </p>
              <p
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="dark:text-[#aaaa8d] sm:dark:ml-6 w-full text-center md:text-left md:dark:w-8/12 sm:ml-4 md:ml-8 sm:w-fit md:w-2/3 dar:lg:w-8/12 lg:w-9/12 lg:ml-20 mt-4 text-xl text-gray-800"
              >
                I strive to create visually appealing and functional websites
                that deliver a great user experience. I am always looking for
                new challenges and I am eager to bring your web projects to
                life. Let's create something amazing together!
              </p>
              <div className="flex justify-center mb-6 md:justify-start  ">
                <button className="sm:dark:ml-6  dark:bg-[#B4862A] dark:text-black font-semibold ease-out duration-300 bg-[#00034a] text-2xl mt-5  p-2 mx-a text-white sm:ml-4 lg:ml-20 sm:mt-5 pr-4 pl-4 hover:bg-[#1a05ae] hover:scale-105">
                  CONTACT ME
                </button>
                <button className="dark:text-yellow-400 dark:border-yellow-300 ease-out duration-300 learn border-solid text-2xl p-2 text-white ml-2 mt-5 pr-5 hover:bg-white hover:text-[#85650e] hover:scale-105">
                  LEARN MORE
                </button>
              </div>
              <a href="#insidernav">
                <HiOutlineArrowNarrowDown className=" animate-bounce dark:text-yellow-300 dark:ml-4 ml-16 text-3xl" />
              </a>
            </div>

            <img
              className="dark:rounded-full lg:dark:rounded-none md:dark:bg-inherit md:dark:rounded-none lg:dark:bg-yellow-400 lg:dark:w-6/12 dark:bg-yellow-400  relative  rounded-full  mt-20 sm:mt-0 bg-white h-2/3 w-8/12 mx-auto sm:rounded-none sm:bg-inherit sm:h-2/3 md:w-6/12 md:absolute md:top-0 md:-right-0  lg:fixed top-0 lg:-right-7 md:h-full z-10"
              alt="my_AI_generated_image"
              src={herobg}
              ref={hero}
            />
          </div>
        </div>
      </div>

      <div
        id="insidernav"
        className="dark:bg-[#040b1e] relative lg:absolute top-full  pt-32 w-full min-h-full  z-5"
      >
        <div ref={about}>
          <p className="lg:dark:ml-8 sm:ml-6  dark:text-yellow-300 text-4xl text-[#000223] font-semibold text-center sm:text-left  mb-2  lg:ml-20 pt-10">
            ABOUT ME
          </p>
          <div data-aos="fade-up" data-aos-duration="1300" className="">
            <p className="lg:dark:ml-8 w-11/12 mx-auto  dark:text-[#aaaa8d] dark:lg:w-5/12 lg:w-5/12 lg:ml-20 text-lg text-gray-800">
              With 2 years of experience, I have honed my ability to stay
              focused and productive, even under heavy amounts of stress. My
              friends often come to me for help with their coding projects,
              which is a testament to my skills and dedication to the craft. One
              of my greatest strengths as a web developer is my problem-solving
              skills.
              <br></br> <br></br> I find great satisfaction in breaking down
              complex issues and building elegant and functional websites. I am
              always looking for new ways to expand my knowledge and stay
              current with the latest trends and technologies in web
              development. My long-term goal is to become a senior web developer
              and eventually start my own development firm.
              <br></br>
              <br></br>I am constantly pushing my limits and seeking new
              challenges, both professionally and personally. I believe that
              continuous learning and growth are key to success in this field.
            </p>
            <button
              data-aos="fade-up"
              className="lg:dark:ml-8  rounded-full  dark:bg-yellow-400  dark:text-black ease-out font-semibold duration-300 bg-[#00034a] text-1xl mt-5  p-2 mx-a text-white sm:ml-4 lg:ml-28 sm:mt-5 pr-4 pl-4 hover:bg-[#1a05ae] hover:scale-105"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="dark:bg-[#040b1e] relative lg:w-6/12 lg:mt-96 lg:pt-72  lg:float-right  ">
          <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-yellow-300 text-5xl text-[#000223] font-semibold  mb-6  lg:ml-28 ">
            SKILLS
          </p>
          <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold  mb-2 mt-6  lg:ml-28 ">
            FRONT-END
          </p>
          <div className="  flex flex-wrap  justify-center  h-26">
            {front_endskills.map(({ img, name }) => {
              return (
                <div
                  key={name}
                  className=" bg-[#6b87d21c] pt-2 m-2 grid justify-center w-32 h-32 rounded-xl"
                >
                  <img className="h-20 w-full" src={img} alt="javascript" />
                  <p className="text-center text-1xl dark:text-[#dab92d]">
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold  mb-2  mt-8 ">
            BACKEND-END
          </p>
          <div className="  flex flex-wrap  justify-center  h-26">
            {back_endskills.map(({ img, name }) => {
              return (
                <div
                  key={name}
                  className=" bg-[#6b87d21c] pt-2 m-2 grid justify-center w-32 h-32 rounded-xl"
                >
                  <img className="h-20" src={img} alt="javascript" />
                  <p className="text-center text-1xl dark:text-[#dab92d]">
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full relative bg-red-300 "></div>
      </div>
    </div>
  );
}

export default Landing;
