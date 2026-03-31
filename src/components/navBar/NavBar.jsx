import React from 'react';
import { BsCart2 } from 'react-icons/bs';

const NavBar = ({ carts }) => {
    return (
        <div className="navbar bg-base-100 shadow-md px-2 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                        <li className="sm:hidden"><a>Login</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:text-2xl text-[#4F39F6] font-bold px-1">DigiTools</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-[#101727]">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>

            <div className="navbar-end gap-2 md:gap-5">
                <div className="relative flex items-center cursor-pointer mr-2">
                    <BsCart2 size={24} className="text-[#101727]" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full font-bold">
                        {carts?.length || 0}
                    </span>
                </div>

                <a className="hidden sm:inline-block cursor-pointer font-semibold text-[#101727]">Login</a>

                <a className="btn btn-sm md:btn-md rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-none px-4 md:px-6">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default NavBar;