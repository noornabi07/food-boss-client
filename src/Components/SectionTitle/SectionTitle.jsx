import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-10'>
            <p className='text-yellow-600 font-semibold'>---{subHeading}---</p>
            <h1 className='font-semibold text-5xl'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;