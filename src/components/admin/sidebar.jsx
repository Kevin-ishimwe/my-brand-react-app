import React from "react";
import { NavLink } from "react-router-dom";

function Sidenav() {
  return (
    <div>
      <div className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"></div>
      <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 h-[100%] pt-0">
        <div className="flex  justify-center -mt-6 items-center">
          <div className="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/my-brand-kevin.appspot.com/o/images%2Fme_closeUp.jpg?alt=media&token=d7cb95f9-703e-48ac-aada-583fd9ee24d4"
              className="w-full mt-0 "
              alt="photoadmin"
            />

            <span className="mx-2 text-2xl font-semibold text-white ml-10">
              ADMIN
            </span>
          </div>
        </div>

        <nav className="mt-10">
          <NavLink
            className="flex items-center px-6 py-2 mt-4 text-gray-100 active:bg-blue-300 bg-opacity-25"
            to="/Dashboard"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>

            <span className="mx-3">Dashboard</span>
          </NavLink>
          <NavLink
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            to="/addblog"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>

            <span className="mx-3">ADD blog</span>
          </NavLink>
          <NavLink
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            to="/addblog"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>

            <span className="mx-3">blog management</span>
          </NavLink>

          <NavLink
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            to="/tables"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>

            <span className="mx-3">Queries</span>
          </NavLink>

          {/* <div
            x-cloak
            x-show="dropdownOpen"
            className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
          >
            <a
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              Profile
            </a>

            <a
              to="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              Logout
            </a>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

export default Sidenav;
