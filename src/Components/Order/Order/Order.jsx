import React, { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'offered'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabindex] = useState(initialIndex);
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === "offered");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");

    return (
        <div>
            <Helmet>
                <title>Food Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <div className='my-8'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                    <div className='text-center mb-4 font-semibold w-1/3 mx-auto'>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Offered</Tab>
                        </TabList>
                    </div>
                    <TabPanel className="mt-8">
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;