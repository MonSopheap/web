import React from 'react'
import styles from '../../Style'
import ButtonIcon from '../../components/ButtonIcon'
import { BsArrowRightCircle } from 'react-icons/bs';
import Testimonial from '../testimonail';
import Footer from '../../components/Footer';
import FAQ from '../../components/FAQ';

function Home() {
    return (
        <>
            <h1 className={`${styles.heading1} font-semibold`}>
                សិក្សាពីមូលដ្ឋានគ្រឹះនៃការសរសេរកូដ ជាភាសាខ្មែរ
            </h1>
            <p className={`${styles.paragraph} mt-5`}>
                ជាមួយភាសាកូដ និងជំនាញដែលពេញនិយមបំផុតមានដូចជា HTML, CSS, JavaScript, React, Frontend and JavaScript algorithms & data structures។
            </p>

            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-0">
                <div className="px-0 py-0 sm:px-0">
                    <div className="border-2 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
            </div>
            <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#013340] rounded-xl box-shadow`}>
                <div className="flex-1 flex flex-col">
                    <h2 className={`${styles.heading2} font-normal`}>តោះចាប់ផ្តើមរៀនឥឡូវនេះជាមួយពួកយើង!</h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
                        ផ្ដល់ឱ្យអ្នកនូវវគ្គសិក្សាដែលមានគុណភាពល្អជាច្រើន។
                    </p>
                </div>

                <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                    <ButtonIcon handleClick={() => window.open("https://t.me/abc")} text="Get Started">
                        <BsArrowRightCircle />
                    </ButtonIcon>
                </div>
            </section>
            <Testimonial />
            <FAQ />
            <Footer />
        </>
    )
}

export default Home