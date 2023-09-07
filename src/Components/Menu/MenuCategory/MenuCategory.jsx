import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items, img, title}) => {
    return (
        <div className='mt-10'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-6 mt-12'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;