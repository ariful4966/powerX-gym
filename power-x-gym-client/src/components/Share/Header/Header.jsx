import React from 'react';
import './Header.css';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header className="header_bg">
            <Navigation/>
            <Banner/>
            
        </header>
    );
};

export default Header;