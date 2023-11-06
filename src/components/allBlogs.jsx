import React, { useRef, useState, useEffect, useContext } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { NavLink, Link } from "react-router-dom";
import BlogsContext from "./getblogs";

function AllBlogs({ num }) {
  const [blogs, setblogs] = useState([]);

  const allblogs = useContext(BlogsContext);

  useEffect(() => {
    setblogs(allblogs);
  }, [allblogs]);
  return (
    <div className="dark:bg-[#040b1e] min-h-[100vh] w-full">
      <Navbar />
      <div className="flex pt-32 flex-wrap justify-center">
        {blogs.map(({ blogTitle, _id, blogDescription, blogImg }) => {
          return (
            <div
              className="flex justify-center  scale-95 min-w-[10em]"
              key={_id}
            >
              <div className="rounded-lg shadow-2xl bg-white dark:bg-slate-900  max-w-sm">
                <Link to={`/singleblog?id=${_id}`} spy="true" smooth="true">
                  <img
                    className="rounded-t-lg w-full h-[50vh] p-1 object-cover"
                    src={blogImg}
                    alt=""
                  />
                </Link>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl dark:text-yellow-300 font-semibold ">
                    {blogTitle}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-500 text-base h-24 overflow-hidden text-ellipsis whitespace-pre-wrap">
                    {blogDescription}
                  </p>
                  <Link
                    to={`/singleblog?id=${_id}`}
                    spy="true"
                    smooth="true"
                    className=" decoration-none w-fit  flex px-2 py-1.5 dark:bg-[#182449] bg-yellow-500  mt-2 dark:text-yellow-400 text-black font-semibold text-sm  uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
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
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default AllBlogs;
