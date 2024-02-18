import headerBG from "../../assets/images/inner_header.jpg";
import PropTypes from "prop-types";
import useUtils from "../../hooks/useUtils/useUtils";
import React from "react";
import { Parallax } from "react-parallax";

const PageCover = ({ title, subTitle }) => {
    const { socials, iconClasses } = useUtils();

    return (
        <Parallax
            bgClassName=""
            bgImage={headerBG}
            className="bg-cover bg-top bg-no-repeat -mt-32"
            bgImageAlt={title}
            strength={300}
        >
            <div className="bg-[#000000]/60 h-full w-full flex justify-center items-center pb-20 sm:pb-44 pt-52 sm:pt-64">
                <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>

                <p className="absolute left-0 hidden sm:block font-jost font-medium text-white -rotate-90">
                    {subTitle || "Premium quality drinks"}
                </p>

                <div className="absolute right-0 rotate-90 hidden sm:flex justify-center items-center gap-3">
                    <p className="text-white text-[1rem]">Follow</p>
                    <hr className="w-4" />
                    <div className="flex justify-between items-center gap-2">
                        {socials?.map((item, index) => (
                            <a href={item?.link} key={index}>
                                {React.createElement(item?.icon, {
                                    className: `${iconClasses} -rotate-90`,
                                })}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Parallax>
    );
};
PageCover.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};
export default PageCover;
