import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { BiMenu, BiSolidContact } from 'react-icons/Bi';
import { AiFillShopping } from 'react-icons/Ai';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/"><FaHome></FaHome>User Home</Link></li>
                        <li><Link><FaCalendarAlt></FaCalendarAlt>Reservation</Link></li>
                        <li><Link><FaWallet></FaWallet> Payment History</Link></li>
                        <li><Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
                        <div className="divider"></div>
                        <li><Link to="/"><FaHome></FaHome>HOME</Link></li>
                        <li><Link to="/menu"><BiMenu></BiMenu>MENU</Link></li>
                        <li><Link><AiFillShopping></AiFillShopping>SHOP</Link></li>
                        <li><Link><BiSolidContact></BiSolidContact>CONTACT</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;