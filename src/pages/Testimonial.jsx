import React from 'react'
import styles from '../Style'

function Testimonial() {
    const cardList = [
        {
            id: 1,
            name: "ហេង សុម៉ាវត្តី",
            image: "https://img.freepik.com/premium-photo/asian-student-woman-reading-books-library-university_7861-3536.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=ais",
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 2,
            name: "សាំង ចាន់ឌីន",
            image: "https://www.thoughtco.com/thmb/QYpkD-YZYFQXffqRfl83iCbsZeA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/StudyingAtNight-58c2c2635f9b58af5ca0464b.jpg",
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 3,
            name: "គីម ម៉ាលី",
            image: "https://www.aiitk.edu.kh/wp-content/uploads/2023/09/370248289_609869487972567_2350077052313202002_n.jpg",
            description: "ខ្ញុំអត់មាន Basic ពីកូដទេតែពេលបានចូលរៀនជាមួយពួកគាត់ ខ្ញុំគឺយល់បានច្បាស់តែម្តង។"
        },
        {
            id: 4,
            name: "សួន សំបូរ",
            image: "https://img.freepik.com/premium-photo/friendly-happy-young-asian-male-college-student-is-waving-his-hand-say-hi-his-friends_67155-38728.jpg",
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 5,
            name: "ហៀង ឆាយរ៉ាត់់",
            image: "https://img.freepik.com/free-photo/hipster-bearded-man-reading-book-cafe_1150-3986.jpg",
            description: "ការបង្រៀនគឺលម្អិតពីមូលដ្ឋានគ្រឹះទៅ សិស្សងាយយល់ ងាយចាប់បាន។ មានទំនុកចិត្ត រៀនបណ្តើរអនុវត្តបណ្តើរ។"
        },
        {
            id: 6,
            name: "ហេង សុវ៉ាន់ឆៃ",
            image: "https://img.freepik.com/premium-photo/young-male-student-university-campus-back-school-concept_1421-5229.jpg",
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
                <div className="grid gap-5  justify-evenly grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        cardList.map((obj) => (<div key={obj.id} className="grid-item">
                            <div className="flex w-full h-full mx-auto">
                                <div className='bg-secondary rounded-xl p-5'>
                                    <div className='overflow-hidden flex w-full text-center mb-3'>
                                        <img src={obj.image} alt="..." className="h-20 w-20 rounded-full object-center object-cover mx-auto" />
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