import { Download, MessageSquareHeart, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStore, getStoreApp } from "../../Utility/AddToLS";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleData = data.find((app) => app.id === appId);
  const {
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
  } = singleData;

  const [install, setInstall] = useState(false);

  useEffect(() => {
    const stored = getStoreApp();
    if (stored.includes(appId)) {
      setInstall(true);
    }
  }, [appId]);

  const handleClick = () => {
    const stored = getStoreApp();
    if (stored.includes(appId)) {
      toast.info("Already Installed!");
      setInstall(true);
      return;
    }

    addToStore(appId);
    setInstall(true);
  };

  const ratings = singleData.ratings.map((item) => {
    let count = item.count;
    if (count.includes("M")) count = parseFloat(count) * 1000000;
    else if (count.includes("K")) count = parseFloat(count) * 1000;

    return { name: item.name, count: count };
  });

  return (
    <div className="bg-[#f5f5f5] min-h-screen ">
      <div className="max-w-11/12 mx-auto py-10">
        <div className="flex-col md:flex md:flex-row items-center">
          <figure className="mr-30 mb-4 flex justify-center items-center">
            <img
              className="w-80 object-contain rounded-xl shadow-2xl"
              src={image}
              alt={title}
            />
          </figure>

          <div>
            <h1 className="font-bold text-2xl text-[#001931] md:text-4xl">
              {title}
            </h1>
            <p className="text-gray-500">
              Company Name:{" "}
              <span className="text-violet-600 font-semibold">
                {companyName}
              </span>
            </p>

            <div className="divider"></div>

            <div className="flex justify-baseline gap-9">
              <div>
                <Download />
                <p className="text-gray-500">Download</p>
                <h1 className="font-bold text-3xl md:text-4xl">{downloads}</h1>
              </div>
              <div>
                <Star />
                <p className="text-gray-500">Rating Avg</p>
                <h1 className="font-bold text-3xl md:text-4xl">{ratingAvg}</h1>
              </div>
              <div>
                <MessageSquareHeart />
                <p className="text-gray-500">Total Reviews</p>
                <h1 className="font-bold text-3xl md:text-4xl">{reviews}</h1>
              </div>
            </div>
            <button
              onClick={handleClick}
              disabled={install}
              className={`mt-5 flex items-center justify-center gap-2 rounded-lg 
                ${
                  install
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]"
                } 
                p-3 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:brightness-105 btn btn-outline text-xl px-5 py-6`}
            >
              {install ? "Installed" : `Install Now (${size} MB)`}
            </button>
            <ToastContainer />
          </div>
        </div>

        <div className="divider"></div>

        <div>
          <h1 className="text-2xl font-semibold mb-10">Rating</h1>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratings}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" reversed />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="rgba(159,98,242,1)"
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="divider"></div>
        <div>
          <h1 className="text-2xl font-semibold">Description</h1>
          <p className="text-gray-500">{description}</p>
        </div>

        <div className="flex justify-center items-center mt-6">
          <Link
            to={`/app`}
            className="w-fit flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-3 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:brightness-105 btn btn-outline px-10"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
