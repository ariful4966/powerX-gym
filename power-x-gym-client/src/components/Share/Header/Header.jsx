import React from 'react';
import './Header.css';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';

const Header = ({home, title}) => {
    return (
        <header className="header_bg">
            <Navigation/>
            <Banner home={home} title={title}/>
            
        </header>
    );
};

export default Header;