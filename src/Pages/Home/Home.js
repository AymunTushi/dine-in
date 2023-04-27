import React from 'react';
import { Helmet } from 'react-helmet';

import Services from '../Services/Services/Services';
import Works from '../Works/Works';
import Banner from './Banner/Banner'

const Home = () => {
    return (
        <div>
           <Helmet>
            <title>Home- Dine-In</title>
           </Helmet>
            <Banner></Banner>
           <Services></Services>
            <Works></Works>
            
        </div>
    );
};

export default Home;