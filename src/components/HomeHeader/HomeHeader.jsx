import React from "react";
import logo from "../../assets/images/logo.png";
import useUtils from "../../hooks/useUtils/useUtils";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Tooltip } from "keep-react";
import { FaBars } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import useAuth from "../../hooks/useAuth/useAuth";

const HomeHeader = () => {
    const { socials, iconClasses, headerIcons, navLinks } = useUtils();
    const { user } = useAuth();

    return (
        <>
            <header className="absolute z-20 container mx-auto top-0 left-0 right-0 px-8 xl:px-0">
                <nav className="flex justify-between items-center py-6">
                    <div className="hidden lg:flex flex-1 justify-start items-center gap-3">
                        <p className="text-white text-[1rem]">Follow Us</p>
                        <hr className="w-4" />
                        <div className="flex justify-between items-center gap-2">
                            {socials?.map((item, index) => (
                                <a href={item?.link} key={index}>
                                    {React.createElement(item?.icon, {
                                        className: iconClasses,
                                    })}
                                </a>
                            ))}
                        </div>
                    </div>

                    <Link to="/" className="">
                        <img className="w-32" src={logo} alt="" />
                    </Link>

                    <div className="flex-1 hidden sm:flex justify-end items-center">
                        <div className="flex justify-between items-center gap-5">
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
                    </div>

                    <Navbar className="block lg:hidden text-white bg-transparent p-0 pl-5">
                        <Navbar.Toggle
                            openIcon={<FaBars size={30} />}
                            className="block"
                        ></Navbar.Toggle>

                        <Navbar.Collapse
                            collapseType="sidebar"
                            className="fixed right-0 top-0 bg-white p-10 !w-full"
                        >
                            <Navbar.Container
                                tag="nav"
                                className="flex flex-col justify-between h-full text-secondary-black"
                            >
                                <ul className="flex flex-col gap-5">
                                    {navLinks?.map((item) => (
                                        <NavLink
                                            className="text-sm font-bold "
                                            key={item?.link}
                                            to={item?.link}
                                        >
                                            {item?.label}
                                        </NavLink>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-5 pb-10">
                                    {headerIcons?.map(
                                        ({ icon, link, tooltip }, index) => (
                                            <Tooltip
                                                content={tooltip}
                                                style="light"
                                                key={index}
                                            >
                                                <Link to={link}>
                                                    {React.createElement(icon, {
                                                        className: iconClasses,
                                                    })}
                                                </Link>
                                            </Tooltip>
                                        )
                                    )}
                                    {/* {user ? (
                                        headerIcons?.map(
                                            ({ icon, link, tooltip }, index) => (
                                                <Tooltip
                                                    content={tooltip}
                                                    style="light"
                                                    key={index}
                                                >
                                                    <Link to={link}>
                                                        {React.createElement(icon, {
                                                            className: iconClasses,
                                                        })}
                                                    </Link>
                                                </Tooltip>
                                            )
                                        )
                                    ) : (
                                        <Tooltip content="Login" style="light">
                                            <Link to="/auth">
                                                <MdLogin className={iconClasses} />
                                            </Link>
                                        </Tooltip>
                                    )} */}
                                </div>
                            </Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>

                <nav className="hidden lg:flex justify-center items-center gap-10 pt-4">
                    {navLinks?.map((item) => (
                        <NavLink
                            className="text-sm font-bold text-white"
                            key={item?.link}
                            to={item?.link}
                        >
                            {item?.label}
                        </NavLink>
                    ))}
                </nav>
            </header>
        </>
    );
};

export default HomeHeader;
