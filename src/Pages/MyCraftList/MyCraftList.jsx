// import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCraftList = () => {

    const { user } = useContext(AppContext) || {}
    const [myCartData, setMyCartData] = useState([])

    console.log(myCartData)


    useEffect(() => {
        fetch(`http://localhost:5000/myCart/${user?.email}`)
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

                fetch(`http://localhost:5000/addcraft/${id}`, {
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
            <h1>My all Craft List</h1>

            {
                myCartData.map(cartData => <div key={cartData._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={cartData?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cartData.itemName}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions flex gap-3">
                            <button onClick={() => handleDeleted(cartData._id)} className="btn btn-primary">Delete</button>
                            <Link to={`/updatedInfo/${cartData._id}`}>
                                <button className="btn btn-primary">Updated</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCraftList;