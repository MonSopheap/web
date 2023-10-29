import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

function ModalMessage({ open, onClose, children }) {
    return (
        <>
            <div onClick={() => { }} className={`fixed p-8 inset-0 flex justify-center items-center transistion-colors ${open ? "visible bg-black/50" : "invisible"}`}>

                <div className={`bg-[#013340] text-white rounded-md min-w-[60%] min-h-[70%] shadow p-6 transition-al ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                    <button onClick={onClose} className="absolute top-4 right-4 rounded-lg text-white-50">
                        <AiOutlineClose className="text-white" />
                    </button>
                    {children}
                </div>

            </div>
        </>
    )
}

export default ModalMessage