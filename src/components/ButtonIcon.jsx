import React from 'react'
import { Facebook } from 'react-feather'
import styles from '../Style'

function ButtonIcon({ handleClick, children, text, buttonType, ...props }) {
    console.log(props)
    return (
        <>
            <button type={buttonType ? buttonType : "button"} onClick={handleClick}
                className={`${styles.buttonDefault}`} {...props}>
                <div style={{ marginRight: "3px", color: "white" }}>{children ? children : <Facebook size={20} />}</div>
                <span className='px-1.5 font-kantumruyPro text-white'>{text ? text : "Facebook"}</span>
            </button>
        </>
    )
}

export default ButtonIcon