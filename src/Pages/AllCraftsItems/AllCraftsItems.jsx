import { Link, useLoaderData } from "react-router-dom";

const AllCraftsItems = () => {

    const allCrafts = useLoaderData()
    // console.log(allCrafts)
    return (
        <div className="">

            <div className="overflow-x-auto">
                <table className="table">
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
                                    <img className="w-[20px] h-[20px]" src={craft.image} alt="" />
                                </th>
                                <td>{craft.itemName}</td>
                                <td>{craft.rating}</td>
                                <td>{craft.stockStatus}</td>
                                <td>
                                    <Link>
                                        <button className="btn btn-secondary">View Details</button>
                                    </Link>
                                </td>
                            </tr>
                            <div className="divider"></div>
                        </tbody>)
                    }

                </table>
            </div>

            {/* table */}


        </div>
    );
};

export default AllCraftsItems;