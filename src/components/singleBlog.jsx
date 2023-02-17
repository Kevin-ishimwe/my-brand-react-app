import React, { useRef, useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Singleblog() {
  const [blog, setblog] = useState([]);
  const [sideblog, setsideblog] = useState([]);

  useEffect(() => {
    fetch("https://fair-teal-chinchilla-tam.cyclic.app/getblogs", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setsideblog(data);
        data.filter((element) => {
          if (element._id === window.location.href.split("id=")[1]) {
            console.log(element);
            setblog(element);
          }
          return 0;
        });
        // setblog(data);
      });
  }, []);
  return (
    <div className="dark:bg-[#040b1e] min-h-[100vh] w-full">
      <Navbar />
      <div className="flex flex-wrap w-11/12 md:w-9/12 mx-auto min-h-full">
        <div className=" mx-auto pt-20">
          <h1 className=" text-6xl  font-bold text-[#222a3d] dark:text-slate-400">
            {blog.blogTitle}
          </h1>
          <img src={blog.blogImg} className=" w-full max-h-[85vh] " alt="" />
          <p className="text-2xl font-light text-[#222a3d] dark:text-slate-400">
            {blog.blogDescription}
          </p>
          <div
            id="dangerouslySetInnerHTML"
            className="dark:text-slate-400"
            dangerouslySetInnerHTML={{ __html: blog.blogContent }}
          ></div>
        </div>
        <div className="flex  mt-20">
          {sideblog.map(({ blogTitle, _id, blogDescription, blogImg }) => {
            return (
              <a href={`?id=${_id}`} className="flex justify-center h-40 m-2">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white dark:bg-slate-900 shadow-lg">
                  <img
                    className=" w-full  md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={blogImg}
                    alt="gslosideb"
                  />
                  <div className="px-2 flex flex-col justify-start">
                    <h5 className="text-gray-900 dark:text-yellow-300 italic text-xl font-medium mb-2">
                      {blogTitle}
                    </h5>
                    <p className="text-gray-600 text-base h-22 overflow-hidden">
                      {blogDescription}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Singleblog;
