import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routers/MainRouter/MainRouter";
import { HelmetProvider } from "react-helmet-async";
import UtilsProvider from "./providers/UtilsProvider/UtilsProvider";
import "swiper/css";
import "swiper/css/navigation";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <UtilsProvider>
                <AuthProvider>
                    <RouterProvider router={MainRouter} />
                    <Toaster />
                </AuthProvider>
            </UtilsProvider>
        </HelmetProvider>
    </React.StrictMode>
);
