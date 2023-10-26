import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';

function FAQ() {
    const faqList = [
        {
            title: "តើមានបង្រៀនតាម Online ដែរឬទេ?",
            description: "បាទ! សម្រាប់ការរៀន Online ក្រុមការងារយើងខ្ញុំកំពុងរៀបចំបើកវគ្គ Online តាម Zoom, Google Meeting ។ "
        },
        {
            title: "ខ្ញុំអត់ធ្លាប់សរសេរកូដពីមុនសោះ តើខ្ញុំអាចរៀនបានអត់?",
            description: "បាទបាន, Website នេះគឺសម្រាប់អ្នកចាប់ផ្តើមដំបូងដែលមិនធ្លាប់សរសេរកូដពីមុនសោះ ឬមានបទពិសោធន៍តិចតួច។ វាក៏សម្រាប់អ្នកដែលចេះសរសេរកូដស្រាប់ ប៉ុន្តែចង់រៀនបច្ចេកវិទ្យាថ្មី ឬចង់រៀនបន្ថែម។"
        },
        {
            title: "តើនៅក្នុង Website មានមេរៀនអ្វីខ្លះ?",
            description: "Website នេះមានមេរៀន និង Projects ថ្មីៗជាច្រើនដែលត្រូវដាក់ចូលជាបន្តបន្ទាប់ដូចជា Python, HTML, CSS, 15 Frontend Questions, JavaScript, React, Angular CLI និងអ្វីផ្សេងៗជាច្រើនទៀត។"
        },

        {
            title: "តើអ្នកបង្កើត Website នេះគឺជានរណា?",
            description: "បាទ! អ្នកបង្កើត Website នេះគាត់គឺជា Software Engineer ម្នាក់ដែលស្រលាញ់ការសរសេរកូដ និងសម្រេចចិត្តបង្កើត TnakRean នេះឡើងដើម្បីនាំផ្លូវអ្នកដែលចង់រៀនកូដអោយឆ្ពោះទៅរកភាពជោគជ័យក្នុងវិស័យការងារនៅក្នុងប្រទេសកម្ពុជា។"
        }
    ];
    return (
        <>
            <div className="text-center mb-10">
                <h1 className="text-2xl text-white font-kantumruyPro mb-2">Frequently Asked Questions<sup className="text-yellow-500">FAQ</sup></h1>
                <p className="text-white text-xl font-kantumruyPro">សំណួរខាងក្រោមដែលភាគច្រើនសួរមកកាន់ TnakRean.com!</p>
            </div>
            <div className="grid gap-8 sm:gap-5 md:gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                {
                    faqList.map((data, index) => (
                        <div className="grid-items">
                            <div className="w-full h-full overflow-hidden bg-secondary rounded-md select-none">
                                <div className="flex justify-between items-center px-5 pt-5 pb-4">
                                    <h1 className='text-white text-xl font-kantumruyPro'>{data.title}</h1>
                                    <AiOutlineQuestionCircle className="text-2xl text-blue-500" />
                                </div>
                                <div className="w-full flex justify-start items-start px-5 pb-5">
                                    <p className="text-md text-white font-kantumruyPro">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default FAQ