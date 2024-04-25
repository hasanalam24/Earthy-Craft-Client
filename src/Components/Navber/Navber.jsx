import { Link } from "react-router-dom";


const Navber = () => {
    const navLinks = <>

        <Link to="/"> <li><a>Home</a></li></Link>
        <Link to="/allartcraft"> <li><a>All Art & Craft Items</a></li></Link>
        <Link to="/addcraft"> <li><a>Add Craft Item</a></li></Link>
        <Link to="/mycraftlist"> <li><a>My Art & Craft List</a></li></Link>


    </>
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
                <div className="flex items-center justify-center">
                    <img className="w-[80px] h-[60px]" src="https://i.ibb.co/YdzGHwB/Logo.png" alt="" />
                    <a className="btn btn-ghost text-xl">Earthy Craft</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}


                </ul>
            </div>
            <div className="navbar-end flex gap-3 ">
                <Link to="/login">
                    <button className="btn btn-primary">Login</button>
                </Link>
                <Link to="/register">
                    <button className="btn btn-secondary">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Navber;