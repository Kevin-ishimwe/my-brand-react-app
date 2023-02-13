import React from "react";

function Footer() {
  return (
    <div className=" bg-[#000223] w-full  mt-40 border-t-2 border-cyan-100 pt-5 flex">
      <h1 className="w-[1.5em] h-[11vh] logo text-5xl scale-75 sm:scale-85 md:scale-95 ">
        IK
      </h1>
      <div className="ml-4 w-7/12 p-2">
        <h1 className="font-sans text-white text-5xl ml-4 mt-2">
          thanks for visiting
        </h1>
        <p className="mt-4 text-white ml-4">
          I am thrilled to share my skills, experiences, and achievements with
          you. This website showcases my work and demonstrates my passion for my
          field.If you have any questions or would like to collaborate on a
          project, please feel free to contact me.
        </p>
        <h1 className="text-xl text-white ml-3 mt-4">
          Copyright © 2023 Ishimwe kevin. All rights reserved.
        </h1>
      </div>
      <div className="ml-5">
        <ul className="flex flex-col flex-wrap mt-10 ">
          <a href="/" className="text-white text-xl m-1 ">
            <li>Home</li>
          </a>
          <a href="#About me" className="text-white text-xl m-1 ">
            <li>About me</li>
          </a>
          <a href="my work" className="text-white text-xl m-1 ">
            <li>My work</li>
          </a>
          <a href="blogs" className="text-white text-xl m-1 ">
            <li>Blogs</li>
            <li></li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
