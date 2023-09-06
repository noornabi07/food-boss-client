import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Sample from './Sample/Sample';
import PopularMenu from './PopularMenu/PopularMenu';
import Phone from '../Phone/Phone';
import Recommends from '../Recommends/Recommends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Sample></Sample>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <Recommends></Recommends>
        </div>
    );
};

export default Home;