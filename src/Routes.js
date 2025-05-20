import React, { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { retry } from "./utils/CommonFunctions";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
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
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/*",
      element: <Navigate replace to="/404" />,
    },
  ]);
  return routes;
};

export default Routes;
