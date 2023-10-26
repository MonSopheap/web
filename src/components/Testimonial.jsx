import React from 'react'
import styles from '../Style'
import { student, student2, student3, st, st1, st2 } from "../assets/profiles"

function Testimonial() {
    const cardList = [
        {
            id: 1,
            name: "ហេង សុម៉ាវត្តី",
            image: st,
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 2,
            name: "សាំង ចាន់ឌីន",
            image: student,
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 3,
            name: "គីម ម៉ាលី",
            image: st1,
            description: "ខ្ញុំអត់មាន Basic ពីកូដទេតែពេលបានចូលរៀនជាមួយពួកគាត់ ខ្ញុំគឺយល់បានច្បាស់តែម្តង។"
        },
        {
            id: 4,
            name: "សួន សំបូរ",
            image: student2,
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 5,
            name: "ហៀង ឆាយរ៉ាត់់",
            image: student3,
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 6,
            name: "ហេង សុវ៉ាន់ឆៃ",
            image: st2,
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },

    ];
    return (
        <>
            <div className='w-full mb-14'>
                <div className='text-center mb-6'>
                    <h2 className={`${styles.heading2}`}>ការវាយតម្លៃរបស់សិស្សនិសិ្សត</h2>
                    <p className={`${styles.paragraph} mt-3`}>
                        បង្រៀនដោយអ្នកមានបទពិសោធន៍លើការងារស្រាប់ និងអនុវត្តជាមួយ Project ផ្លាល់។
                    </p>
                </div>
                <div className="grid gap-5 xs:gap-3 justify-evenly grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {
                        cardList.map((obj) => (<div key={obj.id} className="grid-item">
                            <div className="flex w-full h-full mx-auto">
                                <div className='bg-secondary rounded-xl p-5'>
                                    <div className='relative w-24 h-24 overflow-hidden mx-auto mb-3'>
                                        <img src={obj.image} alt="..." className="rounded-full shadow-sm" />
                                    </div>
                                    <h3 className={`uppercase text-white text-center font-kantumruyPro text-xl mb-3`}>{obj.name}</h3>
                                    <p className={`text-white font-kantumruyPro font-light opacity-100 text-md`}>
                                        {obj.description}
                                    </p>

                                </div>
                            </div>
                        </div>)
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Testimonial