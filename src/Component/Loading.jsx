import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-190px)]">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-2 border-gray-300 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
      </div>
    </div>
  );
};

export default Loading;
