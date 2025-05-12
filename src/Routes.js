import React, { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { retry } from "./utils/CommonFunctions";
const Home = lazy(() => retry(() => import("./pages/Home")));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/*",
      element: <Navigate replace to="/404" />,
    },
  ]);
  return routes;
};

export default Routes;
