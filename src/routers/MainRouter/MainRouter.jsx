import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import Auth from "../../pages/Auth/Auth";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Shop from "../../pages/Shop/Shop";

const MainRouter = createBrowserRouter([
    {
        path: "/home",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
        ],
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            },
        ],
    },
]);

export default MainRouter;
