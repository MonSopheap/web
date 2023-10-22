import React from 'react'
import { Facebook } from 'react-feather'
import styles from '../Style'

function ButtonIcon({ handleClick, children, text, buttonType, ...props }) {
    return (
        <>
            <button type={buttonType || "button"} onClick={handleClick}
                className={`${styles.buttonDefault}`} {...props}>
                <div className="mr-2">{children ? children : <Facebook size={20} />}</div>
                <span className='px-1.5 font-kantumruyPro'>{text ? text : `Facebook`}</span>
            </button>
        </>
    )
}

export default ButtonIcon