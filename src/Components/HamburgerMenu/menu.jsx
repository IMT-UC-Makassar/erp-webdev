import { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom";

const Menu = ({className}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="mt-5 relative" ref={menuRef}>
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-sky-200 pl-5"
                onClick={toggleMenu}
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-6 w-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
            </button>

            {isMenuOpen && (
                <div className="absolute top-0 left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-1/5 p-4">
                    <div className="flex flex-row">
                        <div className="flex w-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                className="h-6 w-6 mr-3"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                            </svg>
                            <strong>Main Menu</strong>
                        </div>
                        <div className="flex w-1/2 flex justify-end">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                id="close"
                                viewBox="0 0 1792 1792"
                                onClick={toggleMenu}  // Add this line
                                style={{ cursor: 'pointer' }} // Add this line to indicate it's clickable
                            >
                                <path
                                    d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path></svg>
                        </div>
                    </div>

                    <div className="flex px-8 py-2">
                        <ul className="py-1">
                            <Link to="/home">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">Dashboard</li>
                            </Link>
                            <Link to="/meetinglist">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">Meeting</li>
                            </Link>
                            <Link to="/inventorylist">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">Inventory</li>
                            </Link>
                            <Link to="/projectlist">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">Project</li>
                            </Link>
                            <Link to="/finance">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">Finance</li>
                            </Link>
                            <Link to="/profile">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">Profile</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;