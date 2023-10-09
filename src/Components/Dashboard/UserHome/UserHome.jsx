import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../provider/AuthProvider';

const UserHome = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1 className='text-3xl font-bold text-white'>Welcome Back, <span className='text-orange-500'>{user?.displayName}</span></h1>
        </div>
    );
};

export default UserHome;