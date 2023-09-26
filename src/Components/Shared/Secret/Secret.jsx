import React from 'react';
import useCarts from '../../../Hooks/useCarts';

const Secret = () => {
    const [cart] = useCarts();
    console.log(cart);
    console.log("How are you mom");
   return (
        <div>
            <h1>This is secret page here...</h1>
        </div>
    );
};

export default Secret;