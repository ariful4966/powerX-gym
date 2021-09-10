import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import ViewClasses from '../ViewClasses/ViewClasses';

const Classes = () => {
    return (
        <div>
            <Header title="Our Classes"/>
            <ViewClasses/>
            <Footer/>
        </div>
    );
};

export default Classes;