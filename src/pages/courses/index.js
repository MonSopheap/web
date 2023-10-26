import React from 'react'
import styles from '../../Style'
import { FaRegAddressCard } from 'react-icons/fa';
import ButtonIcon from '../../components/ButtonIcon';
import Footer from '../../components/Footer';
import { logo, html, angular, reactjs, python, flutter, photoshop } from "../../assets/images"

function Courses() {
    const courses = [
        {
            name: "HTML",
            image: html,
            description: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            price: "",
            star: 5
        },
        {
            name: "HTML",
            image: reactjs,
            description: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            price: "",
            star: 5
        },
        {
            name: "HTML",
            image: angular,
            description: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            price: "",
            star: 5
        },
        {
            name: "HTML",
            image: python,
            description: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            price: "",
            star: 5
        },
        {
            name: "HTML",
            image: flutter,
            description: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            price: "",
            star: 5
        },
        {
            name: "HTML",
            image: photoshop,
            description: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
            price: "",
            star: 5
        }
    ]
    return (
        <>
            <section>
                <div className={`${styles.flexCenter} ${styles.marginY} flex-col`}>
                    <div className="flex-1 flex flex-col text-center">
                        <h2 className={`${styles.heading2} font-normal p-0`}>រងចាំអ្វីទៀតចាប់ផ្តើមពេលនេះ ដើម្បីអភិវឌ្ឍនជំនាញរបស់អ្នក​!</h2>
                        <div className='m-auto pt-6'>
                            <ButtonIcon text="ចុះឈ្មោះចូលរៀនឥឡូវនេះ" handleClick={() => window.open("https://t.me/SopheapZz")}>
                                <FaRegAddressCard size={20} />
                            </ButtonIcon>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className="grid gap-5 justify-evenly grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                        {
                            courses.map((item, i) => (
                                <div className="grid-item" key={i}>
                                    <div className="bg-[#013340] h-full w-full hover:ring-1 hover:ring-[#258bd2] cursor-pointer rounded-md box-shadow">
                                        <a href="#" className="text-center">
                                            <img className="rounded-t-md p-5 w-[150px] m-auto" src={item.image} alt="product image" />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <a href="#">
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
                                                <span className="text-3xl font-bold text-white">$599</span>
                                                <a href="#"
                                                    className="text-white bg-[#1075bc] hover:bg-[#0c65a4] focus:ring-1 focus:ring-[#258bd2] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                                    to cart</a>
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