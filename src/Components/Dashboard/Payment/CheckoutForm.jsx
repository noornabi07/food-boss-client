import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useEffect } from 'react';
import { UserContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { data } from 'autoprefixer';

const CheckoutForm = ({ price, cart }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(UserContext);
    const [processign, setProcessign] = useState(false)


    useEffect(() => {
        if(price > 0 ){
            axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setSuccess('');
            setError(error.message);
        }
        else {
            setError('');
            // setSuccess('Your Payment Successfully')
            // console.log(paymentMethod);
        }

        setProcessign(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        console.log("payment intent response---", paymentIntent);

        setProcessign(false)

        if (paymentIntent.status === 'succeeded') {
            setError('')
            setSuccess('Your Payment Successfully');
            // TODO: The next steps 
            const payments = {
                email: user?.email,
                trasectionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                status: 'service panding',
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                itemsName: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payments)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display sweetalert
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your payment successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        }
    }


    return (
        <form onSubmit={handleSubmit} className='w-2/3 m-5 border-2 border-purple-800 p-10 mx-auto'>
            <p className='text-center text-red-500 text-xl mb-5 font-semibold'>{error}</p>
            <p className='text-center text-lime-500 text-xl mb-5 font-semibold'>{success}</p>
            <div className='border p-4 rounded-lg'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                // color: '#424770',
                                color: 'white',
                                '::placeholder': {
                                    color: 'lime',
                                },
                            },
                            invalid: {
                                // color: '#9e2146',
                                color: 'white'
                            },
                        },
                    }}
                />
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-block  btn-success' type="submit" disabled={!stripe || !clientSecret || processign}>
                    Payment
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;