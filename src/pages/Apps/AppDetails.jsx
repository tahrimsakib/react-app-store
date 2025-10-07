import React from "react";
import { useLoaderData } from "react-router";

const AppDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>app details </h1>
    </div>
  );
};

export default AppDetails;
