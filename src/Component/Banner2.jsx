import React from "react";

const Banner2 = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex items-center justify-center p-8">
        <div className=" max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-purple-200 text-sm mb-2 md:mb-4">
                Total Downloads
              </p>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">
                29.6M
              </h3>
              <p className="text-purple-300 text-sm">
                21% More Than Last Month
              </p>
            </div>

            <div className="text-center">
              <p className="text-purple-200 text-sm mb-4">Total Reviews</p>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">
                906K
              </h3>
              <p className="text-purple-300 text-sm">
                46% More Than Last Month
              </p>
            </div>

            <div className="text-center">
              <p className="text-purple-200 text-sm mb-4">Active Apps</p>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">
                132+
              </h3>
              <p className="text-purple-300 text-sm">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
