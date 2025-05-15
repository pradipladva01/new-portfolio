import React, { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { retry } from "./utils/CommonFunctions";
import AboutUs from "./pages/AboutUs";
const Home = lazy(() => retry(() => import("./pages/Home")));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/*",
      element: <Navigate replace to="/404" />,
    },
  ]);
  return routes;
};

export default Routes;
