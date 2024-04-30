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

            {
                myCartData.map(cartData => <div key={cartData._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={cartData?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {cartData.itemName}</h2>
                        <p>Price:{cartData.price}</p>
                        <div className="flex gap-5">
                            <p className="font-medium opacity-80">Price: <span className="text-orange-900 font-medium">{cartData.price}</span> </p>
                            <p className="font-medium opacity-80">Ratings: <span className="text-orange-900 font-medium">{cartData.rating}</span> </p>
                        </div>
                        <div className="flex gap-5">
                            <p className="font-medium opacity-80">Customization: <span className="text-green-500
 font-medium">{cartData.customization}</span> </p>

                        </div>

                        <p className="font-medium opacity-80">Stock Status: <span className="text-green-600">{cartData.stockStatus}</span></p>
                        <button onClick={() => handleDeleted(cartData._id)} className="btn btn-primary">Delete</button>
                        <Link to={`/updatedInfo/${cartData._id}`}>
                            <button className="btn btn-primary">Updated</button>
                        </Link>
                    </div>
                </div>
                )
            }
        </div >
    );
};

export default MyCraftList;