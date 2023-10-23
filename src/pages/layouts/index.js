import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styles, { layout } from '../../Style';
import { logo } from "../../assets/images";

function MainLayout({ children }) {
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
            <main className={`${layout.mainLayout}`}>
                <nav className={`${layout.navBar} shadow-lg`}>
                    <div className={`${styles.paddingX}`}>
                        <div className="flex items-center justify-between h-16">
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
                                            menuList.map((menu) => {
                                                return (
                                                    <>
                                                        <a key={menu.id} href='#' onClick={() => navigate(`${menu.route}`)} className={`${(pathname === menu.route) ? "bg-[#013340]" : ""} hover:bg-gray-800 text-white px-5 py-2 rounded-md text-base font-kantumruyPro`}>
                                                            {menu.name}
                                                        </a>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-900 focus:ring-white"
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
                </nav>
                <div className={`${layout.mainContent}`}>
                    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainLayout