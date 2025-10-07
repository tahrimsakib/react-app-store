import React from "react";
import logo from "../../public/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="hover:link font-semibold hover:text-[#8d59ec]">Home</a>
            </li>
            <li>
              <a className="hover:link font-semibold hover:text-[#8d59ec]">App</a>
            </li>
            <li>
              <a className="hover:link font-semibold hover:text-[#8d59ec]">Installation</a>
            </li>
          </ul>
        </div>
        <figure className="flex justify-center items-center gap-2 cursor-pointer">
          <img className="max-w-8 " src={logo} alt="" />
          <a href="/" className="font-bold text-[#8d59ec] ">Hero App</a>
        </figure>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="hover:link font-semibold hover:text-[#8d59ec]">
            <a>Home</a>
          </li>
          <li className="hover:link font-semibold hover:text-[#8d59ec]">
            <a href="">App</a>
          </li>
          <li className="hover:link font-semibold hover:text-[#8d59ec]">
            <a>Installation</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://github.com/tahrimsakib/react-app-store"
          target="_blank"
          className="rounded-[4px] flex bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] font-semibold p-2.5 text-white  btn btn-outline "
        >
          <Github></Github> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
