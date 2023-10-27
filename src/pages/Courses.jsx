import React from 'react'
import styles from '../Style'
import { FaRegAddressCard } from 'react-icons/fa';
import Footer from './Footer';
import ButtonIcon from "../components/ButtonIcon"
import ReactGA from "react-ga4";
import {
    scss,
    html,
    angular,
    reactjs,
    python,
    flutter,
    photoshop,
    tailwind,
    php,
    laravel,
    javascript,
    nodejs,
    netcore
} from "../assets/images"

function Courses() {
    const courses = [
        {
            name: "HTML, CSS, Bootstrap",
            image: html,
            description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. ",
            price: "7.99",
            star: 5
        },
        {
            name: "JavaScript",
            image: javascript,
            description: "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
            price: "7.99",
            star: 5
        },
        {
            name: "React JS ",
            image: reactjs,
            description: "React is open source library for build interfaces, Not framwork, Focus on UI. React ecosystem.",
            price: "24.99",
            star: 5
        },
        {
            name: "Angular CLI",
            image: angular,
            description: "Angular is a development platform, built on TypeScript.",
            price: "24.99",
            star: 5
        },
        {
            name: "NodeJs",
            image: nodejs,
            description: "Node.js® is an open-source, cross-platform JavaScript runtime environment.",
            price: "24.99",
            star: 5
        },
        {
            name: "Python",
            image: python,
            description: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            price: "24.99",
            star: 5
        },
        {
            name: "Flutter, Dart",
            image: flutter,
            description: "Open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
            price: "7.99",
            star: 5
        },
        {
            name: "ASP.net Core",
            image: netcore,
            description: "A cross-platform, high-performance, open-source framework for building modern, cloud-enabled, Internet-connected apps.",
            price: "24.99",
            star: 5
        },

        {
            name: "Php",
            image: php,
            description: "A popular general-purpose scripting language that is especially suited to web development.",
            price: "24.99",
            star: 5
        },
        {
            name: "Laravel",
            image: laravel,
            description: "Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended",
            price: "24.99",
            star: 5
        },
        {
            name: "Tailwind CSS",
            image: tailwind,
            description: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
            price: "4.99",
            star: 5
        },
        {
            name: "SCSS",
            image: scss,
            description: "CSS with superpowers ... Sass is the most mature, stable, and powerful professional grade CSS",
            price: "4.99",
            star: 5
        },
        {
            name: "PhotoShop",
            image: photoshop,
            description: "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc.",
            price: "16.99",
            star: 5
        },

    ];

    const handleRegister = (e) => {
        ReactGA.event({
            category: "Button",
            action: e.target.innerText
        })
        window.open("https://t.me/abc");
    }
    return (
        <>
            <section>
                <div className={`${styles.flexCenter} ${styles.marginY} flex-col`}>
                    <div className="flex-1 flex flex-col text-center">
                        <h2 className={`${styles.heading2} font-normal p-0`}>រងចាំអ្វីទៀតចាប់ផ្តើមពេលនេះ ដើម្បីអភិវឌ្ឍនជំនាញរបស់អ្នក​!</h2>
                        <div className='m-auto pt-6'>
                            <ButtonIcon text="ចុះឈ្មោះចូលរៀនឥឡូវនេះ" handleClick={() => window.open("https://t.me/abc")}>
                                <FaRegAddressCard size={20} />
                            </ButtonIcon>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className="grid gap-5 justify-evenly grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            courses.map((item, i) => (
                                <div className="grid-item" key={i}>
                                    <div className="bg-[#013340] h-full w-full hover:ring-1 hover:ring-[#258bd2] cursor-pointer rounded-md box-shadow">
                                        <div className="h-[130px] overflow-hidden">
                                            <img className="rounded-t-md p-5 w-auto h-full m-auto" src={item.image} alt="product image" />
                                        </div>
                                        <div className="px-5 pb-5">
                                            <a href="#">
                                                <h1 className="font-normal text-xl tracking-tight text-white font-kantumruyPro">
                                                    {item.name}
                                                </h1>
                                                <h3 className="font-normal text-md tracking-tight text-white font-kantumruyPro">
                                                    {item.description}
                                                </h3>
                                            </a>
                                            <div className="flex items-center mt-2.5 mb-5">
                                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold text-white">${item.price}</span>
                                                <button type="button" onClick={handleRegister}
                                                    className="text-white font-kantumruyPro bg-[#1075bc] hover:bg-[#0c65a4] focus:ring-1 focus:ring-[#258bd2] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    ចុះឈ្មោះចូលរៀន
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Courses