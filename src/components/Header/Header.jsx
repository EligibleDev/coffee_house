import Headroom from "react-headroom";
import logo from "../../assets/images/logo.png";
import useUtils from "../../hooks/useUtils/useUtils";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth/useAuth";
import { Tooltip } from "keep-react";
import { MdLogin } from "react-icons/md";
import React from "react";

const Header = () => {
    const { navLinks, headerIcons, iconClasses } = useUtils();
    const { user } = useAuth();

    return (
        <Headroom>
            <header className="bg-[#000000]/70">
                <div className="container mx-auto flex justify-between items-center py-3 px-8 xl:px-0">
                    <Link to="/home">
                        <img className="w-24" src={logo} alt="Coffee House Logo" />
                    </Link>
                    <nav className="flex justify-end items-center gap-10">
                        <ul className="flex gap-10">
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

                        <div className="border-x border-x-gray-700 px-8 py-3">
                            <a
                                href="tel:+8801619152852"
                                className="flex justify-between items-center gap-4 text-white hover:text-primary-green transition font-bold text-sm"
                            >
                                <FaPhoneVolume className="text-primary-green text-xl" />
                                <p>0905-456-987-3</p>
                            </a>
                        </div>

                        <div className="flex gap-5">
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
                    </nav>
                </div>
            </header>
        </Headroom>
    );
};

export default Header;
