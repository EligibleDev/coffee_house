import bannerVideo from "../../../../assets/banner-video.mp4";
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
                <div className="bg-[#00000065] w-full h-full z-10 absolute">
                  
                </div>
            </div>
        </>
    );
};

export default Banner;
