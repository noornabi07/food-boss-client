import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../Hooks/UseMenu';
import { FaTrashAlt } from 'react-icons/fa';
import { BiEdit } from 'react-icons/Bi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
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
                <title>Food Boss | Manage Items</title>
            </Helmet>
            <SectionTitle heading="Manage Items" subHeading="Hurry Up"></SectionTitle>

            {/* manage all items table */}
            <div className="overflow-x-auto border">
                <table className="table text-center">
                    {/* head */}
                    <thead className='font-semibold'>
                        <tr className='text-lg text-orange-400'>
                            <th>#</th>
                            <th>Item</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-white text-center'>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>{item.category}</td>
                                <td>$ {item.price}</td>
                                <td><button className='btn btn-sm text-green-500 btn-ghost'><BiEdit className='text-xl'></BiEdit></button></td>

                                <td><button onClick={() => handleDelete(item)} className='btn btn-sm btn-ghost'><FaTrashAlt className='text-xl text-red-500'></FaTrashAlt></button> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;