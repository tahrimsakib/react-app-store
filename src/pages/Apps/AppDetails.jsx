import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  console.log(id);
  const data = useLoaderData();
  const singleData = data.find((app) => app.id === appId);
  const { title } = singleData;

  console.log(data);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default AppDetails;
