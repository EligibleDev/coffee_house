import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routers/MainRouter/MainRouter";
import { HelmetProvider } from "react-helmet-async";
import UtilsProvider from "./providers/UtilsProvider/UtilsProvider";
import "swiper/css";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <UtilsProvider>
                <RouterProvider router={MainRouter} />
            </UtilsProvider>
        </HelmetProvider>
    </React.StrictMode>
);
