import React from 'react'
import styles from '../../Style'

function Pricing() {
    return (
        <>
            <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}>
                <div className="flex-1 flex flex-col text-center">
                    <h1 className={`${styles.heading1} font-normal font-poppins`}>The Ultimate Platform</h1>
                </div>
            </section>
        </>
    )
}

export default Pricing