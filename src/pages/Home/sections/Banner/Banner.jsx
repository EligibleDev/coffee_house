import bannerVideo from "../../../../assets/banner-video.mp4";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
    return (
        <>
            <div className="h-screen min-h-[600px] relative">
                <video
                    className="absolute w-full h-full object-cover "
                    src={bannerVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <div className="bg-[#00000065] w-full h-full flex flex-col justify-center items-center z-10 absolute text-white ">
                    <div className="h-1/5 lg:h-1/3 xl:h-1/5"></div>
                    <div className="text-center">
                        <h1 className="text-5xl sm:text-6xl lg:text-[80px] leading-none font-bold w-full sm:w-2/3 mx-auto">
                            <span className="text-primary-green">Time to Discover </span>
                            Coffee House
                        </h1>
                        <p className="w-full lg:w-2/3 pt-4 pb-10 px-3 mx-auto font-jost text-lg">
                            Savor artisanal delights and aromatic brews in our cozy haven;
                            where every sip tells a story, and every bite is a moment of
                            pure indulgence
                        </p>
                        <PrimaryButton text="Buy now" link="/shop" extraClass="mx-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
