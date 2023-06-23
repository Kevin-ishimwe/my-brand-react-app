import React, { useState, useEffect, useContext, useRef } from "react";
import { FaTrash, FaPenAlt } from "react-icons/fa";
import Sidenav from "./sidebar";
import BlogsContext from "../getblogs";
function ManageBlogs() {
  const [id, setid] = useState("");
  const [message, setmessage] = useState("");
  const [err, seterr] = useState("");
  const [blogs, setblogs] = useState([]);
  const [popup, setpopup] = useState("");
  const allblogs = useContext(BlogsContext);
  const snackbar = useRef();
  useEffect(() => {
    setblogs(allblogs);
    console.log(blogs);
  }, [allblogs]);

  const popupDelete = () => {
    return (
      <div>
        <div className=""></div>
        <div
          className="modal fade fixed min-w-max top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-[#00000061]"
          id="exampleModalCenter"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog"
        >
          <div className="mx-auto relative w-[52vw] mt-[20%] pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                  CLEAR BLOG CONTENTS
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                <p>
                  Are you sure You want to delete this particular blog,this
                  action cant be undone,proceed with caution
                </p>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setpopup("");
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  onClick={async (e) => {
                    setpopup("");
                    console.log(id);
                    await fetch(
                      `https://portfolio-backend-prod.up.railway.app/deleteblog/${id}`,
                      {
                        method: "DELETE",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                          token: `Bearer ${localStorage.token}`,
                        },
                        mode: "cors",
                      }
                    )
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        snackbar.current.style.display = "grid";
                        if ((data.status = "sucess")) {
                          setmessage(data.message);
                          setTimeout(() => {
                            snackbar.current.style.display = "none";
                            setmessage("");
                          }, 2000);
                          window.location.reload();
                        } else {
                          seterr(data.message);
                          setTimeout(() => {
                            snackbar.current.style.display = "none";
                            seterr("");
                          }, 2000);
                        }
                      });
                  }}
                >
                  DELETE BLOG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-full">
      <Sidenav />
      <div ref={snackbar} className="hidden">
        {err.length > 0 ? (
          <div
            className="bg-red-500 rounded-lg py-5 px-6 mb-3 text-base text-white inline-flex items-center w-fit fixed top-20 right-5"
            role="alert"
          >
            <svg
              focusable="false"
              data-prefix="fas"
              data-icon="times-circle"
              className="w-4 h-4 mr-2 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
              ></path>
            </svg>
            {err}
          </div>
        ) : (
          <div
            className="bg-green-400 rounded-lg p-5 px-6 mb-3 text-base text-green-900 inline-flex items-center w-fit fixed top-20 right-5"
            role="alert"
          >
            <svg
              focusable="false"
              data-prefix="fas"
              data-icon="check-circle"
              className="w-4 h-4 mr-2 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>
            {message}
          </div>
        )}
      </div>
      <div className="flex  flex-wrap mt-5 justify-center md:justify-start ml-[2em] md:ml-2">
        {blogs.map(({ blogTitle, _id, blogDescription, blogImg }) => {
          return (
            <div className="  mx-3  min-w-[5em] flex-grow-0" key={_id}>
              <div className="rounded-lg shadow-2xl bg-white dark:bg-slate-900  max-w-xs">
                <img className="rounded-t-lg" src={blogImg} alt="" />

                <div className="p-6">
                  <h5 className="text-gray-900 text-xl dark:text-yellow-300 font-semibold overflow-hidden">
                    {blogTitle}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-500 text-base h-24 overflow-hidden text-ellipsis whitespace-pre-wrap">
                    {blogDescription}
                  </p>
                  <div className="flex justify-between">
                    <button
                      id={_id}
                      className="bg-blue-500 flex px-5 py-1 text-xl  mt-4 rounded-md active:bg-blue-700 text-white"
                      onClick={(e) => {
                        setid(e.target.id);
                      }}
                    >
                      <FaPenAlt
                        id={_id}
                        style={{ color: "white", margin: "9% 0%" }}
                        onClick={(e) => {
                          setid(e.target.id);
                        }}
                      />
                      edit
                    </button>
                    <button
                      id={_id}
                      className="bg-red-500 flex px-5 py-1 text-xl  mt-4 rounded-md active:bg-red-700 text-white"
                      onClick={(e) => {
                        setid(e.target.id);
                        console.log(e.target.id);
                        setpopup(popupDelete());
                      }}
                    >
                      <FaTrash style={{ color: "white", margin: "9% 0%" }} />
                      delete
                    </button>
                  </div>
                </div>
              </div>
              {popup}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManageBlogs;
