import React from 'react';
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {

    const linkClass = ({ isActive }) =>
        isActive
            ? "px-3 py-2 border-b-2 border-purple-500 text-purple-500 transition-all duration-200"
            : "px-3 py-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-400 transition-all duration-200";

    const links = (
        <>
            <li>
                <NavLink to="/" end className={linkClass}>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink to="/app" className={linkClass}>
                    Apps
                </NavLink>
            </li>

            <li>
                <NavLink to="/installation" className={linkClass}>
                    Installation
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-white shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul className="menu menu-sm dropdown-content bg-[#ecf3f6] rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="flex items-center gap-2 text-xl font-semibold">
                        <img className="w-8 h-8" src={logo} alt="logo" />
                        <span className="text-purple-500">HERO.IO</span>
                    </NavLink>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() =>
                        window.open("https://github.com/ApornaRakshit")} className="bg-gradient-to-r from-purple-700 to-purple-400 hover:opacity-90 px-4 py-2 rounded-lg flex items-center gap-2 text-white">
                        <FaGithub />
                        Contribute
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;