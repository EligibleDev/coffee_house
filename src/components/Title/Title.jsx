import PropTypes from "prop-types";

const Title = ({ title, subTitle, className }) => {
    return (
        <div className={`capitalize font-bold ${className || ""}`}>
            <p className="text-primary-green">{subTitle}</p>
            <h2 className="text-4xl md:text-5xl">{title}</h2>
        </div>
    );
};
Title.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    className: PropTypes.string,
};
export default Title;
