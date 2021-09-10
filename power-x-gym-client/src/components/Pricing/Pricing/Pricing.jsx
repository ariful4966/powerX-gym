import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import PricingPlan from '../PricingPlan/PricingPlan';

const Pricing = () => {
    return (
        <div>
            <Header title="Pricing Plan" />
            <PricingPlan />
            <Footer/>
        </div>
    );
};

export default Pricing;