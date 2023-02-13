import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AIapp from "../assets/projects/AIapp.JPG";
import AGCera from "../assets/projects/AGCera.JPG";
import musicapp from "../assets/projects/musicapp.JPG";
import contact from "../assets/contact.png";

function SliderComponent() {
  const settings = {
    lazyLoad: true,
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1700,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const slides = [
    {
      img: AIapp,
      name: "music app",
      demo: "https://github.com/Kevin-ishimwe/MusicWebApp",
    },
    {
      img: AGCera,
      name: "health website",
      demo: "https://agceramoz.com",
    },
    {
      img: musicapp,
      name: "AI app",
      desc: "openAI api app",
      demo: "https://github.com/Kevin-ishimwe/blog-website",
    },
    {
      img: AGCera,
      name: "health website",
      demo: "https://agceramoz.com",
    },
  ];
  return (
    <div className="dark:bg-[#040b1e]">
      <div style={{ minHeight: "50vw" }}>
        <Slider {...settings}>
          {slides.map(({ img, name, demo }) => {
            return (
              <div
                key={img}
                id="div_see"
                className="   m-1 rounded-md cursor-pointer overflow-hidden relative"
              >
                <img
                  src={img}
                  className=" bg-cover w-full h-80  ease-in duration-100 "
                  alt="projectImage"
                />
                <div
                  id="div_see_text"
                  className="absolute -top-96 right-0 scale-y-150 "
                >
                  <h2 className="text-white text-2xl">{name}</h2>
                  <p className="text-white">details</p>
                  <a href={demo} className="text-yellow-200">
                    demo
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="flex w-11/12 pb-4 mx-auto shadow-[2px 3px 20px #8080807a] rounded-2xl dark:bg-slate-900 mt-20 lg:w-5/12 md:mt-0">
        <form className="flex flex-col w-full px-5">
          <h1 className=" text-center  text-6xl font-semibold font-sans mb-4 text-[#040b1e]">
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
            placeholder="type your message here...."
          />

          <button
            type="submit"
            className="inline-block mt-3 px-6 py-2.5 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black  font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            SEND
          </button>
        </form>
        {/* <div className="hidden md:grid  h-[100%] bg-[#ecb723] rounded-xl ">
          <h1 className="text-6xl text-[#000223] font-[Romanesco] font-bold text-center h-[12vh] mt-[3vh]">
            get in touch
          </h1>
          <img src={contact} alt="me" className="h-[53vh] " />
        </div> */}
      </div>
    </div>
  );
}

export default SliderComponent;
