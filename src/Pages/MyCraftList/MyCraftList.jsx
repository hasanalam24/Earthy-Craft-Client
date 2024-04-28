// import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../firebase/AuthProvider";


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

    return (
        <div>
            <h1>My all Craft List</h1>

            {
                myCartData.map(cartData => <div key={cartData._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={cartData?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCraftList;