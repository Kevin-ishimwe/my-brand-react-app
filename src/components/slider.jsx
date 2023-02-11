import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AIapp from "../assets/projects/AIapp.JPG";
import AGCera from "../assets/projects/AGCera.JPG";
import musicapp from "../assets/projects/musicapp.JPG";

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
      <div>
        <form className="flex flex-col dark:bg-slate-700   w-fit p-3 mx-auto">
          <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
            im always
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block mx-2">
              <span class="relative text-white">a call</span>
            </span>
            away
          </blockquote>
          <div className="flex flex-row mt-2  ">
            <label className="mr-3">
              <span class="dark:text-yellow-400  after:content-['*'] after:ml-0.5 after:text-red-500 block w-fit text-sm font-medium text-slate-700">
                name
              </span>
              <input
                required
                type="text"
                min="4"
                className="mt-1 px-3 dark:text-white  py-2 dark:bg-slate-800 bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400 w-80 focus:outline-none focus:border-yellow-200 focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1"
                placeholder="i.e kevin"
                name="name"
              />
            </label>
            <label>
              <span class="dark:text-yellow-400 after:content-['*'] after:ml-0.5 after:text-red-500 block w-fit text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="peer mt-1 px-3 dark:text-white  py-2 dark:bg-slate-800 bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400 w-80 focus:outline-none focus:border-yellow-200 focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
              <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </label>
          </div>
          <textarea
            required
            className=" px-3 py-2 dark:text-white  dark:bg-slate-800 mt-3 min-h-[30vh] bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400 w-full text-xl focus:outline-none focus:border-yellow-200 block focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1"
            type="text"
            placeholder="kjkfhhb"
          >
            type your message here....
          </textarea>
          <button
            type="submit"
            class="inline-block mt-3 px-6 py-2.5 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black  font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default SliderComponent;
