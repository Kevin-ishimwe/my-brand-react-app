import React, { useRef, useState,useContext } from "react";
import Navbar from "./navbar";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthContext from "./authContext"


function Login() {
  const [err, seterr] = useState("");
  const [message, setmessage] = useState("");
  const popup = useRef();
  const navigate=useNavigate()
   const { setisauth } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    e.target.lastElementChild.lastChild.textContent = "LOADING...";
    e.target.lastElementChild.firstChild.style.display = "grid";
    console.log(e.target.lastElementChild.firstChild);
    await fetch("https://fair-teal-chinchilla-tam.cyclic.app/login", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-type": "application/json",
      },

      withCredentials: true,
      body: JSON.stringify({
        email: e.target[0].value,
        password: e.target[1].value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.lastElementChild.lastChild.textContent = "LOGIN";
        e.target.lastElementChild.firstChild.style.display = "none";
        console.log(data);
        popup.current.style.display = "flex";
        if (data.token) {
          setmessage("successfully logged in");
          setTimeout(() => {
            popup.current.style.display = "none";
            setisauth(true)
            localStorage.setItem("token", data.token);
            navigate("/Dashboard")
            
          }, 1500);
        } else {
          seterr(`${data.message}`);
          setTimeout(() => {
            popup.current.style.display = "none";
            seterr("");
          }, 2500);
        }
      });
  };
  return (
    <div>
      <Navbar />

      <section className="h-screen dark:bg-[#040b1e]">
        <div className="container px-6  h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="hidden" ref={popup}>
              {err.length > 0 ? (
                <div
                  className="bg-red-500 rounded-lg py-5 px-6 mb-3 text-base text-white inline-flex items-center w-fit fixed top-20 right-5"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
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
                    aria-hidden="true"
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
            <div className="drop-shadow-xl shadow-2xl p-5 w-10/12 md:w-8/12 lg:w-5/12 lg:ml-20 dark:bg-gray-900 rounded-xl h-[70vh]">
              <form onSubmit={handleLogin}>
                <FaUserCircle className="text-[5em] mx-auto mt-2 bg dark:text-[#040b1e] text-blue-700" />
                <div className="mb-1 mt-10">
                  <input
                    type="text"
                    required
                    className="form-control block w-full px-4 py-2 text-xl font-normal dark:bg-gray-900 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    required
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 dark:bg-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-center ">
                  <div
                    id="wait"
                    className=" hidden h-5 w-5 mt-3  mr-24 absolute animate-spin rounded-full border-2 border-solid border-white border-r-transparent  motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  />
                  <button
                    type="submit"
                    className="px-2 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <span className="">Sign in</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
