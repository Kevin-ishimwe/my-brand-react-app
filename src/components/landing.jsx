import React, { useState, useEffect, useRef, useContext } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import SliderComponent from "./slider";
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
import figma from "../assets/figma.png";
import swagger from "../assets/swagger.png";
import jest from "../assets/jest.png";
import git from "../assets/git.png";
import Footer from "./footer";
import { RiDownloadCloudFill } from "react-icons/ri";
import BlogsContext from "./getblogs";

function Landing() {
  const [err, seterr] = useState("");
  const [message, setmessage] = useState("");
  const popup = useRef();
  const [blogs, setblogs] = useState([]);
  const allblogs = useContext(BlogsContext);

  useEffect(() => {
    AOS.init();
  }, []);
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
  const other_skills = [
    { img: git, name: "git/github" },
    { img: jest, name: "jest" },
    { img: swagger, name: "docs" },
    { img: figma, name: "figma" },
  ];
  const about = useRef();
  const hero = useRef();
  useEffect(() => {
    window.onscroll = () => {
      if (window.visualViewport.width > 1024) {
        if (Math.floor(window.scrollY) > 1900) {
          hero.current.style.position = "absolute";
          about.current.style.position = "absolute";
          about.current.style.top = "180vh";
        } else if (Math.floor(window.scrollY) > 790) {
          // console.log(window.scrollY);

          hero.current.style.position = "absolute";
          hero.current.style.top = "116vh";
          hero.current.style.right = "0%";
          about.current.style.position = "fixed";
          about.current.style.top = "3vh";

          console.log(Math.floor(window.scrollY));
        } else {
          hero.current.style.position = "fixed";
          hero.current.style.top = "0vh";
          about.current.style.position = "relative";
          about.current.style.top = "3vh";
        }
      }
    };
  }, []);
  useEffect(() => {
    setblogs(allblogs);
    console.log(allblogs);
  }, [allblogs]);
  const handleMessage = async (e) => {
    e.preventDefault();
    document.getElementById("wait").style.display = "grid";
    e.target.lastChild.children[1].textContent = ` LOADING...`;

    await fetch("https://fair-teal-chinchilla-tam.cyclic.app/addmessages", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        content: e.target.content.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        popup.current.style.display = "grid";
        document.getElementById("wait").style.display = "none";
        e.target.lastChild.children[1].textContent = "SEND";
        e.target.reset();
        if (data.status === "success") {
          setmessage(data.message);
          setTimeout(() => {
            popup.current.style.display = "none";
            setmessage("");
          }, 2000);
        } else {
          seterr(data.message);
          setTimeout(() => {
            popup.current.style.display = "none";
            seterr("");
          }, 2000);
        }
        console.log(data);
      });
  };

  return (
    <div id="landingnone">
      <div className="hidden fixed z-10" ref={popup}>
        {err.length > 0 ? (
          <div
            className="bg-red-500 rounded-lg py-5 px-6 mb-3 text-base text-white inline-flex items-center w-fit fixed top-20 right-5"
            role="alert"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times-circle"
              className="w-4 h-4 mr-2 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
              ></path>
            </svg>
            {err}
          </div>
        ) : (
          <div
            className="bg-green-400 rounded-lg p-5 px-6 mb-3 text-base text-green-900 inline-flex items-center w-fit fixed top-20 right-5"
            role="alert"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check-circle"
              className="w-4 h-4 mr-2 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>
            {message}
          </div>
        )}
      </div>

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
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="dark:text-[#aaaa8d] sm:dark:ml-6 w-full text-center md:text-left md:dark:w-8/12 sm:ml-4 md:ml-8 sm:w-fit md:w-2/3 dark:lg:w-7/12 lg:w-9/12 lg:ml-20 mt-4 text-xl text-gray-800"
              >
                I strive to create visually appealing and functional websites
                that deliver a great user experience. I am always looking for
                new challenges and I am eager to bring your web projects to
                life. Let's create something amazing together!
              </p>
              <div className="flex justify-center mb-6 md:justify-start  ">
                <button
                  onClick={() => {
                    if (window.visualViewport.width > 900) {
                      window.scrollTo(0, 3850);
                    } else {
                      document.getElementById("ContactPage").scrollIntoView();
                    }
                  }}
                  className="sm:dark:ml-6  dark:bg-[#B4862A] dark:text-black font-semibold ease-out duration-300 bg-[#00034a] text-2xl mt-5  p-2 mx-a text-white sm:ml-4 lg:ml-20 sm:mt-5 pr-4 pl-4 hover:bg-[#1a05ae] hover:scale-105"
                >
                  CONTACT ME
                </button>
                <a
                  href="#skillz"
                  className="dark:text-yellow-400 dark:border-yellow-300 ease-out duration-300 learn border-solid text-2xl p-2 text-white ml-2 mt-5 pr-5 hover:bg-white hover:text-[#85650e] hover:scale-105"
                >
                  LEARN MORE
                </a>
              </div>
              <a href="#insidernav">
                <HiOutlineArrowNarrowDown className=" animate-bounce dark:text-yellow-300 dark:ml-4 ml-16 text-3xl" />
              </a>
            </div>

            <img
              data-aos="fade-zoom-in"
              data-aos-duration="2000"
              data-aos-once={true}
              className="dark:rounded-full lg:dark:rounded-none md:dark:bg-inherit md:dark:rounded-none lg:dark:bg-yellow-400 lg:dark:w-6/12 dark:bg-yellow-400  relative  rounded-full  mt-20 sm:mt-32 md:mt-0 bg-white h-2/3 w-8/12 mx-auto sm:rounded-none sm:bg-inherit sm:h-2/3 md:w-6/12 md:absolute md:top-0 md:-right-0  lg:fixed top-0 lg:-right-7 md:h-full z-10"
              alt="my_AI_generated_image"
              src={herobg}
              ref={hero}
            />
          </div>
        </div>
      </div>

      <div
        id="insidernav"
        className="dark:bg-[#040b1e] relative lg:absolute top-full  md:pt-32 w-full min-h-full  z-5"
      >
        <div
          data-aos="fade-up"
          data-aos-once={true}
          data-aos-duration="1000"
          ref={about}
        >
          <p className="lg:dark:ml-8 sm:ml-6  dark:text-yellow-300 text-4xl text-[#000223] font-semibold text-center md:text-left  mb-2  lg:ml-20 pt-10">
            ABOUT ME
          </p>
          <div className=" flex flex-col justify-center ">
            <p className="lg:dark:ml-8 w-11/12 text-center mx-auto  dark:text-[#aaaa8d] dark:lg:w-5/12 md:text-left lg:w-5/12 lg:ml-20 text-lg text-gray-800">
              With over 2 years of experience, I have honed my ability to stay
              focused and productive, even under heavy amounts of stress. My
              friends often come to me for help with their coding projects,
              which is a testimony to my skills and dedication to the craft. One
              of my greatest strengths as a web developer is my problem-solving
              skills.
              <br></br> I find great satisfaction in breaking down complex
              issues and building elegant and functional websites. I am always
              looking for new ways to expand my knowledge and stay current with
              the latest trends and technologies in web development. My
              long-term goal is to become a senior web developer and eventually
              start my own development firm.
              <br></br>
              <br></br>I am constantly pushing my limits and seeking new
              challenges, both professionally and personally. I believe that
              continuous learning and growth are key to success in this field.
            </p>
            <a
              id="skillz"
              href="../assets/myResumeKevin.pdf"
              data-aos="fade-up"
              className=" flex lg:dark:ml-8  mt-10 rounded-full  dark:bg-yellow-400  mx-auto dark:text-black ease-out font-semibold duration-300 bg-[#00034a] text-1xl mb-5 max-w-fit  p-2 mx-a text-white sm:ml-4 lg:ml-28 sm:mt-5 pr-4 pl-4 hover:bg-[#1a05ae] hover:scale-105"
              download
            >
              <RiDownloadCloudFill className="text-2xl mr-2" />
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <div
          id="anchor_p"
          data-aos="fade-down"
          className="dark:bg-[#040b1e] relative lg:w-6/12 lg:mt-96 lg:pt-72 lg:pb-32  lg:float-right "
        >
          <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-yellow-300 text-5xl text-[#000223] font-semibold  mb-6  lg:ml-28 lg:mt-9 ">
            SKILLS
          </p>
          <p
            id="anchor_p"
            className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold  mb-2 mt-6  lg:ml-28 "
          >
            FRONT-END
          </p>
          <div
            id="skill1"
            data-aos-anchor="#anchor_p"
            data-aos-duration="1000"
            data-aos="fade-up"
            className="  flex flex-wrap  justify-center  h-26"
          >
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
          <div
            data-aos="fade-up"
            data-aos-anchor="#skill1"
            data-aos-duration="900"
            className="  flex flex-wrap  justify-center  h-26"
          >
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
          <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold  mb-2 mt-6  lg:ml-28 ">
            Others
          </p>
          <div
            data-aos="fade-up"
            data-aos-anchor="#skill1"
            data-aos-duration="1000"
            className="  flex flex-wrap  justify-center  h-26"
          >
            {other_skills.map(({ img, name }) => {
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
        <div className="dark:bg-[#040b1e] w-full  absolute top-full lg:pt-5  bg-[#fcfcfc] ">
          {
            <div
              id="parent"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="flex pt-0 md:pt-5 overflow-x-scroll md:overflow-auto "
            >
              {blogs.map(({ blogTitle, _id, blogDescription, blogImg }) => {
                return (
                  <div className="flex justify-center mx-3 scale-95" key={_id}>
                    <div className="rounded-lg shadow-2xl bg-white dark:bg-slate-900  max-w-sm min-w-[25em] ">
                      <a href={`/my-brand-react-app/singleblog?id=${_id}`}>
                        <img
                          data-aos-anchor="#parent"
                          data-aos="flip-right"
                          data-aos-offset="30"
                          className="rounded-t-lg"
                          src={blogImg}
                          alt=""
                        />
                      </a>
                      <div className="p-6">
                        <h5 className="text-gray-900 text-xl dark:text-yellow-300 font-semibold ">
                          {blogTitle}
                        </h5>
                        <p className="text-gray-700 dark:text-gray-500 text-base h-24 overflow-hidden text-ellipsis whitespace-pre-wrap">
                          {blogDescription}
                        </p>
                        <a
                          href={`/my-brand-react-app/singleblog?id=${_id}`}
                          className=" decoration-none w-fit  flex px-2 py-1.5 dark:bg-[#182449] bg-yellow-500  mt-2 dark:text-yellow-400 text-black font-semibold text-sm  uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          READ MORE
                          <svg
                            className="ml-5 dark:text-yellow-500 "
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          }
          <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold  mb-2 mt-12   ">
            PROJECTS
          </p>
          <SliderComponent />

          <div id="ContactPage">
            <div className="flex w-11/12 pb-4 mx-auto shadow-[2px 3px 20px #8080807a] rounded-2xl dark:bg-slate-900 mt-20 lg:w-5/12 md:mt-0 min-h-[50vh]">
              <form
                className="flex flex-col w-full px-5"
                onSubmit={handleMessage}
              >
                <h1 className=" text-center  text-6xl font-semibold font-sans mb-4 text-[#040b1e] dark:text-yellow-100">
                  get in touch
                </h1>
                <blockquote className="text-2xl font-semibold italic text-center text-slate-900 dark:text-gray-200">
                  im always
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block mx-2">
                    <span className="relative text-white">a text</span>
                  </span>
                  away
                </blockquote>
                <div className="flex flex-row mt-2 ">
                  <label className="mr-3 w-5/12">
                    <span className="dark:text-yellow-400  after:content-['*'] after:ml-0.5 after:text-red-500 block w-fit text-sm font-medium text-slate-700">
                      name
                    </span>
                    <input
                      required
                      type="text"
                      min="4"
                      className="mt-1 px-3 dark:text-white  py-2 dark:bg-slate-800 bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400 w-full focus:outline-none focus:border-yellow-200 focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1"
                      placeholder="i.e kevin"
                      name="name"
                    />
                  </label>
                  <label className="w-7/12">
                    <span className="dark:text-yellow-400 after:content-['*'] after:ml-0.5 after:text-red-500 block w-fit text-sm font-medium text-slate-700">
                      Email
                    </span>
                    <input
                      required
                      autoFocus
                      type="email"
                      name="email"
                      className="peer mt-1 px-3 dark:text-white  py-2 dark:bg-slate-800 bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400  focus:outline-none focus:border-yellow-200 focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1 w-full"
                      placeholder="you@example.com"
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-red-400 text-sm">
                      Please provide a valid email address.
                    </p>
                  </label>
                </div>
                <textarea
                  required
                  className=" px-3 py-2 dark:text-white  dark:bg-slate-800 mt-3 min-h-[30vh] bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400 w-full text-xl focus:outline-none focus:border-yellow-200 block focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1"
                  type="text"
                  name="content"
                  placeholder="type your message here...."
                />
                <div className="flex justify-center ">
                  <div
                    id="wait"
                    className=" hidden h-5 w-5 mt-4 absolute  mr-24 animate-spin rounded-full border-2 border-solid border-white border-r-transparent  motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  />
                  <button
                    type="submit"
                    className=" mt-2 w-full  py-2.5 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black dark:active:bg-yellow-200  font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  transition duration-150 ease-in-out"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Landing;
