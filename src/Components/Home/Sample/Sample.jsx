import React from 'react';
import banner from '../../../assets/home/banner.jpg'

const Sample = () => {
    return (
        <div className='mt-20 relative'>
            <img src={banner} alt="" />
            <div className='absolute top-1/3 left-1/4 p-10 bg-white text-black text-center w-1/2 shadow-xl rounded-lg'>
                <h1 className='text-4xl font-bold'>Food Boss</h1>
                <p className='font-semibold mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aut eveniet soluta repudiandae beatae eum, esse totam voluptatem quos sed perspiciatis minima at cum! Porro repellat quasi fugiat nihil velit!</p>
            </div>
        </div>
    );
};

export default Sample;