import React from "react";
import logo from "../../public/assist/logo.png";
import { Github } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const active = ({ isActive }) => `
  hover:link font-semibold hover:text-[#8d59ec] text-[13px] md:text-[17px]  ${
    isActive ? "text-[#8d59ec] underline" : "text-black font-semibold"
  }
  `;
  return (
    <div className="navbar bg-base-100 md:px-8 shadow-xs">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/app" className={active}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={active}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <figure className="flex justify-center items-center gap-2 cursor-pointer">
          <img className="max-w-8 " src={logo} alt="" />
          <a href="/" className="font-bold text-[#8d59ec] text-[17px] ">
            <span className="text-black font-semibold ">
              Hero <span className="text-[#b28fff]">App</span>
            </span>{" "}
          </a>
        </figure>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <NavLink to="/" className={active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/app" className={active}>
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={active}>
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://github.com/tahrimsakib/react-app-store"
          target="_blank"
          className=" flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-3 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:brightness-105 btn btn-outline"
        >
          <Github></Github> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
