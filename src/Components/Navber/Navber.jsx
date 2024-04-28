import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../firebase/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import './Navber.css'

const Navber = () => {

    const { user, SignOutUser } = useContext(AppContext)

    const navLinks = <>

        <NavLink to="/" className="ml-6 p-1">
            <a className="text-lg font-semibold">Home</a>
        </NavLink>

        <NavLink to="/allartcraft" className="ml-6 p-1">
            <a className="text-lg font-semibold ">All Art & Craft Items</a>
        </NavLink>

        {
            user && <>
                <NavLink to="/addcraft" className="ml-6 p-1">
                    <a className="text-lg font-semibold ">Add Craft Item</a>
                </NavLink>

                <NavLink to="/mycraftlist" className="ml-6 p-1">
                    <a className="text-lg font-semibold">My Craft List</a>
                </NavLink>
            </>
        }


    </>


    const handleSignOut = () => {
        SignOutUser()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}

                    </ul>
                </div>
                <div className="flex items-center justify-center ">
                    <img className="hidden lg:flex lg:w-[80px] h-[60px]" src="https://i.ibb.co/YdzGHwB/Logo.png" alt="" />
                    <a className="btn -ml-4 btn-ghost text-xl">Earthy Paint</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}


                </ul>
            </div>
            <div className="navbar-end flex gap-3 ">
                {
                    user ? <div className="flex gap-3 items-center justify-center">

                        <img data-tooltip-id="my-tooltip"
                            data-tooltip-content={user.displayName}
                            data-tooltip-place="left" className="w-[45px] h-[45px] rounded-full" src={user.photoURL} alt="" />
                        <Tooltip id="my-tooltip" />
                        <button onClick={handleSignOut} className="btn btn-secondary">Sign Out</button>
                    </div>
                        :
                        <div>
                            <Link to="/login">
                                <button className="btn btn-primary">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn btn-secondary">Register</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navber;