import { useContext, useState } from "react";
import { AppContext } from "../../firebase/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { SignInUser } = useContext(AppContext)
    const [errorMessage, setErrorMessager] = useState()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        SignInUser(email, password)
            .then((result) => {
                console.log(result.user)

                toast("Login Successfully")
            })
            .catch(() => {
                toast.error("Please Enter a Valid Email or Password")
            })

    }

    return (
        <div className=" min-h-screen bg-base-200 mb-8">
            <div className="hero-content flex-col w-[85%] lg:w-1/2 mx-auto">
                <div className="text-center lg:text-left mt-5">
                    <h1 className="text-3xl lg:text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100 p-6">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;