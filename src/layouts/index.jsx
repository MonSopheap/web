import React from 'react'
import styles, { layout } from '../Style';
import Navbar from './Navbar';

function MainLayout({ children }) {


    return (
        <>
            <main className={`${layout.mainLayout}`}>
                <Navbar />
                <div className={`${layout.mainContent}`}>
                    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainLayout