import React from 'react'
import styles from '../../Style'
import { FaRegAddressCard } from 'react-icons/fa';
import ButtonIcon from '../../components/ButtonIcon';
import Footer from '../footer';

function Courses() {
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
                    <div className="grid gap-5 justify-evenly grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                        <div className="grid-item">
                            <div className="bg-[#013340] h-[250px] w-full hover:ring-1 hover:ring-[#258bd2] cursor-pointer rounded-md box-shadow">

                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="bg-[#013340] h-[250px] w-full hover:ring-1 hover:ring-[#258bd2] cursor-pointer rounded-md box-shadow">

                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="bg-[#013340] h-[250px] w-full hover:ring-1 hover:ring-[#258bd2] cursor-pointer rounded-md box-shadow">

                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="bg-[#013340] h-[250px] w-full hover:ring-1 hover:ring-[#258bd2] cursor-pointer rounded-md box-shadow">

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Courses