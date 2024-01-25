import headerBG from "../../assets/images/inner_header.jpg";

const PageCover = () => {
      return (
            <header
            style={{ backgroundImage: `url(${headerBG})` }}
            className="bg-cover bg-top bg-no-repeat"
        >
            <div className="bg-[#000000]/60 h-full w-full flex justify-center items-center pb-56 pt-80 -mt-32">
                <h1 className="text-white">All Drinks</h1>
            </div>
        </header>
      );
};

export default PageCover;