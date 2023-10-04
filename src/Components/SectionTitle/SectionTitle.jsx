import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-10 md:w-4/12 mx-auto'>
            <p className='text-yellow-600 font-semibold pb-2'>---{subHeading}---</p>
            <h1 className='font-semibold text-green-500 text-4xl uppercase border-y-2 py-3'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;