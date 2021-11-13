import React from 'react';
import Banner from '../Banner/Banner';
import BestSeller from '../BesSeller/BestSeller';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestSeller></BestSeller>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;