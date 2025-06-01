import React, { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { retry } from "./utils/CommonFunctions";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
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
      path: "/work",
      element: <Work />,
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
