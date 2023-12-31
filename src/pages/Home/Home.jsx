import { Helmet } from "react-helmet-async";
import Banner from "./sections/Banner/Banner";
import Carousel from "./sections/Carousel/Carousel";
import Intro from "./sections/Intro/Intro";
import Testimonials from "./sections/Testimonials/Testimonials";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";
import BestSellers from "./sections/BestSellers/BestSellers";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Coffee House - We have everything to refresh you</title>
            </Helmet>

            <Banner />
            <Intro />
            <Carousel />
            <BestSellers />
            <Testimonials />
            <WhyChooseUs />
        </>
    );
};

export default Home;
