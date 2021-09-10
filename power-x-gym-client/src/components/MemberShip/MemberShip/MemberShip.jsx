import { spawn } from 'child_process';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import MemberCreate from '../MemberCreate/MemberCreate';

const MemberShip = () => {
    const { mbrId } = useParams();
    const pricingPlans = useSelector(state => state.dataReducer.pricing)
    const singlePlan = pricingPlans.find(priPlan => priPlan._id === mbrId)
    return (
        <div>
            <Header title={"Your gym membership " + singlePlan.name } />
            <MemberCreate />
            <Footer />
        </div>
    );
};

export default MemberShip;