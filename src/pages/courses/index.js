import React from 'react'
import styles from '../../Style'
import { FaRegAddressCard } from 'react-icons/fa';
import ButtonIcon from '../../components/ButtonIcon';

function Courses() {
    return (
        <>
            <section id="course">
                <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col`}>
                    <div className="flex-1 flex flex-col text-center">
                        <h2 className={`${styles.heading2} font-normal p-0`}>រងចាំអ្វីទៀតចាប់ផ្តើមពេលនេះ ដើម្បីអភិវឌ្ឍនជំនាញរបស់អ្នក​!</h2>
                        <div className='m-auto pt-6'>
                            <ButtonIcon text="ចុះឈ្មោះចូលរៀនឥឡូវនេះ" handleClick={() => window.open("https://t.me/SopheapZz")}>
                                <FaRegAddressCard size={20} />
                            </ButtonIcon>
                        </div>
                    </div>
                </div>

                <div className='container w-full'>
                    <div className="grid grid-cols-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 justify-evenly">
                        <div className="h-[250px] w-full">
                            <div className="bg-[rgb(1,51,64)] h-full  rounded-md box-shadow">

                            </div>
                        </div>
                        <div className="h-[250px] w-full">
                            <div className="bg-[#013340] h-full rounded-md box-shadow">

                            </div>
                        </div>
                        <div className="h-[250px] w-full">
                            <div className="bg-[#013340] h-full  rounded-md box-shadow">

                            </div>
                        </div>
                        <div className="h-[250px] w-full">
                            <div className="bg-[#013340] h-full  rounded-md box-shadow">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses