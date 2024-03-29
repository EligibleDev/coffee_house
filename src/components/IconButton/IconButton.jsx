import { Tooltip } from "keep-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IconButton = ({ icon: Icon, onClick, link, tooltip, className }) => {
    const classes = `bg-primary-green p-2 text-lg rounded-full h-fit   ${
        className && className
    }`;

    return (
        <Tooltip content={tooltip}>
            {onClick ? (
                <button className={classes} onClick={onClick && onClick}>
                    <Icon />
                </button>
            ) : (
                <Link to={link && link}>
                    <button className={classes}>
                        <Icon />
                    </button>
                </Link>
            )}
        </Tooltip>
    );
};
IconButton.propTypes = {
    icon: PropTypes.func,
    onClick: PropTypes.func,
    link: PropTypes.string,
    tooltip: PropTypes.string,
    className: PropTypes.string,
};
export default IconButton;
