import React, { useState } from 'react'
import { logo } from "../assets/images";
import { useLocation, useNavigate } from 'react-router-dom';
import styles, { layout } from '../Style';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate()

    const menuList = [
        {
            id: 1,
            name: "ទំព័រដើម",
            route: '/',
        },
        {
            id: 2,
            name: "មេរៀន",
            route: '/courses',
        },
        {
            id: 3,
            name: "អំពីពួកយើង",
            route: '/about-us',
        },
        {
            id: 4,
            name: "តម្លៃ",
            route: '/pricing',
        },
    ];

    return (
        <>
            <nav className={`${layout.navBar}`}>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <div className="flex justify-between items-center  h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-11 w-11"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-5 flex items-baseline space-x-1">
                                        {
                                            menuList.map((menu) => <a key={menu.id} href='#' onClick={() => navigate(`${menu.route}`)} className={`${(pathname === menu.route) ? "bg-[#013340]" : ""} hover:bg-gray-800 text-white px-5 py-2 rounded-md text-base font-kantumruyPro`}>
                                                {menu.name}
                                            </a>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex mr-2">
                                <button className="flex m-auto font-kantumruyPro items-center px-4 py-2 rounded-md text-white bg-[#1075bc] hover:bg-[#0c65a4]">
                                    ចូលគណនី
                                </button>

                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 ml-2 rounded-md text-white hover:text-white hover:bg-gray-900 focus:outline-none "
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar