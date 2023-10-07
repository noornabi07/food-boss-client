import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCarts from '../../../Hooks/useCarts';

// TODO: Provide publishable keys
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

const Payment = () => {
    const [cart] = useCarts();

    const total = cart.reduce( (sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    
    return (
        <div className='w-full'>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;