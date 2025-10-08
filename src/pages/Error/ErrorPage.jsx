import React from "react";
import error from "../../../public/assist/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 gap-3">
      <figure>
        <img className="w-3xs md:w-full" src={error} alt="" />
      </figure>
      <h1 className="text-3xl md:text-5xl font-bold text-[#001931] flex justify-center ">
        Oops, page not found!
      </h1>
      <p className="text-[#627382] my-3 text-[17px] flex justify-center">
        The page you are looking for is not available.
      </p>
      <Link
        className="rounded-[4px] flex bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] font-semibold px-7 py-2.5 text-white  btn btn-outline "
        to="/"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
