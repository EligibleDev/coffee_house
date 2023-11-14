import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "/*",
        element: <MainLayout />,
    },
]);

export default MainRouter;
