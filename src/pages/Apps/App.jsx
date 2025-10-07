import { Download, Star } from "lucide-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const App = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredData = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-11/12 mx-auto py-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#001931] flex justify-center pt-2">
            Our All Applications
          </h1>
          <p className="text-[#627382] my-3 text-[17px] flex justify-center mt-2 mb-6">
            Explore all our applications and find the ones that fit your needs
            best.
          </p>
        </div>

        <div className="flex justify-between my-5">
          <h1 className="text-xl font-semibold text-[#001931]">
            ({filteredData.length}) Apps Found
          </h1>

          <label className="input flex items-center gap-2 bg-white px-3 py-1 rounded-md shadow-sm">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              className="grow outline-none text-sm"
              placeholder="Search App"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((singleApp) => {
              const { id, title, image, ratingAvg, downloads } = singleApp;
              return (
                <div
                  key={id}
                  className="bg-white p-3 shadow-xl rounded-lg w-full transition hover:scale-[1.02] duration-200"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full object-contain rounded-md"
                  />
                  <h1 className="mt-2 font-bold">{title}</h1>
                  <div className="my-2.5 flex justify-between items-center text-[14px]">
                    <p className="flex gap-1.5 bg-[#f1f5e8] py-0.5 text-green-500 font-semibold px-2 rounded-[4px]">
                      <Download className="w-4" /> {downloads}
                    </p>

                    <p className="flex gap-1.5 items-center py-0.5 bg-[#fff0e1] text-orange-500 font-semibold px-2 rounded-[4px]">
                      <Star size={16} strokeWidth={2} />
                      {ratingAvg}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full mt-5">
              No apps found 😢
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
