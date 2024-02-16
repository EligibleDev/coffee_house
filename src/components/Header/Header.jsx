import Headroom from "react-headroom";
import logo from "../../assets/images/logo.png";
import useUtils from "../../hooks/useUtils/useUtils";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaPhoneVolume } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth/useAuth";
import { Navbar, Tooltip } from "keep-react";
import { MdLogin } from "react-icons/md";
import React from "react";

const Header = () => {
    const {
        navLinks,
        headerIcons,
        iconClasses,
        liftSidebarPosition,
        lowerSidebarPosition,
    } = useUtils();
    const { user } = useAuth();

    return (
        <Headroom onUnpin={lowerSidebarPosition} onPin={liftSidebarPosition}>
            <header className="bg-[#000000]/70">
                <div className="container mx-auto flex justify-between items-center py-3 px-8 xl:px-0">
                    <Link to="/home">
                        <img className="w-24" src={logo} alt="Coffee House Logo" />
                    </Link>
                    <nav className="flex justify-end items-center gap-5 sm:gap-10">
                        <ul className="hidden xl:flex gap-10">
                            {navLinks.map((item) => (
                                <NavLink
                                    to={item.link}
                                    className="text-sm font-bold text-white"
                                    key={item.link}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </ul>

                        <div className="hidden sm:block border-r xl:border-x border-x-gray-700 px-8 py-3">
                            <a
                                href="tel:+8801619152852"
                                className="flex justify-between items-center gap-4 text-white hover:text-primary-green transition font-bold text-sm"
                            >
                                <FaPhoneVolume className="text-primary-green text-xl" />
                                <p>0905-456-987-3</p>
                            </a>
                        </div>

                        <div className="flex gap-5">
                            {/* {headerIcons?.map(({ icon, link, tooltip }, index) => (
                                <Tooltip content={tooltip} style="light" key={index}>
                                    <Link to={link}>
                                        {React.createElement(icon, {
                                            className: iconClasses,
                                        })}
                                    </Link>
                                </Tooltip>
                            ))} */}
                            {user ? (
                                headerIcons?.map(({ icon, link, tooltip }, index) => (
                                    <Tooltip content={tooltip} style="light" key={index}>
                                        <Link to={link}>
                                            {React.createElement(icon, {
                                                className: iconClasses,
                                            })}
                                        </Link>
                                    </Tooltip>
                                ))
                            ) : (
                                <Tooltip content="Login" style="light">
                                    <Link to="/auth">
                                        <MdLogin className={iconClasses} />
                                    </Link>
                                </Tooltip>
                            )}
                        </div>

                        <Navbar className="block xl:hidden text-white bg-transparent p-0">
                            <Navbar.Toggle
                                openIcon={<FaBars size={30} />}
                                // className="block"
                            ></Navbar.Toggle>

                            <Navbar.Collapse
                                collapseType="sidebar"
                                className="fixed right-0 top-0 bg-white p-10 !w-full !h-screen"
                            >
                                <Navbar.Container
                                    tag="nav"
                                    className="flex flex-col justify-between h-full text-secondary-black"
                                >
                                    <ul className="flex flex-col gap-5">
                                        {navLinks?.map((item) => (
                                            <NavLink
                                                className="text-sm font-bold"
                                                key={item?.link}
                                                to={item?.link}
                                            >
                                                {item?.label}
                                            </NavLink>
                                        ))}
                                    </ul>

                                    <div className="pb-10">
                                        <a
                                            href="tel:+8801619152852"
                                            className="flex justify-start items-center gap-4 hover:text-primary-green transition font-bold text-sm"
                                        >
                                            <FaPhoneVolume className="text-primary-green text-xl" />
                                            <p>0905-456-987-3</p>
                                        </a>
                                    </div>
                                </Navbar.Container>
                            </Navbar.Collapse>
                        </Navbar>
                    </nav>
                </div>
            </header>
        </Headroom>
    );
};

export default Header;
