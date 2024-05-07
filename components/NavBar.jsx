import React, { useState } from 'react';

function NavLink({ to, children }) {
    return (
        <a href={to} className="mx-4 text-lg text-white hover:text-gray-300">
            {children}
        </a>
    );
}

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 bg-transparent shadow-none px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
                <a className="text-3xl font-semibold text-white" href="/">AutoXPert</a>
            </div>
            <div className="flex items-center">
                <div className="md:hidden">
                    <button
                        className="flex items-center justify-center w-10 h-10 text-white focus:outline-none"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`md:flex items-center ${open ? 'flex-col md:flex-row' : 'hidden'}`}>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/mylist">My Cars</NavLink>
                    <NavLink to="/about">Virtual Assistant</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
