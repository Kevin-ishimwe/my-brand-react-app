import { useEffect, useState } from "react";
import { RiDownloadCloudFill } from "react-icons/ri";
import Typical from "react-typical";

function ABOUT_ME() {
  const [text, settext] = useState("");
  const all =
    "With over 3 years of experience, I have honed my ability to stay focused and productive, even under heavy amounts of stress.One of my greatest strengths as a web developer is my problem-solving skills. I find great satisfaction in breaking down complex issues and building elegant and functional websites. I am always looking fornew ways to expand my knowledge and stay current with the latesttrends and technologies in web development. My long-term goal is tobecome a senior web developer and eventually start my own development firm.";

  useEffect(() => {
    let typingTimer;

    const typeText = () => {
      for (let i = 0; i <= all.length; i++) {
        typingTimer = setTimeout(() => {
          settext(all.substring(0, i));
        }, 20 * i); // Adjust the delay between each character appearance if needed (in milliseconds)
      }
    };

    typeText();

    return () => {
      clearTimeout(typingTimer);
    };
  }, []);
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
        <p
          id="typing-text"
          className="lg:dark:ml-8 w-11/12 text-center mx-auto  dark:text-[#aaaa8d]  md:text-left  lg:ml-8 text-lg text-gray-800"
        >
          {text}
          <span className="flux text-xl font-extrabold">|</span>
        </p>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/my-brand-kevin.appspot.com/o/myResume%2Fresume_kevin_Ishimwe-1.pdf?alt=media&token=3e2642cd-e7e0-4507-addd-8a8b29578e2c"
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
