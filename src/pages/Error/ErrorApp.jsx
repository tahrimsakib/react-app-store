import React from "react";
import error from "../../../public/assist/App-Error.png";
import { Link } from "react-router";

const ErrorApp = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 gap-3">
      <figure>
        <img className="w-3xs md:w-full" src={error} alt="" />
      </figure>
      <h1 className="text-3xl md:text-5xl font-bold text-[#001931] flex justify-center ">
        Oops, App not found!
      </h1>
      <p className="text-[#627382] my-3 text-[17px] flex justify-center">
        Looks like this app doesn't exist or has been removed.
      </p>
      <Link
        className="flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-3 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:brightness-105 btn btn-outline px-10 "
        to={"/app"}
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorApp;
