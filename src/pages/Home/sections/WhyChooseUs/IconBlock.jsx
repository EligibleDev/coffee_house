import PropTypes from "prop-types";

const IconBlock = ({ icon: Icon, title, description, direction }) => {
    return direction === "left" ? (
        <div className="flex justify-start items-start gap-6">
            <Icon className="text-[15rem] md:text-7xl xl:text-[15rem] text-primary-green h-fit" />
            <div className="text-left">
                <h4 className="text-lg font-bold">{title}</h4>
                <p className="font-jost opacity-75 leading-[1.7em]">{description}</p>
            </div>
        </div>
    ) : direction === "right" ? (
        <div className="flex justify-start xl:justify-end items-start gap-6">
            <div className="text-left xl:text-right">
                <h4 className="text-lg font-bold">{title}</h4>
                <p className="font-jost opacity-75 leading-[1.7em]">{description} </p>
            </div>
            <Icon className="text-[15rem] md:text-7xl xl:text-[15rem] text-primary-green h-fit" />
        </div>
    ) : (
        ""
    );
};
IconBlock.propTypes = {
    Icon: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
    direction: PropTypes.string,
};
export default IconBlock;
