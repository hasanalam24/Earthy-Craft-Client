import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from "../../firebase/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const [errorMessage, setErrorMessager] = useState()
    const { SignUpUser } = useContext(AppContext)

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        const { email, password, name, photo } = data
        console.log(data)

        if (password.length < 6) {
            setErrorMessager('Password should be at least 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessager('Must have an Uppercase letter in the password')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorMessager('Must have an Lowercase letter in the password')

            return;

        }
        SignUpUser(email, password)
            .then(result => {
                toast("Register Successfully")
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })


    }


    return (
        <div className=" min-h-screen bg-base-200 mb-8">
            <div className="hero-content flex-col w-[85%] lg:w-1/2 mx-auto">
                <div className="text-center lg:text-left mt-5">
                    <h1 className="text-3xl lg:text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100 p-6">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            <span className="text-red-500">{errorMessage}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="PhotoURL" className="input input-bordered" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                    </form>
                    <div className="flex gap-2 mt-3 mx-auto">
                        <p>Already have an account? Please </p>
                        <Link className="text-green-600 font-bold" to="/login">
                            Login
                        </Link>
                        <p>here</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;