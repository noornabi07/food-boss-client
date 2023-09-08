import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white font-semibold absolute right-5 top-5 p-1 rounded-lg'>${price}</p>
            <div className="card-body">
                <h2 className="text-center font-bold text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className='py-4 px-8 font-bold border-b-4 border-slate-900 shadow-2xl rounded-xl hover:bg-slate-900 hover:text-white mt-5'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;