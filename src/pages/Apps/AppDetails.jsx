import { Download, MessageSquareHeart, Star } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  console.log(id);
  const data = useLoaderData();
  const singleData = data.find((app) => app.id === appId);
  const { title, image, companyName, downloads, ratingAvg, reviews, size } =
    singleData;

  console.log(data);

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex items-center  ">
        <figure className="mr-7">
          <img className="w-80 object-contain" src={image} alt={title} />
        </figure>
        <div>
          <div>
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-gray-500">
              company Name:{" "}
              <span className="text-violet-600 font-semibold">
                {companyName}
              </span>
            </p>
            <span className="divider"></span>
          </div>
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
    </div>
  );
};

export default AppDetails;
