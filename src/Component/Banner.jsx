import React from "react";
import banner from "../../public/hero.png";

const Banner = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <div className="text-center ">
        <h1 className="text-3xl md:text-5xl font-bold ">
          We Build <br />{" "}
          <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] mb-2">
          We Build Productive Apps that make everyday work smoother and smarter.
          Our goal is simple — create tools that save time, boost focus, and
          help you get more done effortlessly.
        </p>
        <button className="mr-4 btn font-semibold">
          {" "}
          <img className="w-7" src="../../public/300218.png" alt="" /> Google
          Play
        </button>
        <button className="mr-4 btn font-semibold">
          {" "}
          <img
            className="w-7"
            src="../../public/apple-app-store.png"
            alt=""
          />{" "}
          App Store
        </button>
      </div>
      <figure>
        <img src={banner} alt="" />
      </figure>
    </div>
  );
};

export default Banner;
