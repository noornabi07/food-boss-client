import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDelete = user => {
        console.log(user);
    }

    return (
        <div className='w-full p-5'>
            <Helmet>
                <title>Food Boss || All Users</title>
            </Helmet>
            <h1 className='text-2xl font-bold text-white text-center mb-4'>Total Users:     {users.length}</h1>

            {/* table this here */}
            <div className="overflow-x-auto border">
                <table className="table ">
                    {/* head */}
                    <thead className='text-green-500 text-lg font-semibold'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user === 'admin' ? 'Admin' :

                                            <button className='btn btn-sm btn-ghost'>
                                                <FaUserShield className='text-2xl'></FaUserShield>
                                            </button>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(user)} className='btn btn-sm btn-ghost'><FaTrashAlt className='text-xl'></FaTrashAlt></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;