import React from "react";
import { useNavigate } from "react-router-dom";


const PageNotFound = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    };

    return (
        <div className="h-screen w-full flex">
            <div className="flex flex-col items-center justify-center m-auto rounded-md dark:border">
                <h1 className="font-semibold text-xl mt-2 text-white">404. That’s an error.</h1>
                <p className="text-white">
                    The requested URL was not found on this server. That’s all we know.
                </p>
                <button
                    onClick={() => handleClick()}
                    className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm mt-3 mb-1">
                    Back to home
                </button>
            </div>
        </div>
    );
}

export default PageNotFound;