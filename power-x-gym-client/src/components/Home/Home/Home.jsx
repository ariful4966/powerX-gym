import React from 'react';
import Header from '../../Share/Header/Header';
import About from '../About/About';
import Chose from '../Chose/Chose';
import Services from '../Services/Services';
import Traning from '../Traning/Traning';

const Home = () => {
    return (
        <div>
            <Header home />
            <Services/>
            <About/>
            <Traning/>
            <Chose/>
        </div>
    );
};

export default Home;