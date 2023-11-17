import { FaEnvelope, FaSquarePhone } from "react-icons/fa6";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import introImage from "../../../../assets/intro-image.png";

const Intro = () => {
    return (
        <>
            <section className="container mx-auto flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-0 items-center py-10 lg:py-20 px-8 xl:px-0">
                <div className="w-full lg:w-1/2 flex flex-col justify-between items-center lg:items-start gap-6">
                    <h3 className="text-4xl text-center lg:text-left md:text-5xl font-bold w-fit md:w-[90%] lg:w-fit">
                        <span className="text-primary-green ">Arabica & Robusta </span>
                        Exclusive Planted Coffee
                    </h3>

                    <p className="font-jost text-lg text-center lg:text-left">
                        Welcome to Coffee House, where aromatic brews and delightful
                        pastries create a cozy haven for coffee enthusiasts. Explore our
                        menu featuring artisanal blends, freshly baked treats, and a warm
                        ambiance. Savor the moment at Coffee House.
                    </p>

                    <div className="">
                        <a
                            href="mailto:mikailhossain0202@gmail.com"
                            className="flex justify-start items-start gap-5 font-bold text-lg pl-6"
                        >
                            <FaEnvelope className="text-primary-green text-3xl" />
                            <h4 className="">mikailhossain0202@gmail.com</h4>
                        </a>
                        <a
                            href="tell:+8801619152852"
                            className="flex justify-start items-start gap-5 font-bold text-lg pl-6 mt-4"
                        >
                            <FaSquarePhone className="text-primary-green text-3xl" />
                            <h4 className="">+880 16191 52852</h4>
                        </a>
                    </div>

                    <div className="flex gap-2 lg:gap-5">
                        <PrimaryButton text="read more" link="/" variant="black" />
                        <PrimaryButton text="buy now" link="/shop" variant="green" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <div className="absolute p-[87px] -top-1 md:top-8 lg:top-3.5 xl:top-10 left-2 md:left-40 lg:left-[86px] xl:left-40 rounded-full border-[3px] border-primary-green border-dashed animate-spin"></div>

                    <div className="absolute bg-white top-1.5 md:top-[42px] lg:top-6 xl:top-[50px] left-[18px] md:left-[170px] lg:left-24 xl:left-[170px] flex flex-col justify-center items-center rounded-full w-40 h-40 shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                        <h3 className="text-2xl font-bold ">Since</h3>
                        <h2 className="text-5xl font-bold text-primary-green">1962</h2>
                    </div>

                    <img className="ml-auto" src={introImage} alt="" />
                </div>
            </section>
        </>
    );
};

export default Intro;
