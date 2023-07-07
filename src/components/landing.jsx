import React, { useState, useEffect, useRef, useContext } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import SliderComponent from "./slider";
import herobg from "../assets/herobg.png";
import Navbar from "./navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";
import GADS from "../assets/certificates/GADS Certificate - Ishimwe Kevin.png";
import FREE from "../assets/certificates/freecodecamp.PNG";
import Footer from "./footer";
import BlogsContext from "./getblogs";
import { Link } from "react-router-dom";
import ABOUT_ME from "./about";
import Skillz from "./skillz";
import Contact from "./contact";

function Landing() {
  const [blogs, setblogs] = useState([]);
  const allblogs = useContext(BlogsContext);

  useEffect(() => {
   AOS.init({
     disable: "mobile",
   });
  }, []);

  const hero = useRef();
  useEffect(() => {
    setblogs(allblogs);
    console.log(allblogs);
  }, [allblogs]);
  const steps = ["FULLSTACK WEB DEVELOPER", 3000];

  return (
    <div>
      <Navbar />
      <div id=" dark:bg-[#040b1e]">
        <div className="dark:from-[#040b1e] dark:to-[#040b1e]  relative lg:min-h-[140vh]   w-full  ">
          <div className=" flex  flex-col-reverse md:dark:flex-col-reverse md:dark:flex sm:-mt-20 sm:w-full md:pt-0 lg:pb-11  md:mt-0  lg:mb-0 lg:mt-0  ">
            <div className="flex h-fit lg:h-[250vh]  lg:flex-row flex-col-reverse  mt-0 dark:bg-[#040b1e]">
              <div className=" flex flex-col h-fit justify-left lg:h-[100vh] lg:w-[50vw]  lg:bg-[#fcfcfc] dark:bg-[#040b1e]">
                <p className="dark:text-yellow-400  text-center lg:text-left mt-4 text-4xl sm:ml-4 md:ml-8 md:text-4xl text-[#000223] lg:mt-[25vh]">
                  hey there,I'm
                </p>
                <p
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="3200"
                  className="dark:text-yellow-400   text-center lg:text-left mt-4 text-4xl sm:ml-4 md:ml-8  md:text-5xl text-[#000223] font-semibold sm:mt-1 mb-2  lg:ml-8"
                >
                  ISHIMWE KEVIN
                </p>

                <Typical
                  data-aos-id="my-element"
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className=" transition-all dark:text-yellow-400  text-center lg:text-left mt-1 text-2xl sm:ml-4 md:ml-8  md:text-3xl text-[#000223] font-semibold  "
                  steps={steps}
                  loop={Infinity}
                  wrapper="p"
                />

                <p
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                  className="dark:text-[#aaaa8d] w-full text-center lg:text-left  sm:ml-4 md:ml-8 sm:w-fit  mt-4 text-xl text-gray-800 "
                >
                  I strive to create visually appealing and functional websites
                  that deliver a great user experience. I am always looking for
                  new challenges and I am eager to bring your web projects to
                  life. Let's create something amazing together!
                </p>
                <div className="flex justify-center mb-6 lg:justify-start  ">
                  <a
                    href="#ContactPage"
                    className="  dark:bg-yellow-600 dark:text-[#040b1e] font-semibold ease-out duration-300 bg-[#00034a] text-2xl mt-5  p-2 mx-a text-white sm:ml-4 lg:ml-8 sm:mt-5 pr-4 pl-4 hover:bg-[#1a05ae] hover:scale-105"
                  >
                    CONTACT ME
                  </a>
                  <a
                    href="#skillz"
                    className="dark:text-yellow-400 dark:border-yellow-300 ease-out duration-300 learn border-solid text-2xl p-2 text-white ml-2 mt-5 pr-5 hover:border-[#85650e] hover:text-[#85650e] hover:scale-105"
                  >
                    LEARN MORE
                  </a>
                </div>
                <a
                  href="#insidernav"
                  className="grid justify-center lg:block mt-5"
                >
                  <HiOutlineArrowNarrowDown className=" animate-bounce dark:text-yellow-300 dark:ml-4 ml-16 text-3xl" />
                </a>
              </div>
              <img
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
                data-aos-once={true}
                className=" lg:bg-[#e3ad40] rounded-full lg:rounded-none dark:bg-yellow-400  relative sm:mt-20 lg:mt-0 h-2/3 w-8/12 mx-auto  sm:bg-inherit sm:h-2/3 md:w-6/12 md:top-0 md:-right-0  lg:sticky lg:top-0 bottom-0 lg:-right-0 md:h-[fit] z-10 lg:w-max-[80em] lg:w-[55vw] lg:h-[100vh] lg:object-cover xl:object-contain clipper "
                alt="my_AI_generated_image"
                src={herobg}
                ref={hero}
              />
            </div>
          </div>
        </div>

        <div
          id="insidernav"
          className="dark:bg-[#040b1e] relative bg-white lg:absolute top-full  md:pt-24 w-full min-h-full  z-5"
        >
          <ABOUT_ME />
          <Skillz />

          <div className="dark:bg-[#040b1e] w-full  absolute top-full   bg-[#fcfcfc] ">
            <p className="lg:dark:ml-8 sm:ml-6   dark:text-yellow-300 text-4xl text-[#000223] font-semibold text-center   mb-2  lg:ml-20 pt-10 ">
              my
              <span className="border-b-4 dark:border-yellow-400 border-[#000223] pl-2">
                bl
              </span>
              ogs
            </p>
            <div
              id="parent"
              className="flex pt-0 md:pt-5 overflow-x-scroll md:overflow-auto lg:py-10 lg:justify-center  "
            >
              {blogs.map(({ blogTitle, _id, blogDescription, blogImg }) => {
                return (
                  <div
                    className="flex justify-center scale-[.9] hover:scale-100 transition-all"
                    key={_id}
                  >
                    <div className="rounded-lg shadow-2xl bg-white dark:bg-slate-900  max-w-[20em] min-w-[18em] ">
                      <Link to={`/singleblog?id=${_id}`}>
                        <img
                          data-aos="flip-right"
                          data-aos-offset="100"
                          className="rounded-t-lg h-[40vh] w-full object-cover"
                          src={blogImg}
                          alt=""
                        />
                      </Link>
                      <div className="p-6">
                        <h5 className="text-gray-900 text-xl dark:text-yellow-300 font-semibold ">
                          {blogTitle}
                        </h5>
                        <p className="text-gray-700 dark:text-gray-500 max-h-[4.8em] overflow-hidden line-clamp-3 ">
                          {blogDescription}
                        </p>
                        <Link
                          to={`/singleblog?id=${_id}`}
                          className=" decoration-none w-fit  flex px-2 py-1 dark:bg-[#182449] bg-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black  mt-2 dark:text-yellow-400 text-black font-semibold text-sm  uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              id="myWork"
              className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold   "
            >
              PROJECTS
            </p>
            <SliderComponent />
            <div className="mb-20 mt-8">
              <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold  mb-2  mt-8 ">
                Certifications
              </p>
              <div className="flex justify-center flex-wrap">
                <a
                  href="https://adscerts.com/scholar/5CD62B056ECD15A"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GADS}
                    data-aos="flip-left"
                    alt=""
                    className="w-[90vw] md:w-[30em] md:h-[23em] md:hover:scale-105 transition-all mx-4 shadow-2xl"
                  />
                </a>
                <a
                  href="https://www.freecodecamp.org/certification/ish_kevin/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={FREE}
                    data-aos="flip-right"
                    alt=""
                    className="w-[90vw] md:h-[23em] md:w-[30em] md:hover:scale-105 transition-all shadow-xl "
                  />
                </a>
              </div>
            </div>
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
