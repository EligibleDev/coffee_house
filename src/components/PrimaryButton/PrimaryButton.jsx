import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, variant, link, func, extraClass }) => {
    const baseClasses = `relative flex justify-center items-center overflow-hidden px-5 lg:py-[25.25px] py-[17.5px] text-sm font-bold capitalize rounded-full before:content-[''] before:absolute before:w-full before:h-full before:translate-x-0 before:translate-y-72 hover:before:translate-y-0 before:transition-all before:duration-500 text-white ${
        extraClass || ""
    }`;

    const generatedClass =
        variant === "black"
            ? "bg-secondary-black before:bg-primary-green"
            : variant === "green"
            ? "bg-primary-green before:bg-secondary-black"
            : "bg-primary-green before:bg-white hover:text-primary-green";

    const classes = `${baseClasses} ${generatedClass}`;

    const buttonText = (
        <span className="z-10 min-w-[160px] lg:min-w-[220px] transition-all duration-500">
            {text}
        </span>
    );

    if (link) {
        return (
            <Link to={link}>
                <button className={classes}>{buttonText}</button>
            </Link>
        );
    } else {
        return (
            <button onClick={func} className={classes}>
                {buttonText}
            </button>
        );
    }
};

PrimaryButton.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    link: PropTypes.string,
    func: PropTypes.func,
    extraClass: PropTypes.string,
};
export default PrimaryButton;
