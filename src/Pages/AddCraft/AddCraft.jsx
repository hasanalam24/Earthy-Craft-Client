import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AppContext } from '../../firebase/AuthProvider';


const AddCraft = () => {

    const { user } = useContext(AppContext)

    const handleAddCraft = e => {
        e.preventDefault()
        const form = e.target
        const itemName = form.item_name.value
        const subCategory = form.subcategory_name.value
        const image = form.image.value
        const shortDescription = form.short_description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const email = form.email.value
        const userName = form.user_name.value

        const addCraftValue = { itemName, subCategory, image, shortDescription, price, rating, customization, email, userName }

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
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content  w-[90%] mx-auto flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add Art And Craft Items</h1>

                </div>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddCraft} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input name="item_name" type="text" placeholder="Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <input name="subcategory_name" type="text" placeholder="Subcategory Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ImageURL</span>
                            </label>
                            <input name="image" type="text" placeholder="ImageURL" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input name="short_description" type="text" placeholder="Short Description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name="price" type="text" placeholder="Price" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input name="rating" type="text" placeholder="Rating" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input name="customization" type="text" placeholder="YES or NO" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name="user_name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />

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