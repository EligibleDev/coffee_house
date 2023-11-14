import { createContext } from "react";
import PropTypes from "prop-types";
import {
    FaBagShopping,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMagnifyingGlass,
    FaUser,
    FaXTwitter,
} from "react-icons/fa6";

export const UtilsContext = createContext();
const UtilsProvider = ({ children }) => {
    const socials = [
        {
            icon: FaFacebookF,
            label: "Facebook",
            link: "#",
        },
        {
            icon: FaInstagram,
            label: "Instagram",
            link: "#",
        },
        {
            icon: FaLinkedinIn,
            label: "Linkedin",
            link: "#",
        },
        {
            icon: FaXTwitter,
            label: "X",
            link: "#",
        },
    ];

    const iconClasses =
        "text-primary-green text-base p-2 rounded-full box-content border-2 border-primary-green hover:text-white hover:border-white transition cursor-pointer";

    const headerIcons = [
        {
            icon: FaUser,
            link: "#",
        },
        {
            icon: FaMagnifyingGlass,
            link: "#",
        },
        {
            icon: FaBagShopping,
            link: "#",
        },
    ];

    const navLinks = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "Shop",
            link: "/shop",
        },
    ];

    const values = [socials, iconClasses, headerIcons, navLinks];

    return <UtilsContext.Provider value={values}>{children}</UtilsContext.Provider>;
};
UtilsProvider.propTypes = {
    children: PropTypes.node,
};
export default UtilsProvider;
