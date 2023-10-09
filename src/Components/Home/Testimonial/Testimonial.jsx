import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://food-boss-server-noornabi07.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section>
            <SectionTitle subHeading="What Our Client Say" heading="Testimonials"></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center text-center justify-center mx-16 my-16'>
                            <Rating style={{maxWidth: 180}} value={review.Rating} readOnly></Rating>
                                <p>{review.details}</p>
                                <h1 className='text-2xl text-orange-400'>{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;