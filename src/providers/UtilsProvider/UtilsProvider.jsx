import { createContext, useState } from "react";
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
    const [buttonLoading, setButtonLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const maxDrinkPrice = 15000;

    const sortingMethods = [
        {
            method: "Sort by Default",
        },
        {
            method: "Sort by Popularity",
        },
        {
            method: "Sort by Latest",
        },
        {
            method: "Sort by Price: Low to High",
        },
        {
            method: "Sort by Price: High to Low",
        },
    ];

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
            tooltip: "Profile",
        },
        {
            icon: FaMagnifyingGlass,
            link: "#",
            tooltip: "Find Coffee",
        },
        {
            icon: FaBagShopping,
            link: "#",
            tooltip: "Cart",
        },
    ];

    const navLinks = [
        {
            label: "Home",
            link: "/home",
        },
        {
            label: "Drinks",
            link: "/drinks",
        },
    ];

    const inputClasses =
        "peer h-full w-full rounded-md border border-secondary-black border-t-secondary-black bg-transparent px-3 py-3 font-jost  text-secondary-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-secondary-black placeholder-shown:border-t-secondary-black focus:border-2 focus:border-primary-green focus:border-t-transparent focus:outline-0";

    const labelClasses =
        "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-jost leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-secondary-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-secondary-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-secondary-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-green peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary-green peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary-green";

    const liftSidebarPosition = () => {
        const productSidebar = document.getElementById("product-sidebar");
        productSidebar && productSidebar.classList.add("!top-36");
    };

    const lowerSidebarPosition = () => {
        const productSidebar = document.getElementById("product-sidebar");
        productSidebar && productSidebar.classList.remove("!top-36");
    };

    const valuesOfUtilities = {
        socials,
        iconClasses,
        headerIcons,
        navLinks,
        inputClasses,
        labelClasses,
        buttonLoading,
        setButtonLoading,
        buttonDisabled,
        setButtonDisabled,
        maxDrinkPrice,
        sortingMethods,
        liftSidebarPosition,
        lowerSidebarPosition,
    };

    return (
        <UtilsContext.Provider value={valuesOfUtilities}>
            {children}
        </UtilsContext.Provider>
    );
};
UtilsProvider.propTypes = {
    children: PropTypes.node,
};
export default UtilsProvider;
