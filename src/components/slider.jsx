import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AIapp from "../assets/projects/AIapp.JPG";
import AGCera from "../assets/projects/AGCera.JPG";
import musicapp from "../assets/projects/musicapp.JPG";
function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    className: "center",
    centerMode: true,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="bg-blue-900 w-96   m-1 rounded-md cursor-pointer overflow-hidden relative">
          <img
            src={AIapp}
            className=" bg-cover ease-in duration-100 w-10/12 hover:scale-105  mx-auto"
            alt="projectImage"
          />
          <div className="absolute  right-0 -bottom-20">
            <h2 className="text-white text-3xl">AI app</h2>
            <p className="text-white">details</p>
            <a href="#" className="text-yellow-200">
              demo
            </a>
          </div>
        </div>
        <div className="bg-blue-400 w-10/12 h-4/5  m-1 rounded-md cursor-pointer overflow-hidden relative">
          <img
            src={musicapp}
            className=" bg-cover  w-10/12 ease-in duration-100 hover:scale-105 h-fit mx-auto"
            alt="projectImage"
          />
          <div className="absolute right-0 -bottom-0">
            <h2 className="text-white text-3xl">AI app</h2>
            <p className="text-white">details</p>
            <a href="#" className="text-yellow-200">
              demo
            </a>
          </div>
        </div>
        <div className="bg-blue-200  w-10/12 h-4/5   m-1 rounded-md cursor-pointer overflow-hidden relative">
          <img
            src={AGCera}
            className=" bg-cover  w-10/12 ease-in duration-100 hover:scale-105  mx-auto"
            alt="projectImage"
          />
          <div className="absolute right-0 -bottom-20">
            <h2 className="text-white text-3xl">AI app</h2>
            <p className="text-white">details</p>
            <a href="#" className="text-yellow-200">
              demo
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
