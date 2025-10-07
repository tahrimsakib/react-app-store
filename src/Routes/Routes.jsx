import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Roots from "../Roots/Roots";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/appdata.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appdata.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
