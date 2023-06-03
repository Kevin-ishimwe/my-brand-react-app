import React from "react";
import { RiDownloadCloudFill } from "react-icons/ri";

function ABOUT_ME() {
  return (
    <div className="relative lg:sticky top-0 min-h-screen flex flex-col justify-center lg:w-[50vw] ">
      <p className="lg:dark:ml-8 sm:ml-6   dark:text-yellow-300 text-3xl text-[#000223] font-semibold text-center lg:text-left  mb-5  lg:ml-8 lg:mb-5 ">
        ab
        <span className="border-b-4 dark:border-yellow-400 border-[#000223] pr-2">
          out
        </span>
        me
      </p>
      <div className=" flex flex-col justify-center ">
        <p className="lg:dark:ml-8 w-11/12 text-center mx-auto  dark:text-[#aaaa8d]  md:text-left  lg:ml-8 text-lg text-gray-800">
          With over 2 years of experience, I have honed my ability to stay
          focused and productive, even under heavy amounts of stress. My friends
          often come to me for help with their coding projects, which is a
          testimony to my skills and dedication to the craft. One of my greatest
          strengths as a web developer is my problem-solving skills.
          <br></br>
          <br></br> I find great satisfaction in breaking down complex issues
          and building elegant and functional websites. I am always looking for
          new ways to expand my knowledge and stay current with the latest
          trends and technologies in web development. My long-term goal is to
          become a senior web developer and eventually start my own development
          firm.
          <br></br>
        </p>
        <a
          id="skillz"
          href="https://firebasestorage.googleapis.com/v0/b/my-brand-kevin.appspot.com/o/myResume%2Fresume_kevinIshimwe.pdf?alt=media&token=2f73aa9a-d0a8-4f5f-a5a2-9e7c4fddbb51&_gl=1*1ptviax*_ga*MTIwMzQyMzU1My4xNjcxNDI2MzYz*_ga_CW55HF8NVT*MTY4NTgxOTg5Ni40LjEuMTY4NTgxOTk2MC4wLjAuMA.."
          data-aos="fade-up"
          className=" flex mx-auto lg:ml-8  mt-10 rounded-full  dark:bg-yellow-400 dark:text-black ease-out font-semibold duration-300 bg-[#00034a] text-1xl mb-5 max-w-fit  p-2 lg:mx-2 text-white sm:mt-5 pr-4 pl-4 hover:bg-[#1a05ae] hover:scale-105"
          download="resume_KEVIN_ISHIMWE"
          target="_blank"
          rel="noreferrer"
        >
          <RiDownloadCloudFill className="text-2xl mr-2" />
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}

export default ABOUT_ME;
