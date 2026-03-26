import React from 'react';
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <Link to='/'><li className="px-3 py-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-400">
                Home
            </li></Link>
            <Link to="/app"><li className="px-3 py-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-400">
                Apps
            </li></Link>
            <li className="px-3 py-2 border-b-2 border-transparent hover:border-purple-400 hover:text-purple-400">
                Installation
            </li>
        </>
    );

    return (
        <div className="text-black shadow-sm  ">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-black lg:hidden ">
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

                    <a className="flex items-center cursor-pointer gap-2 text-xl font-semibold">
                        <img className="w-8 h-8" src={logo} alt="logo" />
                        <p className='text-purple-500'>HERO.IO</p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-linear-to-r from-purple-700 to-purple-400 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2">
                        <FaGithub className="text-white" />
                        <p className='text-white'>Contribute</p>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;