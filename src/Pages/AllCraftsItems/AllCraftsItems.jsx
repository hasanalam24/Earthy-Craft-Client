import { useLoaderData } from "react-router-dom";

const AllCraftsItems = () => {

    const allCrafts = useLoaderData()
    // console.log(allCrafts)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {
                allCrafts.map(craft =>
                    <div key={craft._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-[385px] h-[250px]" src={craft.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{craft.subCategory}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default AllCraftsItems;