import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProviders from "./Providers/AuthProviders";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
  
      <div className="max-w-screen-xl mx-auto">
      <ToastContainer/>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProviders>
  </React.StrictMode>
);
