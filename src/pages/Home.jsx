import React from "react";
import Banner from "../Component/Banner";
import Banner2 from "../Component/Banner2";
import { useLoaderData } from "react-router";
import Apps from "./Apps/Apps";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="">
      <Banner></Banner>
      <Banner2></Banner2>
      <Apps data={data}></Apps>
    </div>
  );
};

export default Home;
