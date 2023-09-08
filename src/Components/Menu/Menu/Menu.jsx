import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");
    return (
        <div>
            <Helmet>
                <title>Food Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offered"></SectionTitle>
            {/* offered item */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert items */}
            <MenuCategory items={dessert} img={dessertImg} title="desserts"></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            {/* salads item */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/* soup items */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;