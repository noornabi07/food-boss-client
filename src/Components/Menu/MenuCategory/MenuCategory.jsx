import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    return (
        <div className='mt-10'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-6 mt-12'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`}>
                    <button className='py-4 px-8 font-bold border-b-4 border-slate-900 shadow-2xl rounded-xl hover:bg-slate-900 hover:text-white mt-5'>Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;