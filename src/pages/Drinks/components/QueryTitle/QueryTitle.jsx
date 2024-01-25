import PropTypes from "prop-types";
import { BiSolidCoffee } from "react-icons/bi";

const QueryTitle = ({ children }) => {
    return (
        <div className="flex items-center gap-2 border-b border-b-secondary-black pb-4 mb-6">
            <BiSolidCoffee className="text-2xl text-primary-green" />
            <h2 className="text-lg font-bold uppercase">{children}</h2>;
        </div>
    );
};

QueryTitle.propTypes = {
    children: PropTypes.string.isRequired,
};
export default QueryTitle;
