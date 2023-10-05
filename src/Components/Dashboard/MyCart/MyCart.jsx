import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCarts from '../../../Hooks/useCarts';
import { AiFillDelete } from 'react-icons/Ai';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MyCart = () => {
    const [cart, refetch] = useCarts();
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${item._id}`, {
                method: 'DELETE',
             })
             .then(res => res.json())
             .then(data => {
                if(data.deletedCount> 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }

    return (
        <div className='w-full p-5'>
            <Helmet>
                <title>Food Boss | My Cart</title>
            </Helmet>
            <div className='flex justify-evenly text-lg font-bold text-white'>
                <h1>Total Items: {cart.length}</h1>
                <h1>Total Prices: ${total}</h1>
                <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">Pay</button></Link>
            </div>

            <div className="overflow-x-auto border mt-5">
                <table className="table">
                    {/* head */}
                    <thead className='font-semibold'>
                        <tr className='text-lg text-green-500'>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td><button onClick={() => handleDelete(item)} className='btn btn-sm btn-ghost'><FaTrashAlt className='text-xl'></FaTrashAlt></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyCart;