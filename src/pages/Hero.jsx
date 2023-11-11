import React from 'react'

function HeroPage() {
    const heroData = {
        title: "សិក្សាពីមូលដ្ឋានគ្រឹះនៃការសរសេរកូដ ជាភាសាខ្មែរ",
        subtitle: "ជាមួយភាសាកូដ និងជំនាញដែលពេញនិយមបំផុតមានដូចជា HTML, CSS, JavaScript, React, Frontend and JavaScript algorithms & data structures។",
        btnText: "Get Start",
        image: "https://www.pngmart.com/files/22/Web-Designing-PNG-Pic.png"
    }
    return (
        <>
            <section className="lg:h-[415px] py-12 relative">
                <div className="h-full relative container">
                    <div className="py-5 h-full">
                        <h1 className="text-2xl max-w-[60%] text-white font-kantumruyPro">{heroData.title}</h1>
                        <p className="text-white max-w-[60%] text-[18px] font-kantumruyPro">{heroData.subtitle}</p>
                        <button className="px-5 py-2 mt-5 m-auto font-kantumruyPro items-center rounded-md text-white bg-[#1075bc] hover:bg-[#0c65a4]">{heroData.btnText}</button>
                    </div>
                    <div className="lg:absolute lg:right-[50px] lg:top-0 xl:absolute xl:right-[50px] xl:top-0 mx-auto h-full overflow-hidden">
                        <img src={heroData.image} alt="" className="xl:h-[100%] lg:w-[350px] rounded-md" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroPage