import React from 'react'
import { Facebook } from 'react-feather'
import styles from '../Style'

function ButtonIcon({ handleClick, children, text, buttonType, ...props }) {
    return (
        <>
            <button type={buttonType ? buttonType : "button"} onClick={handleClick}
                className={`${styles.buttonDefault}`} {...props}>
                <span style={{ marginRight: "8px" }}>{children ? children : <Facebook size={20} />}</span>
                <span className='px-1.5 font-kantumruyPro'>{text ? text : `Facebook`}</span>
            </button>
        </>
    )
}

export default ButtonIcon