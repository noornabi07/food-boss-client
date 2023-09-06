import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

import pizza from '../../assets/menu/pizza-bg.jpg'
import salads from '../../assets/menu/salad-bg.jpg'
import shoup from '../../assets/menu/soup-bg.jpg'

const Recommends = () => {
    return (
        <div>
            <SectionTitle subHeading="Should Try" heading="Recommends"></SectionTitle>
            <div className='flex justify-between'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={pizza} alt="Shoes" /></figure>
                    <div className="py-4 text-center">
                        <h2 className="text-center font-bold text-2xl">
                            Caeser Pizza
                        </h2>
                        <p className='text-lg text-black'>If a dog chews shoes whose shoes does he choose? You can get this buy with offer</p>
                        <button className='py-4 px-8 font-bold border-b-4 border-yellow-500 shadow-2xl rounded-xl hover:bg-slate-700 hover:text-white mt-5'>Add To Cart</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={salads} alt="Shoes" /></figure>
                    <div className="py-4 text-center">
                        <h2 className="text-center font-bold text-2xl">
                            Caeser Salads
                        </h2>
                        <p className='text-lg text-black'>If a dog chews shoes whose shoes does he choose? You can get this buy with offer</p>
                        <button className='py-4 px-8 font-bold border-b-4 border-yellow-500 shadow-2xl rounded-xl hover:bg-slate-700 hover:text-white mt-5'>Add To Cart</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={shoup} alt="Shoes" /></figure>
                    <div className="py-4 text-center">
                        <h2 className="text-center font-bold text-2xl">
                            Caeser Shoup
                        </h2>
                        <p className='text-lg text-black'>If a dog chews shoes whose shoes does he choose? You can get this buy with offer</p>
                        <button className='py-4 px-8 font-bold border-b-4 border-yellow-500 shadow-2xl rounded-xl hover:bg-slate-700 hover:text-white mt-5'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommends;