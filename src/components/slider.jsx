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
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
      demo: "https://github.com/Gabriel-mdv/agcera",
    },
    {
      img: AIapp,
      name: "AI app",
      desc: "openAI api app",
      demo: "https://github.com/Kevin-ishimwe/blog-website",
    },
    {
      img: AGCera,
      name: "health website",
      demo: "https://github.com/Gabriel-mdv/agcera",
    },
    {
      img: AIapp,
      name: "AI app",
      desc: "openAI api app",
      demo: "https://github.com/Kevin-ishimwe/blog-website",
    },
  ];
  return (
    <div className="dark:bg-[#040b1e]">
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
  );
}

export default SliderComponent;
