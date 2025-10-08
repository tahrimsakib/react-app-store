import React from "react";
import banner from "../../public/assist/hero.png";
import playstore from "../../public/assist/300218.png";
import appstore from "../../public/assist/apple-app-store.png";

const Banner = () => {
  return (
    <div className="bg-[#f5f5f5] ">
      <div className=" flex flex-col justify-center items-center gap-4 pt-7">
        <div className="text-center my-8 ">
          <h1 className="text-3xl md:text-5xl font-bold">
            We Build <br />{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-[17px] text-[#627382] my-3 max-w-5xl">
            We Build Productive Apps that make everyday work smoother and
            smarter. Our goal is simple — create tools that save time, boost
            focus, and help you get more done effortlessly.
          </p>
          <button className="mr-4 btn font-semibold">
            {" "}
            <img className="w-7" src={playstore} alt="playstore logo" /> Google
            Play
          </button>
          <button className="mr-4 btn font-semibold">
            {" "}
            <img className="w-7" src={appstore} alt="appstore logo" /> App Store
          </button>
        </div>
        <figure>
          <img src={banner} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
