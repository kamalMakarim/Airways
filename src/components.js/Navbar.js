import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="fixed top-0 items-center flex justify-between flex-wrap p-6 rounded-bl-xl rounded-br-xl bg-green-900 w-full">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">AirWays</span>
            </div>

            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-white border-white hover:border-gray-400 "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            className="fill-current h-5 w-5 text-white"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9.293L6.146 5.44a1 1 0 00-1.414 1.414L8.586 10l-3.854 3.854a1 1 0 101.414 1.414L10 11.414l3.854 3.854a1 1 0 001.414-1.414L11.414 10l3.854-3.854a1 1 0 00-1.414-1.414L10 8.586z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="fill-current h-5 w-5 text-white"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <svg
                                className="fill-current h-5 w-5 text-white"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </svg>
                    )}
                </button>
            </div>

            <div className={`w-full ${isOpen ? 'block' : 'hidden'} flex-grow lg:flex lg:items-center lg:w-auto hover:cursor-pointer transition-transform`}>
                <ul className="text-sm lg:flex-grow">
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" onClick={() => window.location.href = '/Airways'}>Home</li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" onClick={() => window.location.href = '/Airways/drone'}>Drone</li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white-400 mr-4" onClick={() => window.location.href = '/Airways/find'}>Find</li>
                </ul>
            </div>
        </nav>
    );
};

const scrollToSectionOff = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        const top = sectionElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: top - 60,
            behavior: "smooth"
        });
    }
};

export default Navbar;

