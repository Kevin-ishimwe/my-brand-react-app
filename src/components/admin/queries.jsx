import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import Sidenav from "./sidebar";
import { FaTrash } from "react-icons/fa";
function Queries() {
  const [id, setid] = useState([]);
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    fetch("https://my-backend-portfolio.onrender.com//getmessages", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Credentials": true,
        Accept: "application/json",
        "Content-Type": "application/json",
        token: `Bearer ${localStorage.token}`,
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setmessages(data);
      });
  }, [id]);
  console.log(messages);
  return (
    <div className="flex">
      <Sidenav />
      <div className="ml-[2em] md:ml-5 w-full px-5">
        <h1 className="text-4xl font-semibold text-[#068dfb] drop-shadow-lg mb-10 text-center">
          {" "}
          Queries...
        </h1>
        {messages.map(({ email, name, content, _id }) => {
          return (
            <div
              key={_id}
              className="mt-5 shadow-[1px_2px_20px_#11112345] px-5 w-full pb-2 rounded-md"
            >
              <div className="mt-2 mb-3">
                <h3 className="text-xl font-bold text-[#068dfb] drop-shadow-lg">
                  {email}
                </h3>
                <p className="italic text-lg font-semibold text-[#848697]  ">
                  {name}
                </p>
              </div>
              <p>{content}</p>

              <FaTrash
                id={_id}
                className="text-red-500 text-xl mt-3 hover:scale-125"
                onClick={async (e) => {
                  e.target.textContent = "LOADING...";
                  await fetch(
                    `https://fair-teal-chinchilla-tam.cyclic.app/deletemessage/${e.target.parentElement.id}`,
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
                      setid(e.target.parentElement.id);
                    });
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Queries;
