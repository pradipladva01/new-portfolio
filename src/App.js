import React, { Suspense } from "react";
import Routes from "./Routes";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <ScrollToTop />
      <SnackbarProvider
        maxSnack={3}
        classes={{
          root: "custom-snackbar",
        }}
      >
        <Suspense>
          <Routes />
        </Suspense>
      </SnackbarProvider>
    </>
  );
}

export default App;
