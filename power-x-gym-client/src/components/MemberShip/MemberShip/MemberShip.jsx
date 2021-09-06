import React from 'react';
import Header from '../../Share/Header/Header';
import MemberCreate from '../MemberCreate/MemberCreate';

const MemberShip = () => {
    return (
        <div>
            <Header title="Your gym membership"/>
            <MemberCreate/>
        </div>
    );
};

export default MemberShip;