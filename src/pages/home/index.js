import React from 'react'
import Footer from '../footer'
import styles from '../../Style'
import GetStart from '../get-start'

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
            <GetStart />

        </>
    )
}

export default Home