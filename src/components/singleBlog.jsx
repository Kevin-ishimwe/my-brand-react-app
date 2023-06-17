import React, { useState, useEffect, useContext } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { NavLink } from "react-router-dom";
import BlogsContext from "./getblogs";

function Singleblog() {
  const [blog, setblog] = useState([]);
  const [sideblog, setsideblog] = useState([]);
  const [id, setid] = useState([window.location.href.split("id=")[1]]);

  const allblogs = useContext(BlogsContext);
  useEffect(() => {
    setsideblog(allblogs);
    allblogs.filter((element) => {
      if (element._id === id) {
        console.log(element);
        setblog(element);
      }
      return 0;
    });
  }, [allblogs, id]);
  return (
    <div className="dark:bg-[#040b1e] min-h-[100vh] w-full">
      <Navbar />
      <div className="flex flex-wrap w-full md:w-10/12 min-h-full md:mx-auto ">
        <div className=" mx-auto pt-28">
          <h1 className="text-4xl mx-2 sm:mx-0 sm:text-[xxx-large] mb-3 font-semibold text-[#0e0909] leading-[1em] first-of-type:first-letter:uppercase dark:text-slate-400">
            {blog.blogTitle}
          </h1>
          <p className="text-[large] mx-2 sm:mx-0  sm:text-xl  text-[#353c4b] font-semibold leading-[1.3em] mt-2 sm:mb-6 dark:text-slate-400">
            {blog.blogDescription}
          </p>
          <img src={blog.blogImg} className=" mx-auto w-full px-5 " alt="" />

          <div
            id="dangerouslySetInnerHTML"
            className="dark:text-slate-400 mx-4 sm:mx-0"
            dangerouslySetInnerHTML={{ __html: blog.blogContent }}
          ></div>
        </div>
      </div>
      <div className="flex  mt-20 flex-wrap justify-center ">
        {sideblog.map(({ blogTitle, _id, blogDescription, blogImg }) => {
          return (
            <NavLink
              key={_id}
              className="m-3 md:max-w-[20em] md:min-w-[10em] w-[90vw] md:w-[30vw] "
              to={`?id=${_id}`}
              spy="true"
              smooth="true"
              onClick={() => {
                setid(_id);
                window.scrollTo(0, 0);
              }}
            >
              <img className="h-[40vh] w-full" src={blogImg} alt="" />

              <div className="">
                <h5 className="text-gray-900 text-2xl dark:text-yellow-300 font-semibold ">
                  {blogTitle}
                </h5>
                <p className="text-gray-700 dark:text-gray-500 text-base h-20 overflow-hidden text-ellipsis whitespace-pre-wrap">
                  {blogDescription}
                </p>
                <div className=" decoration-none w-fit  flex px-2 py-1.5 dark:bg-[#182449] bg-yellow-500  mt-2 dark:text-yellow-400 text-black font-semibold text-sm  uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
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
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Singleblog;
