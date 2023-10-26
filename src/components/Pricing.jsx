import { useState } from "react";
import styles from "../Style";
import { GiCheckMark } from 'react-icons/gi';

const Pricing = () => {
    const [isYearly, setYearly] = useState(false);

    const packages = [
        {
            name: "Monthly",
            price: "8",
            basePrice: "10",
            isBestSeller: false,
            description: "សិក្សាបានរយៈពេល ១ខែ",
            details: [
                { name: "សិក្សាមូលដ្ឋានគ្រឹះ HTML & CSS Course" },
                { name: "សិក្សា JavaScript Course" },
                { name: "សិក្សា JavaScript Array Methods" },
                { name: "សិក្សា JavaScript HTML DOM" },
                { name: "20+ Frontend Questions" },
            ]
        },
        {
            name: "Three Months",
            price: "25",
            basePrice: "30",
            isBestSeller: true,
            description: "សិក្សាបានរយៈពេល ៣ខែ",
            details: [
                { name: "សរុបចូលគម្រោង $8.00" },
                { name: "សិក្សា NodeJs Course" },
                { name: "សិក្សា React Course" },
                { name: "សិក្សា Angular Course" },
            ]
        },
        {
            name: "Yearly",
            price: "90",
            basePrice: "120",
            isBestSeller: false,
            description: "សិក្សាបានរយៈពេល ១ឆ្នាំ",
            details: [
                { name: "សរុបចូលគម្រោង $8.00 & $25.00" },
                { name: "សិក្សា Flutter, Dart Course" },
                { name: "សិក្សា Python Course" },
                { name: "សិក្សា Php Course" },
                { name: "សិក្សា Laravel Course" },
                { name: "សិក្សា PhotoShop Course" },
            ]
        },
    ]
    return (
        <>

            <div className="w-full mx-auto py-10">
                <div className="text-center">
                    <h2 className="md:text-5xl text-3xl font-semibold text-white mb-2">
                        The Ultimate Platform
                    </h2>
                    <p className={`${styles.paragraph} mt-5`}>
                        ជ្រើសរើសរយៈពេលនៃការសិក្សា៖ ១ខែ, ៣ខែ ឬ ១ឆ្នាំ រួចបង់តម្លៃសិក្សាតាមរយៈតេលេក្រាម!
                    </p>
                </div>

                {/* <div className="text-center mt-16">
                        <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                            <span className={`mr-8 text-2xl font-normal text-white font-kantumruyPro ${!isYearly ? "text-blue-500" : ""}`}>ប្រចាំខែ</span>
                            <div className="w-14 h-6 bg-[#013340] rounded-full transition duration-200 ease-in-out">
                                <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-blue-500 ml-8" : "bg-gray-500"}`}></div>
                            </div>
                            <span className={`ml-8 text-2xl font-normal text-white font-kantumruyPro ${isYearly ? "text-blue-500" : ""}`}>ប្រចាំឆ្នាំ</span>
                        </label>
                        <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setYearly(!isYearly)} />
                    </div> */}

                <div className="grid grid-cols-1 gap-8 md:gap-6 sm:gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-16 ">
                    {
                        packages.map((data, index) => (
                            <div className="grid-item" key={index}>
                                <div className="relative bg-[#013340] rounded-md w-full h-full cursor-pointer hover:ring-1 ring-[#61dafb]">
                                    {
                                        data.isBestSeller && <span className="absolute -top-4 right-8 bg-[#ffc403] py-1 px-3 shadow-lg text-md font-semibold rounded-full ml-1" style={{ "boxShadow": "rgb(255, 196, 3) 0px 4px 50px -5px" }}>
                                            Bestseller
                                        </span>

                                    }
                                    <div className="p-5 text-center">
                                        <h1 className="mb-2 text-2xl font-normal text-white">{data.name}</h1>
                                        <p className="mb-3 text-white font-kantumruyPro">
                                            {data.description}
                                        </p>
                                        <div className="w-full">
                                            <span className="text-3xl font-normal mr-1 text-white">$</span>
                                            <span className="text-5xl font-normal text-white">{data.price}</span>
                                            <span className="ml-2 text-gray-500 text-3xl line-through">${data.basePrice}</span>
                                        </div>
                                        <ul className="mt-5">
                                            {
                                                data.details.map((x, i) => (
                                                    <li key={i} className="flex justify-start p-2">
                                                        <GiCheckMark className="text-green-500 text-md" /><span className="text-white font-kantumruyPro pl-2">{x.name}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <button type="button" onClick={() => window.open("https://t.me/abc")} className="flex m-auto font-kantumruyPro items-center mt-5 px-4 py-2 rounded-md text-white bg-[#1075bc] hover:bg-[#0c65a4]">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}


export default Pricing;