import React from 'react'
import { logo } from '../../assets/images'
import styles from '../../Style'

function Testimonial() {
    const cardList = [
        {
            id: 1,
            name: "គីម ម៉ាលី",
            image: logo,
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 2,
            name: "សាំង ចាន់ឌីន",
            image: logo,
            description: "ខ្ញុំអត់មាន Basic ពីកូដទេតែពេលបានចូលរៀនវគ្គនេះ ខ្ញុំគឺយល់បានច្បាស់តែម្តង។"
        },
        {
            id: 3,
            name: "សួន សំបូរ",
            image: logo,
            description: "និស្សិតមានភាពងាយស្រួលក្នុងការសិក្សានឹងមានការពន្យល់ជាភាសាខ្មែរដែលធ្វើអោយអ្នកសិក្សាដែលខ្សោយភាសាអង់គ្លេសមានភាពងាយស្រួលក្នុងការរៀន។"
        }
    ];
    return (
        <>
            <div className='w-full'>
                <div className='text-center'>
                    <h2 className={`${styles.heading2}`}>ការវាយតម្លៃរបស់សិស្សនិសិ្សត</h2>
                    <p className={`${styles.paragraph} mt-3 mb-5`}>
                        បង្រៀនដោយអ្នកមានបទពិសោធន៍លើការងារស្រាប់ និងអនុវត្តជាមួយ Project ផ្លាល់។
                    </p>
                </div>
                <div className="grid gap-8 justify-evenly grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    {
                        cardList.map((obj) => (<div key={obj.id} className="grid-item">
                            <div className="flex max-w-5xl min-h-[350px] mx-auto">
                                <div className='bg-secondary rounded-xl p-8'>
                                    <img src={obj.image} alt="..." className="h-20 mb-2 mx-auto" />
                                    <h3 className={`${styles.heading3} uppercase text-white text-center`}>{obj.name}</h3>
                                    <p className={`${styles.paragraph} leading-3 my-3 font-light opacity-100`}>
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