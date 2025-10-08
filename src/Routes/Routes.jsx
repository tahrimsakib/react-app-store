import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home";
import Roots from "../Roots/Roots";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import App from "../pages/Apps/App";
import AppDetails from "../pages/Apps/AppDetails";
import ErrorApp from "../pages/Error/ErrorApp";

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
        path: "/app",
        loader: () => fetch("/appdata.json"),
        Component: App,
      },
      {
        path: "app/appdetails/:id",
        loader: () => fetch("/appdata.json"),
        Component: AppDetails,
      },
      {
        path: "app/*",
        Component: ErrorApp,
      },
      {
        path: "/installation",
        loader: () => fetch("/appdata.json"),
        Component: Installation,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
