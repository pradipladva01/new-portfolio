import React, { Suspense } from "react";
import Routes from "./Routes";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense>
        <Routes />
      </Suspense>
    </>
  );
}

export default App;
