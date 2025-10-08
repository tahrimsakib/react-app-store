import { Download, MessageSquareHeart, Star } from "lucide-react";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStore } from "../../Utility/AddToLS";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const handleClick = (id) => {
  addToStore(id);
};

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);

  const data = useLoaderData();
  const singleData = data.find((app) => app.id === appId);
  console.log(singleData)
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

  // const revireData = singleData
  // console.log(revireData.ratings)
  // const {
    
  // } =revireData


  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-11/12 mx-auto py-10 ">
        <div className="flex-col md:flex md:flex-row items-center ">
          <figure className="mr-30 mb-4 flex justify-center items-center ">
            <img
              className="w-80 object-contain rounded-xl shadow-2xl"
              src={image}
              alt={title}
            />
          </figure>
          <div>
            <div>
              <h1 className="font-bold text-2xl text-[#001931]  md:text-4xl">
                {title}
              </h1>
              <p className="text-gray-500">
                Company Name:{" "}
                <span className="text-violet-600 font-semibold">
                  {companyName}
                </span>
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-baseline gap-9 ">
              <div>
                <Download></Download>
                <p className="text-gray-500">Download</p>
                <h1 className="font-bold text-3xl md:text-4xl">{downloads} </h1>
              </div>
              <div>
                <Star></Star>
                <p className="text-gray-500">ratingAvg</p>
                <h1 className="font-bold text-3xl md:text-4xl">{ratingAvg} </h1>
              </div>
              <div>
                <MessageSquareHeart></MessageSquareHeart>
                <p className="text-gray-500">Total Reviews</p>
                <h1 className="font-bold text-3xl md:text-4xl">{reviews} </h1>
              </div>
            </div>
            <button
              onClick={() => handleClick(id)}
              className="  mt-5 flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-3 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:brightness-105 btn btn-outline text-xl px-5 py-6"
            >
              Install Now ({size} MB)
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="">
          
          <BarChart width={600} height={300}>
            <XAxis></XAxis>
            <YAxis></YAxis>
            <Bar></Bar>
          </BarChart>
          
        </div>
        <div className="divider"></div>
        <div className="">
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
