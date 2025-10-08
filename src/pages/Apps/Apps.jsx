import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Apps = ({ data }) => {
  const firstEight = data.slice(0, 8);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-11/12 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#001931] flex justify-center pt-8">
          Trending Apps
        </h1>
        <p className="text-[#627382] my-3 text-[17px] flex justify-center mt-2 mb-16">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {firstEight.map((singleApp) => {
            const { id, title, image, ratingAvg, downloads } = singleApp;
            return (
              <Link to={`app/appdetails/${id}`}>
                <div
                  key={id}
                  className="bg-white p-3 shadow-xl rounded-lg w-full hover:scale-[1.02] duration-200"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full object-contain"
                  />
                  <h1 className="mt-2 font-semibold">{title}</h1>
                  <div className="my-2.5 flex justify-between items-center text-[14px]">
                    <p className="flex gap-1.5 bg-[#f1f5e8] py-0.5 text-green-500 font-semibold px-2 rounded-[4px]">
                      <Download className="w-4"></Download> {downloads}
                    </p>

                    <p className="flex gap-1.5 items-center py-0.5 bg-[#fff0e1] text-orange-500 font-semibold px-2 rounded-[4px]">
                      <Star size={16} strokeWidth={2} />
                      {ratingAvg}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center py-8">
          <Link
            to={`/app`}
            className="rounded-[4px] flex bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] font-semibold p-2.5 text-white  px-9"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apps;
