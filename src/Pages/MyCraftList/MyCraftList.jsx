// import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const MyCraftList = () => {

    const { user } = useContext(AppContext) || {}
    const [myCartData, setMyCartData] = useState([])

    console.log(myCartData)


    useEffect(() => {
        fetch(`https://earthy-crafts-server.vercel.app/myCart/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCartData(data)
                console.log(data)
            })
    }, [user])


    const handleDeleted = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://earthy-crafts-server.vercel.app/addcraft/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>EP || My Craft List</title>

            </Helmet>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto">
                {
                    myCartData.map(cartData => <div key={cartData._id} className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img className="w-[400px] h-[200px]" src={cartData?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {cartData.itemName}</h2>

                            <div className="flex gap-5">
                                <p className="font-medium opacity-80">Price: <span className="text-orange-900 font-medium">{cartData.price}</span> </p>
                                <p className="font-medium opacity-80">Ratings: <span className="text-orange-900 font-medium">{cartData.rating}</span> </p>
                            </div>
                            <div className="flex gap-5">
                                <p className="font-medium opacity-80">Customization: <span className="text-green-500
 font-medium">{cartData.customization}</span> </p>
                                <p className="font-medium opacity-80">Stock Status: <span className="text-green-600">{cartData.stockStatus}</span></p>
                            </div>


                            <button onClick={() => handleDeleted(cartData._id)} className="text-white btn bg-red-600">Delete</button>
                            <Link to={`/updatedInfo/${cartData._id}`}>
                                <button className="btn btn-secondary w-full">Updated</button>
                            </Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </div >
    );
};

export default MyCraftList;