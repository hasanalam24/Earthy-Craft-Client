import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";


const ViewDetails = () => {
    const viewDetailData = useLoaderData()
    const { itemName, subCategory, image, shortDescription, price, rating, customization, processingTime, stockStatus } = viewDetailData

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className=" bg-base-100 shadow-xl flex flex-col lg:flex-row gap-5 p-8">
            <Helmet>
                <title>EP || View Details</title>

            </Helmet>
            <div className="flex-1">
                <figure><img className="w-full h-[400px]" src={image} alt="" /></figure>
            </div>
            <div className="space-y-2 flex-1">
                <h2 className="text-xl font-semibold"><span className="opacity-75">Name:</span> <span className="text-purple-600">{itemName}</span></h2>
                <p className="text-lg "><span className="opacity-75">Category:</span> <span className="text-cyan-500">{subCategory}</span></p>
                <div className="flex gap-5">
                    <p className="font-medium opacity-80">Price: <span className="text-orange-900 font-medium">{price}</span> </p>
                    <p className="font-medium opacity-80">Ratings: <span className="text-orange-900 font-medium">{rating}</span> </p>
                </div>
                <div className="flex gap-5">
                    <p className="font-medium opacity-80">Customization: <span className="text-green-500
 font-medium">{customization}</span> </p>
                    <p className="font-medium opacity-80">Processing Time: <span className="text-green-500
 font-medium">{processingTime}</span> </p>
                </div>
                <p className="font-medium opacity-80">Description: {shortDescription}</p>
                <p className="font-medium opacity-80">Stock Status: <span className="text-green-600">{stockStatus}</span></p>
                <div className="card-actions justify-end">
                    <button onClick={handleBack} className="btn btn-secondary">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;