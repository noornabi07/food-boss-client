import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaWallet, FaUsers } from 'react-icons/fa';
import { BiMenu, BiSolidContact } from 'react-icons/Bi';
import { AiFillShopping, AiFillBook } from 'react-icons/Ai';
import { ImSpoonKnife } from 'react-icons/Im';
import useCarts from '../../Hooks/useCarts';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCarts();

    // TODO: User load data from databse isAdmin here
    // const isAdmin = false;
    const [isAdmin] = useAdmin();


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-500 flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-white">

                        {
                            isAdmin ? <>
                                {/* This is admin dashboard item */}
                                <li><Link to="/dashboard/userhome"><FaHome></FaHome>Admin Home</Link></li>
                                <li><Link to="/dashboard/addItem"><ImSpoonKnife></ImSpoonKnife>Add Items</Link></li>
                                <li><Link to="/dashboard/manageItems"><BiMenu></BiMenu> Manage Items</Link></li>
                                <li> <Link to="/dashboard/manageBooking"><AiFillBook></AiFillBook> Manage Bookings</Link></li>
                                <li> <Link to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</Link></li>
                            </> : <>


                                {/* This Is normal users dashboard item */}
                                <li><Link to="/dashboard/userhome"><FaHome></FaHome>User Home</Link></li>
                                <li><Link to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</Link></li>
                                <li><Link to="/dashboard/history"><FaWallet></FaWallet> Payment History</Link></li>
                                <li>
                                    <Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart <div className="badge mr-32 badge-secondary">+{cart?.length || 0}</div></Link>

                                </li>

                            </>
                        }



                        <div className="divider"></div>
                        <li><Link to="/"><FaHome></FaHome>HOME</Link></li>
                        <li><Link to="/menu"><BiMenu></BiMenu>MENU</Link></li>
                        <li><Link to="/dashboard/shop"><AiFillShopping></AiFillShopping>SHOP</Link ></li>
                        <li><Link to="/dashboard/contact"><BiSolidContact></BiSolidContact>CONTACT</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;