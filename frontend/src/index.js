import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthContextProvider } from "./context/AuthContext";
import Loader from "./shared/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for .5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <AuthContextProvider>
        <BrowserRouter>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <App />
              <Toaster />
            </>
          )}
        </BrowserRouter>
      </AuthContextProvider>
    </React.StrictMode>
  );
};

root.render(<RootComponent />);





// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "remixicon/fonts/remixicon.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BrowserRouter } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import { AuthContextProvider } from "./context/AuthContext";
// import Loader from "./shared/Loader";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <BrowserRouter>
//        <Loader />
//         <App />
//         <Toaster />
//       </BrowserRouter>
//     </AuthContextProvider>
//   </React.StrictMode>
// );


