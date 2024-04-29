// Import Swiper styles

import { Link } from "react-router-dom";

const HomeCard = ({ craft }) => {
    console.log(craft)
    return (
        <div>
            <div className="p-8 mb-5 flex gap-5 bg-base-100 shadow-xl">
                <div className="flex flex-col gap-5">
                    <figure><img className="w-[250px] h-[100px]" src={craft.image} alt="Shoes" /></figure>
                    <div className="">
                        <Link to={`/viewDetails/${craft._id}`}>
                            <a className="relative p-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0  duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">View Details</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-medium">{craft.subCategory}</h2>
                    <div className="">
                        <p>Rating: <span className="text-green-600 font-medium">{craft.rating}</span></p>
                        <p>StockStatus: <span className="text-purple-600 font-medium">{craft.stockStatus}</span></p>
                    </div>
                    <p><span className="font-medium">Description:</span> {

                        craft.shortDescription.slice(0, 50)

                    }....</p>

                </div>
            </div>

        </div>
    );
};

export default HomeCard;