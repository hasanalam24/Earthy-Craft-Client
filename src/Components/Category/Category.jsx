import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const Category = () => {
    const categoryItems = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Category</title>
            </Helmet>
            {
                categoryItems.map(item => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="space-y-2 flex-1">
                            <h2 className="text-xl font-semibold"><span className="opacity-75">Name:</span> <span className="text-purple-600">{item.itemName}</span></h2>
                            <p className="text-lg "><span className="opacity-75">Category:</span> <span className="text-cyan-500">{item.subCategory}</span></p>
                            <div className="flex gap-5">
                                <p className="font-medium opacity-80">Price: <span className="text-orange-900 font-medium">{item.price}</span> </p>
                                <p className="font-medium opacity-80">Ratings: <span className="text-orange-900 font-medium">{item.rating}</span> </p>
                            </div>
                            <div className="flex gap-5">

                                <p className="font-medium opacity-80">Processing Time: <span className="text-green-500
 font-medium">{item.processingTime}</span> </p>
                            </div>
                            <p className="font-medium opacity-80">Description: {

                                item.shortDescription.slice(0, 50)
                            }.....</p>

                            <div className="card-actions justify-end">
                                <Link to={`/viewDetails/${item._id}`}>
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
                    </div>
                </div>)
            }
        </div>
    );
};

export default Category;