import { Download, MessageSquareHeart, Star } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  console.log(id);
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

  console.log(data);

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="max-w-11/12 mx-auto py-10 ">
        <div className="flex-col md:flex md:flex-row items-center ">
          <figure className="mr-15 mb-4 flex justify-center items-center">
            <img className="w-80 object-contain" src={image} alt={title} />
          </figure>
          <div>
            <div>
              <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
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
                <h1 className="font-bold text-4xl">{downloads} </h1>
              </div>
              <div>
                <Star></Star>
                <p className="text-gray-500">ratingAvg</p>
                <h1 className="font-bold text-4xl">{ratingAvg} </h1>
              </div>
              <div>
                <MessageSquareHeart></MessageSquareHeart>
                <p className="text-gray-500">Total Reviews</p>
                <h1 className="font-bold text-4xl">{reviews} </h1>
              </div>
            </div>
            <button className="mt-5 btn btn-primary">
              Install Now ({size} MB){" "}
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="">flow chart</div>
        <div className="divider"></div>
        <div className="">
          <h1 className="text-2xl font-semibold">Description</h1>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
