import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/ListedBooks">Listed Books</NavLink></li>
                        <li><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact us</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl text-green-800">BookWorm</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/ListedBooks">Listed Books</NavLink></li>
                    <li><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-400">Sign In</a>
                <a className="btn bg-cyan-300 ml-5">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;