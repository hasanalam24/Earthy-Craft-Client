import { FaArrowUpRightDots } from "react-icons/fa6";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { CgTally } from "react-icons/cg";
const WhoChoise = () => {
    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-4xl mt-10 text-center mb-10">Who Choose Us?</h1>
            <div className="text-xl text-center">
                <div className="">
                    <FaArrowUpRightDots className="text-center text-2xl"></FaArrowUpRightDots>
                </div>
                <h1>Experienced</h1>
                <p>We have over 20 years experience providing expert financial advice.</p>
            </div>
            <div>
                <RiBarChartGroupedLine></RiBarChartGroupedLine>
                <h1>Vibrant</h1>
                <p>A young, enthusiastic team of advisors are always here to help.</p>
            </div>
            <div>
                <CgTally></CgTally>
                <h1>Professional</h1>
                <p>Our financial specialists ensure you get the optimum results.</p>
            </div>
        </div>
    );
};

export default WhoChoise;