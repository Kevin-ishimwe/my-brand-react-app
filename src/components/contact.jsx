import React from "react";
import { toast } from "react-toastify";

function Contact() {
  const handleMessage = async (e) => {
    e.preventDefault();
    document.getElementById("wait").style.display = "grid";
    e.target.lastChild.children[1].textContent = ` LOADING...`;

    await fetch("https://portfolio-backend-prod.up.railway.app/addmessages", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        content: e.target.content.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById("wait").style.display = "none";
        e.target.lastChild.children[1].textContent = "SEND";
        e.target.reset();
        if (data.status === "success") {
          toast.success(data.message, { theme: "colored" });
        } else {
          toast.error(data.message, { theme: "colored" });
        }
      });
  };
  return (
    <div
      data-aos="flip-up"
      data-aos-duration="700"
      id="ContactPage"
    >
      <div className="flex w-11/12 pb-4 mx-auto shadow-[2px_3px_30px_#cbcbcb] dark:shadow-lg rounded-2xl dark:bg-slate-900 mt-20 lg:w-5/12 md:mt-0 min-h-[50vh] ">
        <form className="flex flex-col w-full px-5" onSubmit={handleMessage}>
          <h1 className=" text-center  text-6xl font-semibold font-sans mb-4 text-[#040b1e] dark:text-yellow-100">
            get in touch
          </h1>
          <blockquote className="text-2xl font-semibold italic text-center text-slate-900 dark:text-gray-200">
            im always
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block mx-2">
              <span className="relative text-white">a text</span>
            </span>
            away
          </blockquote>
          <div className="flex flex-row mt-2 ">
            <label className="mr-3 w-5/12">
              <span className="dark:text-yellow-400  after:content-['*'] after:ml-0.5 after:text-red-500 block w-fit text-sm font-medium text-slate-700">
                name
              </span>
              <input
                required
                type="text"
                min="4"
                className="mt-1 px-3 dark:text-white  py-2 dark:bg-slate-800 bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400 w-full focus:outline-none focus:border-yellow-200 focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1"
                placeholder="i.e kevin"
                name="name"
              />
            </label>
            <label className="w-7/12">
              <span className="dark:text-yellow-400 after:content-['*'] after:ml-0.5 after:text-red-500 block w-fit text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="peer mt-1 px-3 dark:text-white  py-2 dark:bg-slate-800 bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400  focus:outline-none focus:border-yellow-200 focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1 w-full"
                placeholder="you@example.com"
              />
              <p className="mt-2 invisible peer-invalid:visible text-red-400 text-sm">
                Please provide a valid email address.
              </p>
            </label>
          </div>
          <textarea
            required
            className=" px-3 py-2 dark:text-white  dark:bg-slate-800 mt-3 min-h-[30vh] bg-white border shadow-sm border-slate-300 placeholder:italic placeholder:text-slate-400 w-full text-xl focus:outline-none focus:border-yellow-200 block focus:ring-yellow-200 rounded-md sm:text-sm focus:ring-1"
            type="text"
            name="content"
            placeholder="type your message here...."
          />
          <div className="flex justify-center ">
            <div
              id="wait"
              className=" hidden h-5 w-5 mt-4 absolute  mr-24 animate-spin rounded-full border-2 border-solid dark:border-black border-x-white border-r-transparent  motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            />
            <button
              type="submit"
              className=" mt-2 w-full  py-2.5 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black dark:active:bg-yellow-200  font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  transition duration-150 ease-in-out"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
