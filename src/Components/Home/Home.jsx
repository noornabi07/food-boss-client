import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Sample from './Sample/Sample';
import PopularMenu from './PopularMenu/PopularMenu';
import Phone from '../Phone/Phone';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Sample></Sample>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
        </div>
    );
};

export default Home;