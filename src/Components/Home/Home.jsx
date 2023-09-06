import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Sample from './Sample/Sample';
import PopularMenu from './PopularMenu/PopularMenu';
import Phone from '../Phone/Phone';
import Recommends from '../Recommends/Recommends';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Sample></Sample>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;