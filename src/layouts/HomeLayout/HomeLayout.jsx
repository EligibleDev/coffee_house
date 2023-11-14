import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Footer from "../../components/Footer/Footer";

const HomeLayout = () => {
    return (
        <>
            <HomeHeader />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeLayout;
