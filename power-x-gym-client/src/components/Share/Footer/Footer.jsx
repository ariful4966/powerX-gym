import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import {faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons'

import FooterWidget from './FooterWidget';
import './Footer.css'
const footerData = [
    {
        name: 'Need Help?',
        link: [
            {
                item: 'Help Center',
                path: '/'
            },
            {
                item: 'Email Suppot',
                path: '/'
            },
            {
                item: 'Live Chart',
                path: '/'
            },
            {
                item: 'Gift Certificate',
                path: '/'
            },
            {
                item: 'Send Us Feedback',
                path: '/'
            }
        ]
    },
    {
        name: 'Degital Resources',
        link: [
            {
                item: 'Articles',
                path: '/'
            },
            {
                item: 'E-Books',
                path: '/'
            }
        ]
    },
    {
        name: 'Connect With us',
        sosalLink: [
            {
                item: 'Youtube',
                path: '/',
                icon: faYoutube
            },

            {
                item: 'Facebook',
                path: '/',
                icon: faFacebookF
            },

            {
                item: 'Instagram',
                path: '/',
                icon: faInstagram
            },
            {
                item: 'Twitter',
                path: '/',
                icon: faTwitter
            },
            {
                item: 'Whats App',
                path: '/',
                icon: faWhatsapp

            }
        
        ]
    }, {
    name: 'Join Our Newsleter',
    body: 'Get exicutive new, fetures and updated from the Shredder widget loss Acaday'
}
]

const Footer = () => {
    return (
        <footer className="footer_area py-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="footer_logo">
                            <Navbar.Brand className="logo_brand" href="#home">Power <span className="brand_color">X</span></Navbar.Brand>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Row className="footer_link">
                            {
                                footerData.map((widget, idx) => <Col md={3} key={idx}><FooterWidget footer={widget} /></Col>)
                            }
                        </Row>
                    </Col>
                </Row>
                <div className="footer_buttom my-4">
                    <p className="text-center text-white">
                        <small>&copy; {new Date().getFullYear()} Programmer Ariful Islam || All Right Reserved</small>
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;