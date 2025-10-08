import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoreApp } from "../../Utility/AddToLS";
import Apps from "../Apps/Apps";
import { Download, Star } from "lucide-react";

const Installation = () => {
  const data = useLoaderData();

  const [appList, setAppList] = useState([]);

  useEffect(() => {
    const storeApp = getStoreApp();
    const convert = storeApp.map((id) => parseInt(id));
    const myAppList = data.filter((app) => convert.includes(app.id));
    setAppList(myAppList);
  }, []);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-11/12 mx-auto">
        <h1>installation {appList.length} </h1>
        {appList.map((app) => {
          const { image, downloads, reviews, size, title } = app;
          return (
            <div className="flex justify-between items-center bg-white mb-11 rounded-xs p-2">
              <div className="flex justify-center items-center">
                <figure>
                  <img className="w-18 mr-3.5" src={image} alt="" />
                </figure>
              <div>
                  <h1 className="font-semibold">{title} </h1>{" "}
                  <div className="flex gap-3">
                    <p className="flex"> <Download></Download> {downloads} </p>
                    <p className="flex"><Star></Star> {reviews} </p>
                    <p className="">{size} MB </p>
                  </div>
              </div>
              </div>
              <div>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-3 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:brightness-105 btn btn-outline ">
                  uninstall
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
