import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllCraftsItems = () => {

    const allCrafts = useLoaderData()
    // console.log(allCrafts)
    return (
        <div className="">
            <Helmet>
                <title>EP || All Craft Items</title>

            </Helmet>
            <div className="overflow-x-auto ">
                <table className="table w-[90%] mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Item Name</th>
                            <th>Rating</th>
                            <th>Stock Status</th>
                            <th>Info More</th>
                        </tr>
                    </thead>
                    {
                        allCrafts.map(craft => <tbody key={craft._id}>
                            <tr className="bg-base-200">
                                <th>
                                    <img className="w-[30px] h-[30px]" src={craft.image} alt="" />
                                </th>
                                <td>{craft.itemName}</td>
                                <td>{craft.rating}</td>
                                <td>{craft.stockStatus}</td>
                                <td>
                                    <Link to={`/viewDetails/${craft._id}`}>
                                        <h3 className="text-purple-700">View Details</h3>
                                    </Link>
                                </td>
                            </tr>
                            <br />
                        </tbody>)
                    }

                </table>
            </div>

            {/* table */}


        </div>
    );
};

export default AllCraftsItems;