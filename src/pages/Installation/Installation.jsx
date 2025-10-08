import React from "react";
import { useLoaderData } from "react-router";

const Installation = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <h1>installation</h1>
    </div>
  );
};

export default Installation;
