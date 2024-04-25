import { useContext } from "react";
import { AppContext } from "../../firebase/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Login = () => {

    const { SignInUser, googleLogin, githubLogin } = useContext(AppContext)

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

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGitgubLogin = () => {
        githubLogin()
            .then(result => {
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
                                <a className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                    <div className="flex gap-5 items-center p-4">

                        <div onClick={() => handleGoogleLogin()} className="w-10 h-10 bg-gray-100 rounded-xl">
                            <img src="https://i.ibb.co/cLDFfkY/google-logo.png" alt="" />

                        </div>

                        <div onClick={() => handleGitgubLogin()} className="w-10 h-10 bg-gray-100 rounded-xl">
                            <img src="https://i.ibb.co/Mp0sLB2/github-logo.png" alt="" />

                        </div>

                    </div>
                    <div className="flex gap-2 mt-3 mx-auto">
                        <p>Don't have an account? Please</p>
                        <Link className="text-green-600 font-bold" to="/register">
                            Register
                        </Link>
                        <p>here</p>
                    </div>
                </div>


            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;