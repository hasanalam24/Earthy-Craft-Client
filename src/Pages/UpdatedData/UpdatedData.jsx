import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedData = () => {
    const updated = useLoaderData()
    const { _id, itemName, subCategory, image, shortDescription, price, rating, customization, processingTime, stockStatus } = updated


    const handleUpdated = e => {

        e.preventDefault()
        const form = e.target
        const itemName = form.item_name.value
        const subCategory = form.subCategory.value
        const image = form.image.value
        const shortDescription = form.short_description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value

        const processingTime = form.processing_time.value
        const stockStatus = form.stockStatus.value

        const updatedItemCart = { itemName, subCategory, image, shortDescription, price, rating, customization, processingTime, stockStatus }

        console.log(updatedItemCart)

        fetch(`http://localhost:5000/addcraft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItemCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    Swal.fire({
                        title: "success!",
                        text: "Your Item Updated Successfully",
                        icon: "success",
                        confirmButtonText: 'Ok'
                    });
                }
            })
    }
    return (
        <div className=" relative">
            <Helmet>
                <title>EP || Updated Craft</title>

            </Helmet>
            <div>
                <img className='w-full h-[700px]' src="https://i.ibb.co/g9sdLg6/john-wilson-n-Qtuv9-JTz-Ys-unsplash.jpg" alt="" />
            </div>
            <div className=" w-[90%] mx-auto flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shrink-0 shadow-2xl">
                <div className="text-center">
                    <h1 className="text-5xl text-white font-bold">Updated Craft Items</h1>

                </div>
                <div className="">
                    <form onSubmit={handleUpdated} className="card-body">
                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Item Name</span>
                                </label>
                                <input name="item_name" type="text" defaultValue={itemName} placeholder="Item Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Price</span>
                                </label>
                                <input name="price" type="text" defaultValue={price} placeholder="Price" className="input input-bordered w-full" required />

                            </div>

                        </div>
                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">ImageURL</span>
                                </label>
                                <input name="image" type="text" defaultValue={image} placeholder="ImageURL" className="input input-bordered w-full" required />

                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Processing Time</span>
                                </label>
                                <input name="processing_time" type="text" defaultValue={processingTime} placeholder="Processing Time" className="input input-bordered w-full" required />

                            </div>
                        </div>
                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">

                                <select className=' border-2 p-3 rounded-lg mt-5 w-full' name="subCategory" id="">
                                    <option selected>{subCategory}</option>
                                    <option value="Landscape Painting">Landscape Painting</option>
                                    <option value="Portrait Drawing">Portrait Drawing</option>
                                    <option value="Watercolour Painting">Watercolour Painting</option>
                                    <option value="Oil Painting">Oil Painting </option>
                                    <option value="Charcoal Sketching">Charcoal Sketching</option>
                                    <option value="Cartoon Drawing">Cartoon Drawing:</option>
                                </select>

                            </div>
                            <div className="flex-1">
                                <select className=' border-2 p-3 rounded-lg mt-5 w-full' name="rating" id="">
                                    <option selected>{rating}</option>
                                    <option value="1.0">1.0</option>
                                    <option value="2.0">2.0</option>
                                    <option value="3.0">3.0</option>
                                    <option value="4.0">4.0</option>
                                    <option value="5.0">5.0</option>

                                </select>

                            </div>
                        </div>

                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">
                                <select className=' border-2 p-3 rounded-lg mt-5 w-full' name="customization" id="">
                                    <option>{customization}</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>

                                </select>
                            </div>
                            <div className="flex-1">
                                <select className=' border-2 p-3 rounded-lg mt-5 w-full' name="stockStatus" id="">
                                    <option>{stockStatus}</option>
                                    <option value="In Stock">InStock</option>
                                    <option value="Made in Order">Made in Order</option>

                                </select>
                            </div>
                        </div>

                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Short Description</span>
                                </label>
                                <input name="short_description" type="text" defaultValue={shortDescription} placeholder="Short Description" className="input input-bordered w-full" required />

                            </div>
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Updated</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedData;