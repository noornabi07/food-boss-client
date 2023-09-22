import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(UserContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/">
            <button className="flex gap-1 items-center">
                <FaShoppingCart className='text-2xl'></FaShoppingCart>
                <div className="badge -mt-5 -ml-5 badge-secondary">+99</div>
            </button>
        </Link></li>

        {
            user ? <>
                <li onClick={handleLogOut}><Link>LogOut</Link></li>
            </> :
                <><li><Link to="/login">Login</Link></li></>
        }
    </>

    return (
        <div className="navbar fixed text-white z-10 bg-slate-700 bg-opacity-50 max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Food Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

            <div className="avatar navbar-end">
                {user && <p className='text-xs mr-3 text-green-400'>{user?.displayName}</p>}
                <div className="w-12">
                    {user && <img src={user?.photoURL} />}
                </div>

            </div>
        </div>
    );
};

export default Navbar;