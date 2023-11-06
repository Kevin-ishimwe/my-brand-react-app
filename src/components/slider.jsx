import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AIapp from "../assets/projects/AIapp.JPG";
import lotus from "../assets/projects/lotus.png";
import musicapp from "../assets/projects/musicapp.JPG";
import Capture from "../assets/projects/Capture.png";
import reddy from "../assets/projects/reddy.png";
import ecommerce from "../assets/projects/ecommerce.PNG";
import devpulse from "../assets/projects/devpulse.png";
import Chatterflow from "../assets/projects/Chatterflow.png";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  const slides = [
    {
      img: Capture,
      name: "Team freelancers website",
      desc: "I worked closely with the content team to ensure that the website's design and functionality aligned with the organization's mission to promote healthy living and well-being.",
      demo: "https://weblifyhub.com/",
    },
    {
      img: lotus,
      name: "Lotus revenu",
      desc: "book hotels,rent cars on your next trip . we have numerous destinations all over europe ,latin america and all over then world ",
      demo: "https://kevin-demo-4.netlify.app/",
    },
    {
      img: musicapp,
      name: "Music app",
      desc: "Whether you're a casual listener, a serious musician, or somewhere in between, we've got you covered with the latest news, reviews, and insights from the world of music.",
      demo: "https://jovial-profiterole-3bf938.netlify.app/",
    },
    {
      img: devpulse,
      name: "dev pulse",
      desc: "The number one platform for managing trainees or students in any ed-tech organization ",
      demo: "https://beta.devpulse.org/",
    },
    {
      img: Chatterflow,
      name: "Chatterflow",
      desc: "Chatterflow a company a build chatbots for universities and other insitutions helping to get higher conversion rates",
      demo: "https://chatterflow-dev-branch.netlify.app/",
    },
    {
      img: reddy,
      name: "portfolio website",
      desc: "Welcome to our front-end development website, where we showcase the latest trends and techniques in building stunning user interfaces and web applications.",
      demo: "https://my-public-portfolio101.netlify.app/",
    },
    {
      img: ecommerce,
      name: "Ecommerce web app",
      desc: "shop with ease from the comfort of your own home. Our platform is designed to provide you with a seamless online shopping experience, featuring a wide selection of products from various categories.",
      demo: "https://ecommerce-app-legends-fe.vercel.app/",
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
                  className=" bg-contain w-full min-h-[20em]  ease-in duration-100 "
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
