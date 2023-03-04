import React, { useState, useRef } from "react";
import Sidenav from "./sidebar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RiSave3Fill } from "react-icons/ri";
function AddBlog() {
  const [open, setopen] = useState(false);
  const [err, seterr] = useState("dshbhdsbhfk");
  const [message, setmessage] = useState("");
  const [file, setfile] = useState("");
  const [popup, setpopup] = useState("");
  const [value, setvalue] = useState(`<h2>We've all been there,</h2><p>Have you ever been intimidated by the thought of coding? You're not alone. Many people even I at some point believed that coding is only for geniuses or computer experts,But the truth is, anyone can learn to code. In this blog, I'll be breaking down the barriers and showing you why coding is not as difficult as it seems.</p><p><em>One common barrier to learning to code is the perception that it's too difficult or complex</em>. However, this is a misconception. While coding can be challenging, it's not impossible to learn. One way to overcome this barrier is to start with the basics and work your way up. Begin by learning simple coding concepts and gradually build your knowledge and skills. There are many resources available online, such as coding tutorials and videos, that can help you get started.</p><p>Understand that coding is just like any other skill, It requires time and effort to learn, but with practice, you can become proficient. You don't have to be a math genius or a computer expert to learn to code. You just need to be willing to put in the effort so lets talk about why You might even want to code.</p><h3><br></h3><h3>As a junior freelancer web developer, I can attest to the benefits of learning to code.</h3><p>When I first started, the idea of becoming a developer was so foreign to me it even seemed out of reach. But as I began to learn and work in the industry, I realized how valuable this skill it can be for anyone, regardless of their background or career aspirations.</p><p>Here are a few reasons why I believe more people should learn to code:</p><ul><li><strong>Empowerment through creativity and problem-solving</strong></li></ul><p>Coding is essentially the language of computers, and learning it allows you to communicate with them in a way that can be incredibly powerful. As you learn to code, you'll begin to see how it can be used to solve problems and create new things, from websites to mobile apps to games and more. It's a highly creative field that rewards those who are willing to think outside the box and find innovative solutions to problems.</p><ul><li><strong>Increased career opportunities</strong></li></ul><p>There's no denying that the demand for skilled coders is on the rise. As more and more businesses move online and technology continues to evolve, the need for talented web developers, software engineers, and other IT professionals is only going to grow. Whether you're looking to start a career in tech or simply add a new skill to your resume, learning to code can open up a world of opportunities.</p><ul><li><strong>Improved critical thinking and problem-solving skills</strong></li></ul><p>Coding requires a unique combination of logic, creativity, and attention to detail. As you learn to code, you'll develop a set of skills that can be applied to a wide range of fields, from engineering to business to healthcare and beyond. You'll learn how to break down complex problems into manageable chunks, think critically about the best solution, and then put that solution into action.</p><ul><li><strong>Flexibility and adaptability</strong></li></ul><p>Technology is always changing, and those who work in the field need to be able to keep up. Learning to code is a great way to develop your adaptability skills and stay up-to-date with the latest trends and innovations. You'll learn how to work with a wide range of programming languages and tools, and you'll be able to apply your knowledge to new projects and challenges as they arise.</p><ul><li><strong>Sense of achievement and fulfillment</strong></li></ul><p>Finally, perhaps the most compelling reason to learn to code is the sense of achievement and fulfillment that comes with it. There's nothing quite like the feeling of building something from scratch, whether it's a website, an app, or a game. As you develop your skills and work on more complex projects, you'll gain a sense of satisfaction that comes from knowing you're making a real impact in the world.</p><p>If you're interested in learning to code, there are plenty of resources available online to help you get started. Whether you prefer video tutorials, online courses, or hands-on workshops, there's something for everyone.</p><h3><em> So why not give it a try and see where it takes you?</em></h3><p>Here are some helpful resources to get you started:</p><ol><li><a href="https://www.codecademy.com/" rel="noopener noreferrer" target="_blank">Codecademy</a> - A popular online learning platform with a wide range of coding courses and tutorials.</li><li><a href="https://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank">FreeCodeCamp</a> - A nonprofit organization that offers free coding lessons and projects.</li><li><a href="https://www.udemy.com/" rel="noopener noreferrer" target="_blank">Udemy </a>- A comprehensive online learning platform with courses on everything from coding to business management.</li><li><a href="https://www.khanacademy.org/" rel="noopener noreferrer" target="_blank">Khan Academy</a> - A free educational platform with courses in math, science, and coding.</li><li><a href="https://www.khanacademy.org/" rel="noopener noreferrer" target="_blank">Coursera</a> - An online learning platform with courses and degrees from top universities around the world.</li></ol><h2>"Code.org: What Most Schools Don't Teach"</h2><iframe class="ql-video" allowfullscreen="true" src="https://www.youtube.com/embed/nKIu9yen5nc?showinfo=0" frameborder="0"></iframe><p><br></p><p><br></p><p>In conclusion, the barrier stopping you is most likely you,sadly but that can be overcome. By starting with the basics, seeking out resources, and building confidence, anyone can learn to code. Don't let fear or self-doubt hold you back from pursuing this valuable skill. With dedication and persistence, you can become a proficient coder and open up new opportunities in your career and personal life.</p><p>looking forward to your first :)</p><pre class="ql-syntax" spellcheck="false">console.log("hello world")\r\n</pre><p><br></p><p><br></p><p><br></p>`);
  const popstatus = useRef();
  const sendBlog = async(e) => {
    e.preventDefault();
    const form = document.forms.newblog;
    const body = new FormData();
    body.append("blogImg", form[1].files[0]);
    body.append("blogTitle", form[0].value);
    body.append("blogDescription", form[2].value);
    body.append("blogContent", value);
    console.log(body);
    await fetch("https://fair-teal-chinchilla-tam.cyclic.app/addblog", {
      method: "POST",
      headers: {
        Accept: "application/json",
        token: `Bearer ${localStorage.token}`,
      },
      mode: "cors",
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          setmessage(data.message);
          form.reset();
          setvalue("");
          setpopup("");
          setfile("");
        } else {
          seterr(data.message);
        }
      });
  };
  const popupDelete = () => {
    return (
      <div>
        <div className="" ref={popstatus}>
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
          </div>
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
                  Are you sure You will loose all the changes in the textfields
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
                  className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  onClick={() => {
                    const form = document.forms.newblog;
                    console.log(form);
                    form.reset();
                    setvalue("");
                    setpopup("");
                    setfile("");
                  }}
                >
                  Reset form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex ">
      <Sidenav />
      <form
        className=" ml-10 mt-2 w-full h-full pb-9"
        name="newblog"
        onSubmit={sendBlog}
      >
        <h2 className="font-semibold  text-5xl text-gray-600 mb-5">Add blog</h2>
        <div className="relative mb-3 xl:w-96">
          <input
            type="text"
            className="peer m-0 h-[48px] w-full rounded border border-solid border-blue-300 bg-white bg-clip-padding py-1 px-3 text-xl font-semibold leading-3 text-neutral-700 ease-in-out placeholder:text-transparent  focus:bg-white focus:pt-[.7rem] focus:pb-[0.925rem] focus:text-neutral-900 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
            id="floatingInput"
            placeholder="Blog title"
          />
          <label className="pointer-events-none absolute bg-white -top-0 left-0 origin-[0_0] border border-solid   text-green-500 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[-1rem] peer-focus:-translate-y-9 peer-focus:scale-[0.95] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200">
            blog Title
          </label>
        </div>
        <div className="flex">
          <div className=" w-96">
            <input
              className="relative  block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-blue-200 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
              type="file"
              id="formFileMultiple"
              onChange={(e) => {
                setfile(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <img src={file} alt="" className="duration-200 ease-in " />
          </div>
        </div>
        <div className="mt-2 mb-1">
          <input
            className="shadow  border-blue-200 border-[1px] rounded w-8/12 py-2 px-3 text-gray-700 focus:border-blue-800 focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Description"
          />
        </div>
        <ReactQuill
          className="w-11/12 h-[50vh] border-blue-200  "
          theme="snow"
          required
          modules={AddBlog.modules}
          value={value}
          onChange={setvalue}
        />
        <div className="mt-20 flex">
          <button
            type="submit"
            className="flex rounded bg-yellow-400 px-3 pt-2 pb-2 text-md font-semibold leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg--yellow-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-500 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            {open === true ? (
              <div
                id="wait"
                className=" h-5 w-5 mr-2 -ml-2 animate-spin rounded-full border-2 border-solid border-black border-r-transparent  motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              />
            ) : (
              <RiSave3Fill className="text-2xl" />
            )}
            SAVE
          </button>
          <button
            type="button"
            className="ml-5 rounded bg-red-600 px-4 pt-2.5 pb-2 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-red-500-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-red-500-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
            onClick={() => {
              setpopup(popupDelete());
            }}
          >
            cancel
          </button>
        </div>
      </form>
      {popup}
    </div>
  );
}

AddBlog.modules = {
  toolbar: [
    ["bold", "italic", "underline"], // toggled buttons
    ["blockquote", "strike", "code-block"],
    // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["video", "image", "link"],
    ["clean"],
  ], // remove formatting button]
};
export default AddBlog;
