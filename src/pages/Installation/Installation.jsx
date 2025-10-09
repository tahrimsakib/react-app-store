import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp, removeApp } from "../../Utility/AddToLS";
import { Download, Star } from "lucide-react";

const Installation = () => {
  const data = useLoaderData();
  const [appList, setAppList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storeApp = getStoreApp();
    const convert = storeApp.map((id) => parseInt(id));
    const myAppList = data.filter((app) => convert.includes(app.id));
    setAppList(myAppList);
  }, [data]);

  const handleUninstall = (id) => {
    removeApp(id);
    setAppList((prev) => prev.filter((app) => app.id !== id));
  };

  const handleSort = (type) => {
    setSort(type);
    if (type === "Size") {
      const sortBySize = [...appList].sort((a, b) => b.size - a.size);
      setAppList(sortBySize);
    }
    if (type === "Rating") {
      const sortByRating = [...appList].sort(
        (a, b) => b.ratingAvg - a.ratingAvg
      );
      setAppList(sortByRating);
    }
  };
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-11/12 min-h-[calc(100vh-270px)] mx-auto py-10">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-[15px] md:text-xl font-semibold text-[#001931]">
            App Found {appList.length}{" "}
          </h1>
          <details className="dropdown">
            <summary className="btn m-1">Sort By: {sort ? sort : ""} </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-25 p-2 shadow-sm">
              <li>
                <a onClick={() => handleSort("Size")}>Size</a>
              </li>
              <li>
                <a onClick={() => handleSort("Rating")}>Rating</a>
              </li>
            </ul>
          </details>
        </div>
        {appList.map((app) => {
          const { id, image, downloads, size, title ,ratingAvg } = app;
          return (
            <div
              key={id}
              className="flex justify-between items-center bg-white mb-4 rounded-xl p-2"
            >
              <div className="flex justify-center items-center">
                <figure>
                  <img className="w-18 mr-3.5" src={image} alt="" />
                </figure>
                <div>
                  <h1 className="font-semibold">{title} </h1>{" "}
                  <div className="flex gap-3">
                    <p className="flex items-center justify-center gap-0.5 bg-[#f1f5e8] py-0.5 text-green-500 font-medium text-xs px-2 rounded-[4px]">
                      <Download size={14} color="#1ed761" strokeWidth={1.75} />
                      {downloads}
                    </p>
                    <p className="flex items-center gap-0.5 bg bg-[#fff0e1] text-orange-500 font-medium text-xs px-2 rounded-[4px]">
                      <Star size={14} color="#ff8811" strokeWidth={1.75}></Star>
                      {ratingAvg}
                    </p>
                    <p className=" flex items-center gap-0.5 bg bg-[#dcdcdc] text-gray-600 font-medium text-xs px-2 rounded-[4px]">
                      {size} MB
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUninstall(id)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-3 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:brightness-105 btn btn-outline "
                >
                  Uninstall
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Installation;
