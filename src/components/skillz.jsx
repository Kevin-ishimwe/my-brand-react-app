import React from "react";
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
import postgresql from "../assets/postgresql.png";
import jwt from "../assets/jwt.png";
import figma from "../assets/figma.png";
import swagger from "../assets/swagger.png";
import jest from "../assets/jest.png";
import git from "../assets/git.png";
import docker from "../assets/docker.png";

function Skillz() {
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
    { img: postgresql, name: "postgresql" },
  ];
  const other_skills = [
    { img: git, name: "git/github" },
    { img: jest, name: "jest" },
    { img: swagger, name: "docs" },
    { img: figma, name: "figma" },
    { img: docker, name: "docker" },
  ];
  return (
    <div
      id="skill1"
      data-aos="fade-down"
      data-aos-duration="500"
      className="pt-12   relative lg:w-[50vw]   lg:float-right  lg:mt-[50vh] mb-5"
    >
      <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-yellow-300 text-4xl text-[#000223] font-semibold  mb-6  lg:ml-28 lg:mt-9 ">
        SKILLS
      </p>
      <p
        id="skillz"
        data-aos="fade-up"
        data-aos-anchor="#skill1"
        data-aos-duration="500"
        className="lg:dark:ml-8   text-center mx-2  dark:text-[#aaaa8d] md:text-left   text-lg text-gray-800"
      >
        I am constantly pushing my limits and seeking new challenges, both
        professionally and personally. I believe that continuous learning and
        growth are key to success in this field.
      </p>

      <p
        id="anchor_p"
        className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold  mb-2 mt-6  lg:ml-28 "
      >
        FRONT-END
      </p>
      <div className="  flex flex-wrap  justify-center  h-26">
        {front_endskills.map(({ img, name }) => {
          return (
            <div
              id="anchor_p"
              data-aos="flip-up"
              data-aos-duration="700"
              key={name}
              className=" bg-[#6b87d21c] pt-2 m-2 grid justify-center w-32 h-32 rounded-xl"
            >
              <img className="h-20 w-full" src={img} alt="javascript" />
              <p className="text-center text-1xl dark:text-[#dab92d]">{name}</p>
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
              data-aos="flip-up"
              data-aos-duration="700"
              className=" bg-[#6b87d21c] pt-2 m-2 grid justify-center w-32 h-32 rounded-xl"
            >
              <img className="h-20" src={img} alt="javascript" />
              <p className="text-center text-1xl dark:text-[#dab92d]">{name}</p>
            </div>
          );
        })}
      </div>
      <p className="lg:dark:ml-8 sm:ml-6 text-center dark:text-[#d9a91a] text-3xl text-[#000223] font-semibold  mb-2 mt-6  lg:ml-28 ">
        Others
      </p>
      <div
        data-aos="flip-up"
        data-aos-duration="700"
        className="  flex flex-wrap  justify-center  h-26"
      >
        {other_skills.map(({ img, name }) => {
          return (
            <div
              key={name}
              className=" bg-[#6b87d21c] pt-2 m-2 grid justify-center w-32 h-32 rounded-xl"
            >
              <img className="h-20" src={img} alt="javascript" />
              <p className="text-center text-1xl dark:text-[#dab92d]">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skillz;
