import styles from "../../Style";
import { BsArrowRightCircle } from 'react-icons/bs';
import ButtonIcon from "../../components/ButtonIcon";

const GetStart = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#013340] rounded-xl box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={`${styles.heading2} font-normal`}>តោះចាប់ផ្តើមរៀនឥឡូវនេះជាមួយពួកយើង!</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
                ផ្ដល់ឱ្យអ្នកនូវវគ្គសិក្សាដែលមានគុណភាពល្អជាច្រើន។
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <ButtonIcon handleClick={() => window.open("https://t.me/SopheapZz")} text="Get Started">
                <BsArrowRightCircle />
            </ButtonIcon>
        </div>
    </section>
);

export default GetStart;