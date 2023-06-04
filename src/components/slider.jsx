import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AIapp from "../assets/projects/AIapp.JPG";
import musicapp from "../assets/projects/musicapp.JPG";
import Capture from "../assets/projects/Capture.JPG";
import reddy from "../assets/projects/reddy.png";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style
      }}
      onClick={onClick}
    />
  );
}
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
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SamplePrevArrow />,
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
      desc: "Welcome to our AI website, where we explore the latest developments in artificial intelligence and the groundbreaking work being done by OpenAI.",
      demo: "https://github.com/Kevin-ishimwe/MusicWebApp",
    },
    {
      img: reddy,
      name: "portfolio website",
      desc: "Welcome to our front-end development website, where we showcase the latest trends and techniques in building stunning user interfaces and web applications.",
      demo: "https://my-public-portfolio101.netlify.app/",
    },
    {
      img: musicapp,
      name: "AI app",
      desc: "Whether you're a casual listener, a serious musician, or somewhere in between, we've got you covered with the latest news, reviews, and insights from the world of music.",
      demo: "https://github.com/Kevin-ishimwe/MusicWebApp",
    },
    {
      img: Capture,
      name: "health website",
      desc: "I worked closely with the content team to ensure that the website's design and functionality aligned with the organization's mission to promote healthy living and well-being.",
      demo: "https://agceramoz.com",
    },
  ];
  return (
    <div className="dark:bg-[#040b1e]">
      <div className="min-h-[34em]">
        <Slider {...settings}>
          {slides.map(({ img, name, demo, desc }) => {
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
                  <h2 className="text-white text-2xl ml-2">{name}</h2>
                  <p className="text-white text-xs px-2">{desc}</p>
                  <a
                    href={demo}
                    target="_blank"
                    className="text-pink-600 ml-2 font-semibold border-b-2"
                    rel="noreferrer"
                  >
                    visit
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponent;
