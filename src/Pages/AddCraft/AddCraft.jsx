import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AppContext } from '../../firebase/AuthProvider';


const AddCraft = () => {

    const { user } = useContext(AppContext)

    const handleAddCraft = e => {
        e.preventDefault()
        const form = e.target
        const itemName = form.item_name.value
        const subCategory = form.subCategory.value
        const image = form.image.value
        const shortDescription = form.short_description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const email = form.email.value
        const userName = form.user_name.value
        const processingTime = form.processing_time.value
        const stockStatus = form.stockStatus.value

        const addCraftValue = { itemName, subCategory, image, shortDescription, price, rating, customization, email, userName, processingTime, stockStatus }

        console.log(addCraftValue)

        fetch('http://localhost:5000/addcraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCraftValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    Swal.fire({
                        title: "success!",
                        text: "Your Art Item Added Successfully",
                        icon: "success",
                        confirmButtonText: 'Ok'
                    });
                }
            })
    }
    return (
        <div className=" relative">
            <div>
                <img className='w-full h-[700px]' src="https://i.ibb.co/g9sdLg6/john-wilson-n-Qtuv9-JTz-Ys-unsplash.jpg" alt="" />
            </div>
            <div className=" w-[90%] mx-auto flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shrink-0 shadow-2xl">
                <div className="text-center">
                    <h1 className="text-5xl text-white font-bold">Add Art And Craft Items</h1>

                </div>
                <div className="">
                    <form onSubmit={handleAddCraft} className="card-body">
                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Item Name</span>
                                </label>
                                <input name="item_name" type="text" placeholder="Item Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Price</span>
                                </label>
                                <input name="price" type="text" placeholder="Price" className="input input-bordered w-full" required />

                            </div>

                        </div>
                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">ImageURL</span>
                                </label>
                                <input name="image" type="text" placeholder="ImageURL" className="input input-bordered w-full" required />

                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Processing Time</span>
                                </label>
                                <input name="processing_time" type="text" placeholder="Processing Time" className="input input-bordered w-full" required />

                            </div>
                        </div>
                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">

                                <select className=' border-2 p-3 rounded-lg mt-5 w-full' name="subCategory" id="">
                                    <option selected disabled>Selected a Category</option>
                                    <option value="LandscapePainting">Landscape Painting</option>
                                    <option value="PortraitDrawing">Portrait Drawing</option>
                                    <option value="WatercolourPainting">Watercolour Painting</option>
                                    <option value="OilPainting">Oil Painting </option>
                                    <option value="CharcoalSketching">Charcoal Sketching</option>
                                    <option value="CartoonDrawing">Cartoon Drawing:</option>
                                </select>

                            </div>
                            <div className="flex-1">
                                <select className=' border-2 p-3 rounded-lg mt-5 w-full' name="rating" id="">
                                    <option selected disabled>Rating</option>
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
                                    <option selected disabled>Customization</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>

                                </select>
                            </div>
                            <div className="flex-1">
                                <select className=' border-2 p-3 rounded-lg mt-5 w-full' name="stockStatus" id="">
                                    <option selected disabled>Stock Status</option>
                                    <option value="InStock">InStock</option>
                                    <option value="Made in Order">Made in Order</option>

                                </select>
                            </div>
                        </div>

                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Short Description</span>
                                </label>
                                <input name="short_description" type="text" placeholder="Short Description" className="input input-bordered w-full" required />

                            </div>
                        </div>
                        <div className='flex gap-5 items-center justify-center'>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" required />

                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Your Name</span>
                                </label>
                                <input name="user_name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" required />

                            </div>

                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Craft</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCraft;