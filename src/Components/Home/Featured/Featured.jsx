import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed'>
            <SectionTitle subHeading="Check It Out" heading="From Our Menu"></SectionTitle>
            <div className='md:flex justify-center items-center gap-8 px-20 pb-10'>
                <img className='w-1/3 shadow-lg rounded-lg' src={featured} alt="" />
                <div>
                    <p>March 20, 2030</p>
                    <p className='uppercase font-semibold'>Where Can I get Some?</p>
                    <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea quibusdam perferendis pariatur nulla dignissimos repellendus expedita deleniti soluta quo aliquid non, illum eos fugit atque? Mollitia ad quae voluptates non beatae, nesciunt consequuntur delectus omnis doloribus,</p>
                    <button className='py-2 px-6 font-bold border-b-4 border-yellow-500 shadow-2xl rounded-lg hover:bg-slate-700 hover:text-white mt-2'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;